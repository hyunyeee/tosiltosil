import { useState, useRef, useCallback } from "react";

export type DragState = "idle" | "dragging" | "others";

interface Pos {
  x: number;
  y: number;
}

interface DragInfo {
  pointerId: number;
  startClient: Pos;
  startScroll: Pos;
  origin: Pos;
  size: { width: number; height: number };
  el: HTMLElement;
}

interface DragAndDropOptions<T> {
  items: T[];
  onReorder: (oldIndex: number, newIndex: number) => void;
  longPressDuration?: number;
  gap?: number;
  transition?: string;
}

const DEFAULT_LONG_PRESS_DURATION = 200; // ms
const DEFAULT_GAP = 8; // px

const SCROLL_THRESHOLD = 50; // px, 자동 스크롤이 시작될 뷰포트 가장자리 영역
const SCROLL_SPEED = 6; // px, 프레임당 스크롤 속도

export const useDragAndDrop = <T>({
  items,
  onReorder,
  longPressDuration = DEFAULT_LONG_PRESS_DURATION,
  gap = DEFAULT_GAP,
  transition = "transform 200ms ease",
}: DragAndDropOptions<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const longPressTimeout = useRef<number | null>(null);
  const dragInfoRef = useRef<DragInfo | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastPointerPos = useRef<Pos>({ x: 0, y: 0 }); // 마지막 포인터 위치(clientY) 저장

  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState<number | null>(null);
  const [isMoving, setIsMoving] = useState(false);

  // 아이템 위치 업데이트 로직을 별도 함수로 분리
  const updateDragPosition = useCallback((clientX: number, clientY: number) => {
    if (!dragInfoRef.current || !containerRef.current) return;
    const { startClient, startScroll, origin, size } = dragInfoRef.current;

    const dx = clientX - startClient.x;

    //움직인 거리 + 스크롤 거리 (드래그 컨테이너가 움직여야 하는 거리 )
    const dy = clientY - startClient.y + (window.scrollY - startScroll.y);

    const containerRect = containerRef.current.getBoundingClientRect();
    const minDx = containerRect.left - origin.x;
    const maxDx = containerRect.right - origin.x - size.width;
    const clampedDx = Math.max(minDx, Math.min(dx, maxDx));

    dragInfoRef.current.el.style.transform = `translate(${clampedDx}px, ${dy}px)`;
  }, []);

  const updatePlaceholderIndex = useCallback(
    (pointerY: number) => {
      if (!containerRef.current || !dragInfoRef.current) return;

      const { top } = containerRef.current.getBoundingClientRect();
      const { height: itemHeight } = dragInfoRef.current.size;

      const itemSlotHeight = itemHeight + gap;
      const offsetY = pointerY - top;
      const calculatedIndex = Math.floor(offsetY / itemSlotHeight);

      const newIndex = Math.max(0, Math.min(calculatedIndex, items.length - 1));
      if (newIndex !== placeholderIndex) {
        setPlaceholderIndex(newIndex);
      }
    },
    [gap, items.length, placeholderIndex]
  );

  const scrollLoop = useCallback(() => {
    if (!dragInfoRef.current) return;

    const pointerY = lastPointerPos.current.y;
    let scrollAmount = 0;

    if (pointerY < SCROLL_THRESHOLD) {
      scrollAmount = -SCROLL_SPEED;
    } else if (pointerY > window.innerHeight - SCROLL_THRESHOLD) {
      scrollAmount = SCROLL_SPEED;
    }

    if (scrollAmount !== 0) {
      window.scrollBy(0, scrollAmount);
      // 스크롤이 발생했으므로, 현재 포인터 위치를 기준으로 드래그 아이템 위치를 다시 계산하고 업데이트
      updateDragPosition(lastPointerPos.current.x, lastPointerPos.current.y);
      // 플레이스홀더 위치도 업데이트
      updatePlaceholderIndex(lastPointerPos.current.y);
    }

    animationFrameRef.current = requestAnimationFrame(scrollLoop);
  }, [updateDragPosition, updatePlaceholderIndex]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>, index: number) => {
      e.stopPropagation();
      const el = e.currentTarget;
      const pid = e.pointerId;
      const rect = el.getBoundingClientRect();
      lastPointerPos.current = { x: e.clientX, y: e.clientY };

      longPressTimeout.current = window.setTimeout(() => {
        el.setPointerCapture(pid);
        setDragIndex(index);
        dragInfoRef.current = {
          pointerId: pid,
          startClient: { x: e.clientX, y: e.clientY },
          startScroll: { x: window.scrollX, y: window.scrollY },
          origin: { x: rect.left, y: rect.top },
          size: { width: rect.width, height: rect.height },
          el,
        };
        setPlaceholderIndex(index);
        animationFrameRef.current = requestAnimationFrame(scrollLoop);
      }, longPressDuration);
    },
    [longPressDuration, scrollLoop]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragInfoRef.current || e.pointerId !== dragInfoRef.current.pointerId)
        return;

      if (!isMoving) setIsMoving(true);
      e.preventDefault();
      // 마지막 포인터 위치(clientY 기준)를 계속 기록
      lastPointerPos.current = { x: e.clientX, y: e.clientY };

      updateDragPosition(e.clientX, e.clientY);
      updatePlaceholderIndex(e.clientY);
    },
    [isMoving, updatePlaceholderIndex, updateDragPosition]
  );

  const getDragState = useCallback(
    (index: number): DragState => {
      if (dragIndex === index) return "dragging";
      if (dragIndex !== null) return "others";
      return "idle";
    },
    [dragIndex]
  );

  const clearLongPress = useCallback(() => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  }, []);

  const handleDragEnd = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    clearLongPress();

    if (dragInfoRef.current) {
      dragInfoRef.current.el.releasePointerCapture(
        dragInfoRef.current.pointerId
      );
    }

    if (
      dragIndex !== null &&
      placeholderIndex !== null &&
      dragIndex !== placeholderIndex
    ) {
      onReorder(dragIndex, placeholderIndex);
    }

    dragInfoRef.current = null;
    setDragIndex(null);
    setPlaceholderIndex(null);
    setIsMoving(false);
  }, [clearLongPress, dragIndex, onReorder, placeholderIndex]);

  const getTransformStyle = useCallback(
    (index: number): string => {
      if (dragIndex === null || placeholderIndex === null) return "none";

      const itemHeight = dragInfoRef.current?.size.height ?? 0;
      if (itemHeight === 0) return "none";

      const totalShift = itemHeight + gap;

      if (dragIndex < placeholderIndex) {
        if (index > dragIndex && index <= placeholderIndex) {
          return `translateY(-${totalShift}px)`;
        }
      }
      if (dragIndex > placeholderIndex) {
        if (index >= placeholderIndex && index < dragIndex) {
          return `translateY(${totalShift}px)`;
        }
      }
      return "none";
    },
    [dragIndex, placeholderIndex, gap]
  );

  // 컨테이너에 적용할 props
  const containerProps = {
    ref: containerRef,
    onPointerMove: handlePointerMove,
    onPointerUp: handleDragEnd,
    onPointerCancel: handleDragEnd,
  };

  // 각 드래그 아이템에 적용할 props를 반환하는 함수
  const getItemProps = (index: number) => ({
    onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
    onPointerDown: (e: React.PointerEvent<HTMLDivElement>) =>
      handlePointerDown(e, index),
  });

  const getItemStyle = (index: number) => ({
    transform: getTransformStyle(index),
    transition: isMoving ? transition : "none",
  });

  return {
    containerProps,
    getTransformStyle,
    getDragState,
    isMoving,
    getItemProps,
    dragIndex,
    getItemStyle,
  };
};

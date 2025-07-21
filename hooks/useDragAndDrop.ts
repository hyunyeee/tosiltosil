import { useState, useRef, useCallback } from "react";

export type DragState = "idle" | "dragging" | "others";

interface Pos {
  x: number;
  y: number;
}

interface DragInfo {
  pointerId: number;
  start: Pos;
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

  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState<number | null>(null);
  const [isMoving, setIsMoving] = useState(false);

  const clearLongPress = useCallback(() => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  }, []);

  const handleDragEnd = useCallback(() => {
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

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragInfoRef.current || e.pointerId !== dragInfoRef.current.pointerId)
        return;

      if (!isMoving) setIsMoving(true);
      e.preventDefault();
      const dx = e.clientX - dragInfoRef.current.start.x;
      const dy = e.clientY - dragInfoRef.current.start.y;

      const containerRect = containerRef.current!.getBoundingClientRect();
      const originX = dragInfoRef.current.origin.x;
      const itemWidth = dragInfoRef.current.size.width;
      const minDx = containerRect.left - originX;
      const maxDx = containerRect.right - originX - itemWidth;
      const clampedDx = Math.max(minDx, Math.min(dx, maxDx));

      dragInfoRef.current.el.style.transform = `translate(${clampedDx}px, ${dy}px)`;

      updatePlaceholderIndex(e.clientY);
    },
    [isMoving, updatePlaceholderIndex]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>, index: number) => {
      e.stopPropagation();
      const el = e.currentTarget;
      const pid = e.pointerId;
      const rect = el.getBoundingClientRect();

      longPressTimeout.current = window.setTimeout(() => {
        el.setPointerCapture(pid);
        setDragIndex(index);
        setPlaceholderIndex(index);
        dragInfoRef.current = {
          pointerId: pid,
          start: { x: e.clientX, y: e.clientY },
          origin: { x: rect.left, y: rect.top },
          size: { width: rect.width, height: rect.height },
          el,
        };
      }, longPressDuration);
    },
    [longPressDuration]
  );

  const getDragState = useCallback(
    (index: number): DragState => {
      if (dragIndex === index) return "dragging";
      if (dragIndex !== null) return "others";
      return "idle";
    },
    [dragIndex]
  );

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

"use client";
import { useState, useRef } from "react";
import CategoryCard from "./CategoryCard";

export type DragState = "idle" | "dragging" | "others";

interface Category {
  id: string;
  title: string;
  color: string;
}
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

interface CategoryListProps {
  initialCategories: Category[];
}

const LONG_PRESS_DURATION = 200; // ms
const GAP = 8; // px

const CategoryList = ({ initialCategories }: CategoryListProps) => {
  const containerRef = useRef<HTMLDivElement>(null); // 드래그 앤 드롭 범위
  const longPressTimeout = useRef<number | null>(null);
  const dragInfoRef = useRef<DragInfo | null>(null); // 드래그 중인 컴포넌트

  const [categories, setCategories] = useState(initialCategories);
  const [dragIndex, setDragIndex] = useState<number | null>(null); // 드래그 중인 index
  const [placeholderIndex, setPlaceholderIndex] = useState<number | null>(null); // 드래그 중일 떄 비어있는 곳 index
  const [isMoving, setIsMoving] = useState(false);

  const handleReorder = (newOrder: Category[]) => {
    // TODO: 서버에 변경된 순서 요청 보내기
    setCategories(newOrder);
  };

  const handleDeleteCategory = (id: string) => {
    // TODO: 서버에 삭제 요청 보내기
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  // 꾹 눌렀을 때 처리
  const handlePointerDown = (
    e: React.PointerEvent<HTMLDivElement>,
    index: number
  ) => {
    e.stopPropagation();

    const el = e.currentTarget; // 드래그할 요소 참조
    const pid = e.pointerId; // 포인터 식별자
    const rect = el.getBoundingClientRect();

    const startX = e.clientX;
    const startY = e.clientY;

    longPressTimeout.current = window.setTimeout(() => {
      // 1) 포인터 캡처
      el.setPointerCapture(pid);

      // 2) 드래그 상태 진입
      setDragIndex(index);
      setPlaceholderIndex(index);

      dragInfoRef.current = {
        pointerId: pid,
        start: { x: startX, y: startY },
        origin: { x: rect.left, y: rect.top },
        size: { width: rect.width, height: rect.height },
        el,
      };
    }, LONG_PRESS_DURATION);
  };

  // 드래그 중 포인터 이동 처리
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragInfoRef.current || e.pointerId !== dragInfoRef.current.pointerId)
      return;

    if (!isMoving) {
      setIsMoving(true);
    }
    e.preventDefault();

    // 얼마나 이동했는지 계산(실제 이벤트가 발생한 좌표 - 원래 위치)
    const dx = e.clientX - dragInfoRef.current.start.x;
    const dy = e.clientY - dragInfoRef.current.start.y;

    dragInfoRef.current.el.style.transform = `translate(${dx}px, ${dy}px)`;

    updatePlaceholderIndex(e.clientY);
  };

  // 드래그 종료 처리
  const handleDragEnd = () => {
    clearLongPress();

    if (dragInfoRef.current) {
      // 캡처 해제
      dragInfoRef.current.el.releasePointerCapture(
        dragInfoRef.current.pointerId
      );
    }

    // 드래그가 실제로 일어났을 때만 실행
    if (
      dragIndex !== null &&
      placeholderIndex !== null &&
      dragIndex !== placeholderIndex
    ) {
      const newList = [...categories];
      const [moved] = newList.splice(dragIndex, 1);
      newList.splice(placeholderIndex, 0, moved);
      setCategories(newList);
      handleReorder(newList);
    }

    dragInfoRef.current = null;
    setDragIndex(null);
    setPlaceholderIndex(null);
    setIsMoving(false);
  };

  // 타이머 취소 (짧게 누르거나 드래그 포기 시)
  const clearLongPress = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
      longPressTimeout.current = null;
    }
  };

  const updatePlaceholderIndex = (pointerY: number) => {
    if (!containerRef.current || !dragInfoRef.current) return;

    const { top } = containerRef.current.getBoundingClientRect();
    const { height: itemHeight } = dragInfoRef.current.size;

    const itemSlotHeight = itemHeight + GAP;
    const offsetY = pointerY - top;
    const calculatedIndex = Math.floor(offsetY / itemSlotHeight);

    // 인덱스가 배열 범위를 벗어나지 않도록 제한
    const newIndex = Math.max(
      0,
      Math.min(calculatedIndex, categories.length - 1)
    );
    if (newIndex !== placeholderIndex) {
      setPlaceholderIndex(newIndex);
    }
  };

  const getTransformStyle = (index: number): string => {
    if (dragIndex === null || placeholderIndex === null) return "none";

    const itemHeight = dragInfoRef.current?.size.height ?? 0;
    const totalShift = itemHeight + GAP;

    // 아래로 내리는 경우
    if (dragIndex < placeholderIndex) {
      if (index > dragIndex && index <= placeholderIndex) {
        return `translateY(-${totalShift}px)`;
      }
    }
    // 위로 올리는 경우
    if (dragIndex > placeholderIndex) {
      if (index >= placeholderIndex && index < dragIndex) {
        return `translateY(${totalShift}px)`;
      }
    }
    return "none";
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handleDragEnd}
      onPointerCancel={handleDragEnd}
      className="flex touch-none flex-col gap-2 py-2 select-none"
    >
      {categories.map((category, index) => {
        const isDragging = dragIndex === index;
        const state: DragState = isDragging
          ? "dragging"
          : dragIndex !== null
            ? "others"
            : "idle";

        return (
          <div
            key={category.id}
            style={
              isDragging
                ? {
                    zIndex: 1000,
                  }
                : {
                    transform: getTransformStyle(index),
                    transition: isMoving ? "transform 200ms ease" : "none",
                  }
            }
            onContextMenu={(e) => e.preventDefault()}
            onPointerDown={(e) => handlePointerDown(e, index)}
          >
            <CategoryCard
              title={category.title}
              color={category.color}
              onCategoryDelete={() => handleDeleteCategory(category.id)}
              dragState={state}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;

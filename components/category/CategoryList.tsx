"use client";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

import { useDragAndDrop, DragState } from "@/hooks/useDragAndDrop";

interface Category {
  id: string;
  title: string;
  color: string;
}

interface CategoryListProps {
  initialCategories: Category[];
}

const CategoryList = ({ initialCategories }: CategoryListProps) => {
  const [categories, setCategories] = useState(initialCategories);

  // 순서 변경 시 서버에 요청을 보내고 상태를 업데이트하는 함수
  const handleReorder = (oldIndex: number, newIndex: number) => {
    setCategories((prev) => {
      const newList = [...prev];
      const [moved] = newList.splice(oldIndex, 1);
      newList.splice(newIndex, 0, moved);
      // TODO: 서버에 변경된 순서(newList) 요청 보내기
      return newList;
    });
  };

  // 훅을 호출하여 필요한 props와 상태를 가져옵니다.
  const { containerProps, getItemStyle, getDragState, getItemProps } =
    useDragAndDrop({
      items: categories,
      onReorder: handleReorder,
    });

  const handleDeleteCategory = (id: string) => {
    // TODO: 서버에 삭제 요청 보내기
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };
  return (
    <div
      {...containerProps}
      className="flex touch-none flex-col gap-2 py-2 select-none"
    >
      {categories.map((category, index) => {
        const state: DragState = getDragState(index);
        const Dragging = state === "dragging";
        const CategoryStyle = Dragging
          ? {
              zIndex: 1000,
            }
          : {
              ...getItemStyle(index),
            };

        return (
          <div key={category.id} {...getItemProps(index)} style={CategoryStyle}>
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

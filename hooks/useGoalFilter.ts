import { useMemo, useState } from "react";
import { GoalCardProps } from "@/types/goal";

export const useGoalFilter = (goalList: GoalCardProps[]) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  };

  const filteredGoalList = useMemo(() => {
    if (selectedCategoryId === null) return goalList;
    return goalList.filter((goal) => goal.categoryId === selectedCategoryId);
  }, [goalList, selectedCategoryId]);

  return {
    selectedCategoryId,
    handleCategorySelect,
    filteredGoalList,
  };
};

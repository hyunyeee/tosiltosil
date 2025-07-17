import { useEffect, useState } from "react";
import { GoalCardProps } from "@/types/goal";

interface UseGoalFilterProps {
  goalList: GoalCardProps[];
}

export const useGoalFilter = ({ goalList }: UseGoalFilterProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [filteredGoalList, setFilteredGoalList] =
    useState<GoalCardProps[]>(goalList);

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  };

  useEffect(() => {
    if (selectedCategoryId === null) {
      setFilteredGoalList(goalList);
    } else {
      setFilteredGoalList(
        goalList.filter((item) => item.categoryId === selectedCategoryId)
      );
    }
  }, [selectedCategoryId, goalList]);

  return {
    goalList,
    selectedCategoryId,
    filteredGoalList,
    handleCategorySelect,
  };
};

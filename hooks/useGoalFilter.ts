import { useEffect, useState } from "react";
import { GoalCardProps } from "@/types/Category";
import { CategoryList } from "@/constants/mocks/CategoryList";
import { GoalListData } from "@/constants/mocks/GoalList";

export const useGoalFilter = () => {
  const [categoryList] = useState(CategoryList || []);
  const [goalList] = useState<GoalCardProps[]>(GoalListData || []);
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
    categoryList,
    goalList,
    selectedCategoryId,
    filteredGoalList,
    handleCategorySelect,
  };
};

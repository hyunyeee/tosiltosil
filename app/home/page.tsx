"use client";

import { useGoalFilter } from "@/hooks/useGoalFilter";
import FriendStatusBoard from "@/components/home/FriendStatusBoard";
import WeekDateSelector from "@/components/home/WeekDateSelector";
import GoalPercentage from "@/components/home/GoalPercentage";
import CategorySelectBar from "@/components/home/CategorySelectBar";
import GoalList from "@/components/home/GoalList";

export default function MainPage() {
  const {
    categoryList,
    selectedCategoryId,
    filteredGoalList,
    handleCategorySelect,
  } = useGoalFilter();

  return (
    <div className="flex w-full flex-col">
      <FriendStatusBoard />
      <WeekDateSelector />
      <GoalPercentage percentage={50} />
      <CategorySelectBar
        categoryList={categoryList}
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={handleCategorySelect}
      />
      <GoalList goalList={filteredGoalList} />
    </div>
  );
}

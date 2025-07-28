"use client";

import { useState } from "react";
import { useGoalFilter } from "@/hooks/useGoalFilter";
import FriendStatusBoard from "@/components/home/FriendStatusBoard";
import WeekDateSelector from "@/components/home/WeekDateSelector";
import GoalPercentage from "@/components/home/GoalPercentage";
import CategorySelectBar from "@/components/home/CategorySelectBar";
import GoalList from "@/components/home/GoalList";
import { INITIAL_CATEGORY } from "@/constants/mocks/CategoryList";
import { GoalListData } from "@/constants/mocks/GoalList";

export default function MainPage() {
  // TODO: 데이터 fetch 후 데이터 set 예정
  const [categoryList, setCategoryList] = useState(INITIAL_CATEGORY);
  const [goalList, setGoalList] = useState(GoalListData);

  const { selectedCategoryId, handleCategorySelect, filteredGoalList } =
    useGoalFilter(goalList);

  return (
    <div className="flex w-full flex-col">
      <FriendStatusBoard />
      <WeekDateSelector />
      <GoalPercentage percentage={50} hasButton />
      <CategorySelectBar
        categoryList={categoryList}
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={handleCategorySelect}
      />
      <GoalList goalList={filteredGoalList} />
    </div>
  );
}

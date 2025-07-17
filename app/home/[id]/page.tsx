"use client";

import { useEffect, useState } from "react";
import { CategoryList } from "@/constants/mocks/CategoryList";
import { GoalListData } from "@/constants/mocks/GoalList";
import WeekDateSelector from "@/components/home/WeekDateSelector";
import GoalPercentage from "@/components/home/GoalPercentage";
import CategorySelectBar from "@/components/home/CategorySelectBar";
import GoalList from "@/components/home/GoalList";
import CountDashBoard from "@/components/home/CountDashBoard";
import FriendHomeHeader from "@/components/home/FriendHomeHeader";

export default function FriendMainPage() {
  const [categoryList, setCategoryList] = useState(CategoryList || []);
  const [goalList, setGoalList] = useState(GoalListData || []);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [filteredGoalList, setFilteredGoalList] = useState(goalList);

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  };

  const filterByCategoryId = (categoryId: number | null) => {
    if (categoryId === null) return goalList;
    return goalList.filter((item) => item.categoryId === categoryId);
  };

  const updateFilteredGoalList = (categoryId: number | null) => {
    const result = filterByCategoryId(categoryId);
    setFilteredGoalList(result);
  };

  useEffect(() => {
    updateFilteredGoalList(selectedCategoryId);
  }, [selectedCategoryId, goalList]);

  return (
    <div className="flex w-full flex-col">
      <FriendHomeHeader
        nickname="홍길동"
        code="12345"
        relationship="REQUEST_RECEIVED"
      />
      <CountDashBoard
        profileImg=""
        totalTime="PT2H5M10S"
        friendCount={2}
        goalCount={3}
      />
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

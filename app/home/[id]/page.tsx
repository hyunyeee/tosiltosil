"use client";

import { useState } from "react";
import { useGoalFilter } from "@/hooks/useGoalFilter";
import FriendHomeHeader from "@/components/home/FriendHomeHeader";
import CountDashBoard from "@/components/home/CountDashBoard";
import WeekDateSelector from "@/components/home/WeekDateSelector";
import GoalPercentage from "@/components/home/GoalPercentage";
import CategorySelectBar from "@/components/home/CategorySelectBar";
import GoalList from "@/components/home/GoalList";
import PrivateUserGoal from "@/components/home/PrivateUserGoal";
import { INITIAL_CATEGORY } from "@/constants/mocks/CategoryList";
import { GoalListData } from "@/constants/mocks/GoalList";

export default function FriendMainPage() {
  // TODO: 데이터 fetch 후 데이터 set 예정
  const [categoryList, setCategoryList] = useState(INITIAL_CATEGORY);
  const [goalList, setGoalList] = useState(GoalListData);

  const { selectedCategoryId, handleCategorySelect, filteredGoalList } =
    useGoalFilter(goalList);

  const isVisible = false; // 비공개 사용자

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
      <GoalPercentage percentage={50} hasButton={false} />
      {isVisible ? (
        <>
          <CategorySelectBar
            categoryList={categoryList}
            selectedCategoryId={selectedCategoryId}
            onCategorySelect={handleCategorySelect}
          />
          <GoalList goalList={filteredGoalList} />
        </>
      ) : (
        <PrivateUserGoal />
      )}
    </div>
  );
}

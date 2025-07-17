"use client";

import { useGoalFilter } from "@/hooks/useGoalFilter";
import FriendHomeHeader from "@/components/home/FriendHomeHeader";
import CountDashBoard from "@/components/home/CountDashBoard";
import WeekDateSelector from "@/components/home/WeekDateSelector";
import GoalPercentage from "@/components/home/GoalPercentage";
import CategorySelectBar from "@/components/home/CategorySelectBar";
import GoalList from "@/components/home/GoalList";
import PrivateUserGoal from "@/components/home/PrivateUserGoal";

export default function FriendMainPage() {
  const {
    categoryList,
    selectedCategoryId,
    filteredGoalList,
    handleCategorySelect,
  } = useGoalFilter();

  const isVisibility = false;
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
      {isVisibility ? (
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

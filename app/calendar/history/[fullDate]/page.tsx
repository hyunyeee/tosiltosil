"use client";

import { useState } from "react";
import { useRecordDate } from "@/hooks/useRecordDate";
import { getPrimaryColor, getSubColor } from "@/utils/theme";
import FriendListFrame from "@/components/friend/FriendListFrame";
import GoalCard from "@/components/home/GoalCard";
import { INITIAL_CATEGORY } from "@/constants/mocks/CategoryList";
import { GoalListData } from "@/constants/mocks/GoalList";

export default function HistoryPage() {
  // TODO: 데이터 fetch 후 데이터 set 예정
  const [categoryList, setCategoryList] = useState(INITIAL_CATEGORY);
  const [goalList, setGoalList] = useState(GoalListData);
  const { year, month, day } = useRecordDate();

  const percentage = 30;

  return (
    <div className="w-full">
      <div className="ml-[20px]">
        <h1 className="title3 mt-[43px] mb-[11px]">기록</h1>
        <h3 className="body1">
          {year}년 {month}월 {day}일
        </h3>
      </div>

      <p className="body2 text-primary-deepGray mt-[19px] mr-[17px] mb-[19px] text-right">
        목표량
        <b className="body1 text-primary-mainText"> {percentage}</b>%
      </p>
      <div className="bg-gray-background flex shrink-0 items-center gap-[14px] overflow-x-scroll border-b-[1px] border-b-black/10 px-[20px] py-[9px] [&::-webkit-scrollbar]:hidden">
        {categoryList?.map(({ color, title }, index) => (
          <div
            key={index}
            className="footnote text-primary-mainText flex-shrink-0 cursor-pointer rounded-[2px] border-[1px] px-[12px] py-[4px] text-center"
            style={{
              backgroundColor: getSubColor(color),
              borderColor: getPrimaryColor(color),
            }}
          >
            {title}
          </div>
        ))}
      </div>
      <FriendListFrame
        isEmpty={goalList.length === 0}
        content="목표가 없습니다."
      >
        <div className="bg-gray-card flex w-full flex-1 flex-col gap-[20px] pr-[18px] pl-[17px]">
          {goalList.map((goal, index) => (
            <GoalCard key={index} {...goal} hasButton={false} />
          ))}
        </div>
      </FriendListFrame>
    </div>
  );
}

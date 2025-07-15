"use client";

import { useEffect, useRef, useState } from "react";

const SCROLL_TO_TODAY_OFFSET = 327;

const WeekDateSelector = () => {
  const today = new Date();
  const [focusDate, setFocusDate] = useState<Date>(today);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const todayItemRef = useRef<HTMLDivElement>(null);

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 7);

  const dateList = Array.from({ length: 21 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  const isSameDate = (a: Date, b: Date) => {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  };

  const getDayText = (date: Date, isToday: boolean) => {
    if (isToday) return "오늘";
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[date.getDay()];
  };

  const getDayTextColorClass = (day: number, isFocused: boolean) => {
    if (day === 0) return isFocused ? "text-primary-red" : "text-sub-red"; // 일요일
    if (day === 6) return isFocused ? "text-primary-blue" : "text-sub-blue"; // 토요일
    return isFocused ? "text-primary-mainText" : "text-primary-darkGray"; // 평일
  };

  const getUnderlineColorClass = (day: number) => {
    if (day === 0) return "bg-primary-red"; // 일요일
    if (day === 6) return "bg-primary-blue"; // 토요일
    return "bg-primary-mainText"; // 평일
  };

  const toggleFocusDate = (date: Date) => {
    setFocusDate(date);
  };

  const focusToday = () => {
    scrollToToday();
    setFocusDate(today);
  };

  const scrollToToday = () => {
    if (!scrollContainerRef.current || !todayItemRef.current) return;
    const container = scrollContainerRef.current;
    container.scrollTo({
      left: SCROLL_TO_TODAY_OFFSET,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToToday();
  }, []);

  return (
    <div className="bg-gray-card flex pt-[8px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
      <div
        className="flex cursor-pointer flex-col items-center gap-[3px] px-[19px]"
        onClick={focusToday}
      >
        <p className="caption2">{today.getFullYear()}</p>
        <p className="subhead2 text-nowrap">
          {`${today.getMonth() + 1}`.padStart(2, "0")}월
        </p>
      </div>
      <div className="bg-primary-gray mr-[18px] h-full w-[1px]" />
      <div
        className="flex items-center gap-[15px] overflow-x-auto pr-[18px] [&::-webkit-scrollbar]:hidden"
        ref={scrollContainerRef}
      >
        {dateList.map((date, i) => {
          const isToday = isSameDate(date, today);
          const isFocused = isSameDate(focusDate, date);
          const day = date.getDay();
          const dayColorClass = getDayTextColorClass(day, isFocused);
          const underBarColorClass = getUnderlineColorClass(day);

          return (
            <div
              key={i}
              ref={isToday ? todayItemRef : null}
              className={`${
                dayColorClass
              } flex w-[32px] flex-shrink-0 cursor-pointer flex-col items-center`}
              onClick={() => toggleFocusDate(date)}
            >
              <p className={`${isFocused ? "caption1" : "caption2"} mb-[3px]`}>
                {date.getDate()}일
              </p>
              <p className={`${isFocused ? "mb-[6px]" : "mb-[8px]"} subhead2`}>
                {getDayText(date, isToday)}
              </p>
              {isFocused && (
                <div
                  className={`h-[2px] w-[36px] rounded-t-full ${underBarColorClass}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekDateSelector;

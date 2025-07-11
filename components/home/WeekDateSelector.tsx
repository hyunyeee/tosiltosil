"use client";

import { useEffect, useRef, useState } from "react";

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
    const SCROLL_AMOUNT = 329;
    container.scrollTo({
      left: SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToToday();
  }, []);

  return (
    <div className="bg-gray-card flex py-[8px]">
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
        className="flex items-center gap-[15px] overflow-x-auto pr-[18px]"
        ref={scrollContainerRef}
      >
        {dateList.map((date, i) => {
          const isToday = isSameDate(date, today);
          const isFocused = isSameDate(focusDate, date);
          return (
            <div
              key={i}
              ref={isToday ? todayItemRef : null}
              className={`${
                isFocused ? "text-primary-mainText" : "text-primary-darkGray"
              } flex w-[32px] flex-shrink-0 cursor-pointer flex-col items-center gap-[3px]`}
              onClick={() => toggleFocusDate(date)}
            >
              <p className={isFocused ? "caption1" : "caption2"}>
                {date.getDate()}일
              </p>
              <p className="subhead2">{getDayText(date, isToday)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekDateSelector;

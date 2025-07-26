"use client";

import { useWeekDates } from "@/hooks/useWeekDates";

const WeekDateSelector = () => {
  const {
    today,
    focusDate,
    dateList,
    scrollContainerRef,
    todayItemRef,
    isSameDate,
    getDayText,
    getDayTextColorClass,
    getUnderlineColorClass,
    toggleFocusDate,
    focusToday,
    isReady,
  } = useWeekDates();

  return (
    <div
      className={`bg-gray-card flex pt-[8px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-opacity duration-200 ${
        isReady ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="flex cursor-pointer flex-col items-center gap-[3px] px-[19px]"
        onClick={focusToday}
      >
        <p className="text-primary-deepGray caption2">{today.getFullYear()}</p>
        <p className="text-primary-deepGray subhead2 text-nowrap">
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

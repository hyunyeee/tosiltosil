"use client";

import Link from "next/link";
import { useMonthDates } from "@/hooks/useMonthDates";
import { isSameDate } from "@/utils/date";

const days = ["월", "화", "수", "목", "금", "토", "일"];

export default function CalendarPage() {
  const { focusDate, calendarDates, goToPrevMonth, goToNextMonth, formatDate } =
    useMonthDates();

  const getDateColorClass = (isFocused: boolean) => {
    return isFocused
      ? "text-white bg-primary-mainText"
      : "text-primary-mainText bg-gray-background border-[1px] border-black/20";
  };

  return (
    <div className="w-full">
      <h3 className="text-primary-mainText title3 mx-[20px] mt-[43px] mb-[45px]">
        캘린더
      </h3>

      <div className="mb-[26px] flex items-center justify-center gap-[10px]">
        <button onClick={goToPrevMonth}>
          <img src="/icons/left-arrow.svg" alt="전월로 이동" />
        </button>
        <p className="text-primary-mainText body1">
          {focusDate.getFullYear()}년{" "}
          {String(focusDate.getMonth() + 1).padStart(2, "0")}월
        </p>
        <button onClick={goToNextMonth}>
          <img src="/icons/right-arrow.svg" alt="차월로 이동" />
        </button>
      </div>

      <div className="bg-gray-card px-[28px] pt-[56px] pb-[48px]">
        <div className="text-primary-deepGray footnote grid grid-cols-7 text-center">
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="my-[28px] h-[1px] w-full bg-black/20" />

        <div className="grid grid-cols-7 gap-x-[8px] gap-y-[6px] sm:gap-x-[12px] md:gap-x-[18px]">
          {calendarDates.map((date, i) =>
            date ? (
              <Link
                href={`/calendar/history/${formatDate(date)}`}
                key={i}
                className="w-[32px]"
                prefetch={false}
              >
                <div
                  className={`${getDateColorClass(
                    isSameDate(focusDate, date)
                  )} subhead1 flex h-[32px] cursor-pointer items-center justify-center rounded-[4px]`}
                >
                  {date.getDate()}
                </div>
                <div className="mt-[6px] flex w-full items-center justify-center gap-[3px] py-[4px]">
                  <div className="bg-primary-yellow h-[6px] w-[6px]" />
                  <div className="bg-primary-mint h-[6px] w-[6px]" />
                </div>
              </Link>
            ) : (
              <div key={i} className="h-[32px] w-[32px]" /> // 빈 셀
            )
          )}
        </div>
      </div>
    </div>
  );
}

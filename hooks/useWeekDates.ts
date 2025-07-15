import { useEffect, useMemo, useRef, useState } from "react";

export const useWeekDates = () => {
  const SCROLL_TO_TODAY_OFFSET = 327;

  const today = useMemo(() => new Date(), []);
  const [focusDate, setFocusDate] = useState<Date>(today);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const todayItemRef = useRef<HTMLDivElement>(null);

  const startDate = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() - 7);
    return d;
  }, [today]);

  const dateList = useMemo(() => {
    return Array.from({ length: 21 }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });
  }, [startDate]);

  const isSameDate = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const getDayText = (date: Date, isToday: boolean) => {
    if (isToday) return "오늘";
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[date.getDay()];
  };

  const getDayTextColorClass = (day: number, isFocused: boolean) => {
    if (day === 0) return isFocused ? "text-primary-red" : "text-sub-red";
    if (day === 6) return isFocused ? "text-primary-blue" : "text-sub-blue";
    return isFocused ? "text-primary-mainText" : "text-primary-darkGray";
  };

  const getUnderlineColorClass = (day: number) => {
    if (day === 0) return "bg-primary-red";
    if (day === 6) return "bg-primary-blue";
    return "bg-primary-mainText";
  };

  const scrollToToday = () => {
    const container = scrollContainerRef.current;
    if (!container || !todayItemRef.current) return;
    container.scrollTo({
      left: SCROLL_TO_TODAY_OFFSET,
      behavior: "smooth",
    });
  };

  const focusToday = () => {
    scrollToToday();
    setFocusDate(today);
  };

  useEffect(() => {
    scrollToToday();
  }, []);

  return {
    today,
    focusDate,
    setFocusDate,
    dateList,
    scrollContainerRef,
    todayItemRef,
    isSameDate,
    getDayText,
    getDayTextColorClass,
    getUnderlineColorClass,
    toggleFocusDate: setFocusDate,
    focusToday,
  };
};

"use client";

import { useMemo, useState } from "react";

export const useMonthDates = () => {
  const today = useMemo(() => new Date(), []);
  const [focusDate, setFocusDate] = useState<Date>(today);

  const getStartDayOfWeek = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    return (firstDay.getDay() + 6) % 7; // 월요일 시작 (0)
  };

  const calendarDates = useMemo(() => {
    const year = focusDate.getFullYear();
    const month = focusDate.getMonth();
    const startDay = getStartDayOfWeek(focusDate);

    const lastDay = new Date(year, month + 1, 0).getDate();
    const dates = Array.from(
      { length: lastDay },
      (_, i) => new Date(year, month, i + 1)
    );

    const emptyCells = Array.from({ length: startDay }, () => null);

    return [...emptyCells, ...dates];
  }, [focusDate]);

  const goToPrevMonth = () => {
    setFocusDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setFocusDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const formatDate = (date: Date): string => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const toggleFocusDate = (date: Date) => {
    setFocusDate(date);
  };

  return {
    focusDate,
    setFocusDate,
    calendarDates,
    toggleFocusDate,
    goToPrevMonth,
    goToNextMonth,
    formatDate,
  };
};

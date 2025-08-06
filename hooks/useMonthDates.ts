"use client";

import { useMemo, useState } from "react";
import { getStartDayOfWeek } from "@/utils/date";

export const useMonthDates = () => {
  const [focusDate, setFocusDate] = useState(() => new Date());

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

  return {
    focusDate,
    setFocusDate,
    calendarDates,
    goToPrevMonth,
    goToNextMonth,
  };
};

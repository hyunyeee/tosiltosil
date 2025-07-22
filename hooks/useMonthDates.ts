import { useMemo, useState } from "react";

export const useMonthDates = () => {
  const today = useMemo(() => new Date(), []);
  const [focusDate, setFocusDate] = useState<Date>(today);

  const dateList = useMemo(() => {
    const year = focusDate.getFullYear();
    const month = focusDate.getMonth();

    // 다음 달의 0일(전날) === 이번 달의 마지막 날
    const lastDay = new Date(year, month + 1, 0).getDate();

    return Array.from({ length: lastDay }, (_, i) => {
      return new Date(year, month, i + 1);
    });
  }, [focusDate]);

  const isSameDate = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const getDateColorClass = (isFocused: boolean) => {
    return isFocused
      ? "text-white bg-primary-mainText"
      : "text-primary-mainText bg-gray-background border-[1px] border-black/20";
  };

  const goToPrevMonth = () => {
    setFocusDate((prev) => {
      const year = prev.getFullYear();
      const month = prev.getMonth();
      return new Date(year, month - 1, 1);
    });
  };

  const goToNextMonth = () => {
    setFocusDate((prev) => {
      const year = prev.getFullYear();
      const month = prev.getMonth();
      return new Date(year, month + 1, 1);
    });
  };

  const formatDate = (date: Date): string => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  return {
    focusDate,
    setFocusDate,
    dateList,
    isSameDate,
    getDateColorClass,
    toggleFocusDate: setFocusDate,
    goToPrevMonth,
    goToNextMonth,
    formatDate,
  };
};

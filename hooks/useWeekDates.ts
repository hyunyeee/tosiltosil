import { useLayoutEffect, useMemo, useRef, useState } from "react";

export const useWeekDates = () => {
  const SCROLL_TO_TODAY_OFFSET = 327;

  const today = useMemo(() => new Date(), []);
  const [focusDate, setFocusDate] = useState<Date>(today);
  const [isReady, setIsReady] = useState(false);

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

  useLayoutEffect(() => {
    scrollToToday("auto");
    setIsReady(true);
  }, []);

  const scrollToToday = (behavior: ScrollBehavior = "auto") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({
      left: SCROLL_TO_TODAY_OFFSET,
      behavior,
    });
  };

  const focusToday = () => {
    scrollToToday("smooth");
    setFocusDate(today);
  };

  const toggleFocusDate = (date: Date) => {
    setFocusDate(date);
  };

  return {
    today,
    focusDate,
    dateList,
    scrollContainerRef,
    todayItemRef,
    toggleFocusDate,
    focusToday,
    isReady,
  };
};

"use client";

import { useEffect, useState } from "react";

const DURATION_IN_SECONDS = 300; // 5분

export const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [resendTrigger, setResendTrigger] = useState(0); // 타이머 재시작 트리거

  useEffect(() => {
    if (resendTrigger === 0) return;

    let timerId: ReturnType<typeof setTimeout> | null = null;

    const startTime = Date.now();

    const tick = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(DURATION_IN_SECONDS - elapsed, 0);

      setTimeLeft(remaining);

      if (remaining > 0) {
        timerId = setTimeout(tick, 1000);
      }
    };

    setTimeLeft(DURATION_IN_SECONDS);
    timerId = setTimeout(tick, 1000);

    return () => {
      if (timerId !== null) clearTimeout(timerId);
    };
  }, [resendTrigger]);

  return { timeLeft, setResendTrigger };
};

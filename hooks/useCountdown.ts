"use client";

import { useEffect, useState } from "react";

const DURATION_IN_SECONDS = 300; // 5분

type UseCountdownOption = {
  duration?: number; // 기본 300초
};

export const useCountdown = ({
  duration = DURATION_IN_SECONDS,
}: UseCountdownOption = {}) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [resendTrigger, setResendTrigger] = useState(0); // 타이머 재시작 트리거

  useEffect(() => {
    if (resendTrigger === 0) return;

    let timerId: ReturnType<typeof setTimeout> | null = null;

    const startTime = Date.now();

    const tick = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(duration - elapsed, 0);

      setTimeLeft(remaining);

      if (remaining > 0) {
        timerId = setTimeout(tick, 1000);
      }
    };

    setTimeLeft(duration);
    timerId = setTimeout(tick, 1000);

    return () => {
      if (timerId !== null) clearTimeout(timerId);
    };
  }, [resendTrigger]);

  return { timeLeft, setResendTrigger };
};

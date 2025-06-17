"use client";

import { useEffect, useState } from "react";

export const useCountdown = (duration: number) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [resendTrigger, setResendTrigger] = useState(0); // 타이머 재시작 트리거

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(duration - elapsed, 0);

      setTimeLeft(remaining);

      if (remaining > 0) {
        timerId = setTimeout(tick, 1000);
      }
    };

    tick();

    return () => clearTimeout(timerId);
  }, [resendTrigger]);

  return { timeLeft, setResendTrigger };
};

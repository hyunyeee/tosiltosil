"use client";

import { useEffect, useState } from "react";

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [isMockingReady, setIsMockingReady] = useState(false);
  useEffect(() => {
    async function init() {
      if (
        typeof window !== "undefined" &&
        process.env.NODE_ENV === "development"
      ) {
        const { worker } = await import("../mocks/browser");
        await worker.start();
        setIsMockingReady(true);
      }
    }
    init();
  }, []);
  if (!isMockingReady) return;
  return <>{children}</>;
}

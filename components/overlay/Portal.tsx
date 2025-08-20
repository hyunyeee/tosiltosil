"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: ReactNode;
}

export default function Portal({ children }: IPortalProps) {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    setTarget(document.querySelector("#portal"));
  }, []);

  if (!target) return null;
  return createPortal(children, target);
}

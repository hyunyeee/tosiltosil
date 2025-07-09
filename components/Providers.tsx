"use client";

import { Provider } from "jotai";
import { ReactNode } from "react";

interface IProviders {
  children: ReactNode;
}
export const Providers = ({ children }: IProviders) => {
  return <Provider>{children}</Provider>;
};

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import { ReactNode, useState } from "react";
import { MSWProvider } from "./MSWProvider";

interface IProviders {
  children: ReactNode;
}
export const Providers = ({ children }: IProviders) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <Provider>
      <MSWProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </MSWProvider>
    </Provider>
  );
};

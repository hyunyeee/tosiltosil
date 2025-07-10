import { ReactNode } from "react";
import PolicyFooter from "@/components/commons/footer/PolicyFooter";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col justify-between px-[20px] pb-[26px]">
      {children}
      <PolicyFooter />
    </div>
  );
}

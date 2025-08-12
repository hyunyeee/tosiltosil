"use client";

import { FOOTER_CONFIG } from "@/constants/footerConstants";
import { usePathname } from "next/navigation";
import BottomNavBar from "./BottomNavBar/BottomNavBar";
import PolicyFooter from "./PolicyFooter/PolicyFooter";

const FooterController = () => {
  const pathname = usePathname();

  const matches = (prefix: string) =>
    pathname === prefix || pathname.startsWith(`${prefix}/`);

  const showNavBar = FOOTER_CONFIG.nav.some((path) => matches(path));
  const showPolicyFooter = FOOTER_CONFIG.policy.some((path) => matches(path));

  return (
    <>
      {showPolicyFooter && <PolicyFooter />}
      {showNavBar && <BottomNavBar />}
    </>
  );
};

export default FooterController;

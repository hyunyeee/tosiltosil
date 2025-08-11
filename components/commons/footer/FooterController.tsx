"use client";

import { FOOTER_CONFIG } from "@/constants/footerConstants";
import { usePathname } from "next/navigation";
import BottomNavBar from "./BottomNavBar/BottomNavBar";
import PolicyFooter from "./PolicyFooter/PolicyFooter";

const FooterController = () => {
  const pathname = usePathname();

  const getFooterType = () => {
    if (FOOTER_CONFIG.nav.some((path) => pathname.startsWith(path))) {
      return "nav";
    }
    if (FOOTER_CONFIG.policy.some((path) => pathname.startsWith(path))) {
      return "policy";
    }
    return "none";
  };

  const footerType = getFooterType();

  switch (footerType) {
    case "nav":
      return <BottomNavBar />;
    case "policy":
      return <PolicyFooter />;
    default:
      return null;
  }
};

export default FooterController;

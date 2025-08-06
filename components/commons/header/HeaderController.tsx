"use client";
import { usePathname } from "next/navigation";
import BackHeader from "./BackHeader";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { hasNewNotificationAtom } from "@/stores/notificatonAtom";
import LogoHeader from "./LogoHeader";
import {
  EXACT_PATH_CONFIGS,
  PATTERN_PATH_CONFIGS,
} from "@/constants/headerConstants";

const HeaderController = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [hasNewNotification, setHasNewNotification] = useAtom(
    hasNewNotificationAtom
  );

  const handleAlarmClick = () => {
    router.push("/alarm");
    setHasNewNotification(false);
  };

  let config = EXACT_PATH_CONFIGS[pathname];

  if (!config) {
    const patternMatch = PATTERN_PATH_CONFIGS.find((c) => c.test(pathname));
    if (patternMatch) {
      config = patternMatch.config;
    }
  }

  if (!config || !config.component) {
    return null;
  }

  const commonAlarmProps = {
    showActions: true,
    onAlarmClick: handleAlarmClick,
    hasNotification: hasNewNotification,
  };

  switch (config.component) {
    case "LogoHeader":
      return config.withAlarm ? (
        <LogoHeader {...commonAlarmProps} />
      ) : (
        <LogoHeader />
      );

    case "BackHeader":
      const backHeaderProps = {
        onBackClick: () => router.back(),
        ...(config.withAlarm && commonAlarmProps),
      };
      return <BackHeader {...backHeaderProps} />;

    default:
      return null;
  }
};

export default HeaderController;

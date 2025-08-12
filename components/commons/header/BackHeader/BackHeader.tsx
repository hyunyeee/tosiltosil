"use client";

import Link from "next/link";
import BackButton from "../../button/BackButton";

interface BackHeaderProps {
  onBackClick: () => void;
  onAlarmClick?: () => void;
  showActions?: boolean;
  hasNotification?: boolean;
}

const BackHeader = ({
  onBackClick,
  onAlarmClick,
  hasNotification = false,
  showActions = false,
}: BackHeaderProps) => {
  const alarmIconSrc = hasNotification
    ? "/icons/alarm-active-icon.svg"
    : "/icons/alarm-default-icon.svg";

  return (
    <div className="flex w-full items-center justify-between py-[13px] pr-[23px] pl-5">
      <BackButton onBackClick={onBackClick} />
      {showActions && (
        <div className="flex gap-2">
          <button onClick={onAlarmClick}>
            <img src={alarmIconSrc} alt="알림창" />
          </button>
          <Link href="/mypage">
            <img src="/icons/set-icon.svg" alt="설정 및 마이페이지" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BackHeader;

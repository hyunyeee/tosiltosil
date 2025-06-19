"use-client";

import BackButton from "../button/BackButton";

interface BackHeaderProps {
  onBackClick: () => void;
  onAlarmClick: () => void;
  onSettingClick: () => void;
  hasNotification: boolean;
}

const BackHeader = ({
  onBackClick,
  onAlarmClick,
  onSettingClick,
  hasNotification,
}: BackHeaderProps) => {
  const alarmIconSrc = hasNotification
    ? "/icons/alarm-active-icon.svg"
    : "/icons/alarm-default-icon.svg";

  return (
    <div className="flex w-full items-center justify-between">
      <BackButton onBackClick={onBackClick} />
      <div className="flex gap-[5px]">
        <button onClick={onAlarmClick}>
          <img src={alarmIconSrc} alt="알림창" />
        </button>
        <button onClick={onSettingClick}>
          <img src="/icons/set-icon.svg" alt="설정 및 마이페이지" />
        </button>
      </div>
    </div>
  );
};

export default BackHeader;

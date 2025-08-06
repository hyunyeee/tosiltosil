import Link from "next/link";

interface LogoHeaderProps {
  onAlarmClick?: () => void;
  showActions?: boolean;
  hasNotification?: boolean;
}

const LogoHeader = ({
  onAlarmClick,
  hasNotification = false,
  showActions = false,
}: LogoHeaderProps) => {
  const alarmIconSrc = hasNotification
    ? "/icons/alarm-active-icon.svg"
    : "/icons/alarm-default-icon.svg";
  return (
    <>
      <div className="flex w-full items-center justify-between py-[12px]">
        토실토실
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
    </>
  );
};

export default LogoHeader;

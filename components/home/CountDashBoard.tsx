import { formatISODurationToHHMM } from "@/utils/time";

interface CountDashBoardProps {
  profileImg: string;
  totalTime: string;
  friendCount: number;
  goalCount: number;
}

const CountDashBoard = ({
  profileImg,
  totalTime,
  friendCount,
  goalCount,
}: CountDashBoardProps) => {
  return (
    <div className="mx-[20px] mb-[14px] flex justify-center gap-[64px] rounded-[6px] border-[1px] border-black/20 pt-[24px] pb-[28px]">
      <div
        className={`relative h-[70px] w-[70px] overflow-hidden rounded-full bg-black/60`}
      >
        <div className="absolute inset-0 bg-black/40" />
        <img
          src={profileImg || "/images/default-profile-image.svg"}
          className="h-full w-full object-cover"
          alt="프로필 이미지"
        />
        <p className="body2 absolute inset-0 flex items-center justify-center text-white">
          {formatISODurationToHHMM(totalTime)}
        </p>
      </div>
      <div className="flex gap-[25px]">
        <div className="flex flex-col items-center px-[4px]">
          <p className="subhead2">친구</p>
          <div className="mt-[14px] mb-[17px] h-[1px] w-[44px] bg-black/20" />
          <p className="body1">{`${friendCount}`.padStart(2, "0")}</p>
        </div>
        <div className="flex flex-col items-center px-[4px]">
          <p className="subhead2">기록</p>
          <div className="mt-[14px] mb-[17px] h-[1px] w-[44px] bg-black/20" />
          <p className="body1">{`${goalCount}`.padStart(2, "0")}</p>
        </div>
      </div>
    </div>
  );
};

export default CountDashBoard;

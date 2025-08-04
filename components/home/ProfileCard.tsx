import { formatISODurationToHHMM } from "@/utils/time";

interface ProfileCardProps {
  memberId: string;
  nickname: string;
  profileImg: string;
  totalTime: string;
  status: "ACTIVE" | "INACTIVE";
  isMe: boolean;
}
const ProfileCard = ({
  memberId,
  nickname,
  profileImg,
  totalTime,
  status, // TODO: ACTIVE 인 사용자는 테두리 색상 변경 예정
  isMe,
}: ProfileCardProps) => {
  return (
    <div
      className={`${isMe ? "gap-[6px]" : "gap-[7px]"} flex flex-shrink-0 flex-col items-center`}
    >
      <div
        className={`${status === "ACTIVE" && "border-primary-skyblue border-[2px]"} relative h-[70px] w-[70px] overflow-hidden rounded-full bg-black/60`}
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

      <p className={`${isMe ? "caption1" : "caption2"} text-primary-mainText`}>
        {nickname}
      </p>
    </div>
  );
};
export default ProfileCard;

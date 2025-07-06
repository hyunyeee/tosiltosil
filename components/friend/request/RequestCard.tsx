import FriendCard from "@/components/friend/FriendCard";
import { FriendRequest } from "@/types/friend";

const RequestCard = ({ nickname, profileImg, code }: FriendRequest) => {
  const handleAccept = () => {
    // TODO: 친구 요청 수락 API 연결
    console.log("수락:", code);
  };

  const handleReject = () => {
    // TODO: 친구 요청 거절 API 연결
    console.log("거절:", code);
  };

  return (
    <FriendCard nickname={nickname} profileImg={profileImg} code={code}>
      <div className="flex w-full items-center justify-end gap-[7px]">
        <button
          className="footnote bg-primary-gray rounded-[2px] px-[18px] py-[3px] whitespace-nowrap text-white"
          onClick={handleReject}
        >
          거절
        </button>
        <button
          className="footnote bg-primary-mainText rounded-[2px] px-[18px] py-[3px] whitespace-nowrap text-white"
          onClick={handleAccept}
        >
          수락
        </button>
      </div>
    </FriendCard>
  );
};

export default RequestCard;

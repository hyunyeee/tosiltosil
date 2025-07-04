import FriendCard from "@/components/friend/FriendCard";
import { FriendRequest } from "@/types/friend";

const RequestCard = ({ nickname, profileImg, code }: FriendRequest) => {
  return (
    <FriendCard nickname={nickname} profileImg={profileImg} code={code}>
      <div className="flex w-full items-center justify-end gap-[7px]">
        <button className="footnote bg-primary-gray rounded-[2px] px-[18px] py-[3px] whitespace-nowrap text-white">
          거절
        </button>
        <button className="footnote bg-primary-mainText rounded-[2px] px-[18px] py-[3px] whitespace-nowrap text-white">
          수락
        </button>
      </div>
    </FriendCard>
  );
};

export default RequestCard;

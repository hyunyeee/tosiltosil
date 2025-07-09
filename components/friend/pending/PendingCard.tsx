import FriendCard from "@/components/friend/FriendCard";
import { FriendRequest } from "@/types/friend";

const PendingCard = ({ nickname, profileImg, code }: FriendRequest) => {
  return (
    <FriendCard nickname={nickname} profileImg={profileImg} code={code}>
      <div className="flex w-full items-center justify-end">
        <p className="text-primary-darkGray">대기중</p>
        <button className="footnote bg-primary-mainText ml-[18px] rounded-[2px] px-[18px] py-[3px] text-white">
          취소
        </button>
      </div>
    </FriendCard>
  );
};

export default PendingCard;

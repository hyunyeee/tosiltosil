import FriendCard from "@/components/friend/FriendCard";
import { FriendResult } from "@/types/friend";

const FriendResultCard = ({ nickname, profileImg, code }: FriendResult) => {
  return (
    <FriendCard nickname={nickname} profileImg={profileImg} code={code}>
      <button className="w-full flex-1">
        <img className="mr-[34px] ml-auto" src="/icons/more-icon.svg" />
      </button>
    </FriendCard>
  );
};

export default FriendResultCard;

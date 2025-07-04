import FriendListFrame from "@/components/friend/FriendListFrame";
import PendingCard from "@/components/friend/pending/PendingCard";
import { FriendRequest } from "@/types/friend";

interface FriendRequestListProps {
  friendRequestList: FriendRequest[];
}

const PendingList = ({ friendRequestList }: FriendRequestListProps) => {
  return (
    <FriendListFrame isEmpty={friendRequestList.length === 0}>
      <div className="flex flex-col gap-[13px] p-[20px]">
        {friendRequestList.map(({ nickname, profileImg, code }) => (
          <PendingCard
            key={code}
            nickname={nickname}
            profileImg={profileImg}
            code={code}
          />
        ))}
      </div>
    </FriendListFrame>
  );
};
export default PendingList;

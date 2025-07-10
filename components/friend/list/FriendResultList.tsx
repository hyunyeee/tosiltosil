import FriendListFrame from "@/components/friend/FriendListFrame";
import FriendResultCard from "@/components/friend/list/FriendResultCard";
import { FriendResult } from "@/types/friend";

interface FriendResultListProps {
  friendResultList: FriendResult[];
}

const FriendList = ({ friendResultList }: FriendResultListProps) => {
  return (
    <FriendListFrame
      isEmpty={friendResultList.length === 0}
      content="검색 결과가 없습니다."
    >
      <div className="flex flex-col gap-[13px] p-[20px]">
        {friendResultList.map(({ nickname, profileImg, code }) => (
          <FriendResultCard
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
export default FriendList;

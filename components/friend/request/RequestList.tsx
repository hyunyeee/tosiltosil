import FriendListFrame from "@/components/friend/FriendListFrame";
import RequestCard from "@/components/friend/request/RequestCard";
import { FriendRequest } from "@/types/friend";

interface FriendRequestListProps {
  friendRequestList: FriendRequest[];
}

const RequestList = ({ friendRequestList }: FriendRequestListProps) => {
  return (
    <FriendListFrame
      isEmpty={friendRequestList.length === 0}
      content="검색 결과가 없습니다."
    >
      <div className="flex flex-col gap-[13px] p-[20px]">
        {friendRequestList.map(({ nickname, profileImg, code }) => (
          <RequestCard
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
export default RequestList;

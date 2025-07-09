import FriendListFrame from "@/components/friend/FriendListFrame";
import RequestCard from "@/components/friend/request/RequestCard";
import { FriendRequest } from "@/types/friend";

interface FriendRequestListProps {
  friendRequestList: FriendRequest[];
}

const RequestList = ({ friendRequestList }: FriendRequestListProps) => {
  const handleAccept = (code: string) => {
    // TODO: 친구 요청 수락 API 연결
    console.log("수락:", code);
  };

  const handleReject = (code: string) => {
    // TODO: 친구 요청 거절 API 연결
    console.log("거절:", code);
  };

  return (
    <FriendListFrame
      isEmpty={friendRequestList.length === 0}
      content="검색 결과가 없습니다."
    >
      <div className="flex flex-col gap-[13px] p-[20px]">
        {friendRequestList.map((friend) => (
          <RequestCard
            key={friend.code}
            {...friend}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))}
      </div>
    </FriendListFrame>
  );
};
export default RequestList;

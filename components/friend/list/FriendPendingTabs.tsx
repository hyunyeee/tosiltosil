import Link from "next/link";

interface FriendPendingTabs {
  requestCount: number;
  pendingCount: number;
}

const FriendPendingTabs = ({
  requestCount,
  pendingCount,
}: FriendPendingTabs) => {
  return (
    <div className="mt-[22px] flex justify-end gap-[11px]">
      <Link href="/friend/pending" className="flex items-center gap-[4px]">
        <b className="footout">친구 요청</b>
        <b className="caption2">{requestCount}</b>
        <img src="/icons/move-arrow-icon.svg" alt="페이지 이동 아이콘" />
      </Link>
      <Link href="/friend/requests" className="flex items-center gap-[4px]">
        <b className="footout">수락 대기중</b>
        <b className="caption2">{pendingCount}</b>
        <img src="/icons/move-arrow-icon.svg" alt="페이지 이동 아이콘" />
      </Link>
    </div>
  );
};

export default FriendPendingTabs;

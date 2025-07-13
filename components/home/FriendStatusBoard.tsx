import ProfileCard from "@/components/home/ProfileCard";
import { friendStatusList } from "@/constants/mocks/FriendStatusList";

const FriendStatusBoard = () => {
  const activeFriendCount = friendStatusList.length;

  return (
    <div className="flex flex-col">
      <h3 className="title3 ml-[19px]">활동 목록</h3>
      <p className="footnote mr-[16px] ml-auto">
        현재 활동중인 친구 <b className="footout">{activeFriendCount}</b>명
      </p>
      <div className="ml-[20px] flex gap-[8px] overflow-auto pt-[13px] pr-[13px] pb-[24px] [&::-webkit-scrollbar]:hidden">
        {friendStatusList.map((friend, index) => (
          <ProfileCard key={friend.memberId} {...friend} isMe={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default FriendStatusBoard;

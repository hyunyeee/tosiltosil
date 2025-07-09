import FriendCard from "@/components/friend/FriendCard";

interface RequestCardProps {
  nickname: string;
  profileImg: string;
  code: string;
  onAccept: (code: string) => void;
  onReject: (code: string) => void;
}

const RequestCard = ({
  nickname,
  profileImg,
  code,
  onAccept,
  onReject,
}: RequestCardProps) => {
  const handleAccept = () => {
    onAccept(code);
  };

  const handleReject = () => {
    onReject(code);
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

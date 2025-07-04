interface FriendCardProps {
  nickname: string;
  profileImg: string;
  code: string;
  children: React.ReactNode;
}

const FriendCard = ({
  nickname,
  profileImg,
  code,
  children,
}: FriendCardProps) => {
  const profileImageSrc =
    profileImg === "" ? "/images/friend-default.svg" : `${profileImg}`;

  return (
    <div className="subhead2 bg-gray-background flex items-center rounded-[6px] border-1 border-black/20 px-[10px] py-[8px]">
      <img
        src={profileImageSrc}
        alt={`${nickname}의 프로필 이미지`}
        className="h-[32px] w-[32px] rounded-[4px]"
      />
      <div className="flex flex-1 items-center">
        <div className="flex items-center gap-[50px]">
          <p className="text-primary-mainText ml-[10px] whitespace-nowrap">
            {nickname}
          </p>
          <p className="text-primary-gray">#{code}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FriendCard;

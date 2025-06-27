import { SearchResult } from "@/types/search";

const SearchResultCard = ({
  nickname,
  profileImg,
  code,
  relationship,
}: SearchResult) => {
  const profileImageSrc =
    profileImg === "" ? "/images/friend-default.svg" : `${profileImg}`;

  const textColorClass =
    relationship === "FRIEND"
      ? "text-primary-deepGray"
      : "text-primary-darkGray";

  const statusText =
    relationship === "FRIEND"
      ? "친구"
      : relationship === "PENDING"
        ? "대기중"
        : "";

  return (
    <div className="subhead2 bg-gray-background flex items-center rounded-[6px] border-1 border-black/20 px-[10px] py-[8px]">
      <img
        src={profileImageSrc}
        alt={`${nickname}의 프로필 이미지`}
        className="h-[32px] w-[32px] rounded-[4px]"
      />
      <div className="flex flex-1 gap-[24px]">
        <p className="text-primary-mainText ml-[10px] whitespace-nowrap">
          {nickname}
        </p>
        <p className="text-primary-gray">#{code}</p>
        <p className={`${textColorClass} w-full flex-1 text-center`}>
          {statusText}
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard;

import FriendCard from "@/components/friend/FriendCard";
import { SearchResult } from "@/types/friend";

const SearchResultCard = ({
  nickname,
  profileImg,
  code,
  relationship,
}: SearchResult) => {
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
    <FriendCard nickname={nickname} profileImg={profileImg} code={code}>
      <p className={`${textColorClass} w-full flex-1 text-center`}>
        {statusText}
      </p>
    </FriendCard>
  );
};

export default SearchResultCard;

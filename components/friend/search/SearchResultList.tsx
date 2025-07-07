import FriendListFrame from "@/components/friend/FriendListFrame";
import SearchResultCard from "@/components/friend/search/SearchResultCard";
import { SearchResult } from "@/types/friend";

interface SearchResultListProps {
  searchResultList: SearchResult[];
}

const SearchResultList = ({ searchResultList }: SearchResultListProps) => {
  return (
    <FriendListFrame
      isEmpty={searchResultList.length === 0}
      content="검색 결과가 없습니다."
    >
      <div className="flex flex-col gap-[13px] p-[20px]">
        {searchResultList.map(
          ({ nickname, profileImg, code, relationship }) => (
            <SearchResultCard
              key={code}
              nickname={nickname}
              profileImg={profileImg}
              code={code}
              relationship={relationship}
            />
          )
        )}
      </div>
    </FriendListFrame>
  );
};
export default SearchResultList;

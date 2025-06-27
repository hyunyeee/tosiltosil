import SearchResultCard from "@/components/search/SearchResultCard";
import { SearchResult } from "@/types/search";

interface SearchResultListProps {
  searchResultList: SearchResult[];
}

const SearchResultList = ({ searchResultList }: SearchResultListProps) => {
  return (
    <div className="bg-gray-card h-full min-h-[calc(100vh-146px)]">
      {searchResultList.length === 0 ? (
        <div className="">
          <div className="flex h-full flex-col items-center justify-center gap-[12px]">
            <img className="mt-[214px]" src="/images/result-empty.svg" />
            <p className="subhead2 text-primary-darkGray">
              검색결과가 없습니다.
            </p>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};
export default SearchResultList;

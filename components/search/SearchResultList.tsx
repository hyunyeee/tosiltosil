import SearchResultCard from "@/components/search/SearchResultCard";
import { SearchResult } from "@/types/search";

interface SearchResultListProps {
  searchResultList: SearchResult[];
}

const SearchResultList = ({ searchResultList }: SearchResultListProps) => {
  return (
    <div className="bg-gray-card flex flex-col gap-[13px] p-[20px]">
      {searchResultList.map(({ name, friendCode, status }) => (
        <SearchResultCard
          key={friendCode}
          name={name}
          friendCode={friendCode}
          status={status}
        />
      ))}
    </div>
  );
};
export default SearchResultList;

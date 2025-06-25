import { SearchResult } from "@/types/search";

const SearchResultCard = ({ name, friendCode, status }: SearchResult) => {
  return (
    <div className="subhead2 bg-gray-background flex items-center rounded-[6px] border-1 border-black/20 px-[10px] py-[8px]">
      <img src="/images/friend-default.svg" />
      <div className="flex flex-1 gap-[24px]">
        <p className="text-primary-mainText ml-[10px] whitespace-nowrap">
          {name}
        </p>
        <p className="text-primary-gray">#{friendCode}</p>
        <p
          className={`${status === "친구" ? "text-primary-deepGray" : "text-primary-darkGray"} w-full flex-1 text-center`}
        >
          {status || ""}
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard;

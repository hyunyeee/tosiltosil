"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import SearchInput from "@/components/friend/search/SearchInput";
import BasicTitle from "@/components/friend/BasicTitle";
import PendingList from "@/components/friend/pending/PendingList";
import { friendResultList } from "@/mocks/searchResults";

export default function FriendPendingPage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const handleChangeQuery = (value: string) => {
    setQuery(value);
  };

  useEffect(() => {
    if (debouncedQuery.trim()) {
      console.log("검색어:", debouncedQuery);
      // TODO: 실제 API 요청
    }
  }, [debouncedQuery]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-[28px] shrink-0 px-[20px]">
        <SearchInput value={query} onInputChange={handleChangeQuery} />
        <BasicTitle
          iconSrc="/icons/friend-request-icon.svg"
          text={`친구요청 ${friendResultList.length}`}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <PendingList friendRequestList={friendResultList} />
      </div>
    </div>
  );
}

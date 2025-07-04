"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import SearchInput from "@/components/friend/search/SearchInput";
import BasicTitle from "@/components/friend/BasicTitle";
import RequestList from "@/components/friend/request/RequestList";
import { friendResultList } from "@/app/mocks/searchResults";

export default function FriendRequestPage() {
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
    <div className="mt-[28px]">
      <div className="px-[20px]">
        <SearchInput value={query} onInputChange={handleChangeQuery} />
        <BasicTitle
          iconSrc="/icons/friend-request-icon.svg"
          text={`수락대기중 ${friendResultList.length}`}
        />
      </div>
      <RequestList friendRequestList={friendResultList} />
    </div>
  );
}

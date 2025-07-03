"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import SearchInput from "@/components/friend/search/SearchInput";
import SearchTitle from "@/components/friend/search/SearchTitle";
import SearchResultList from "@/components/friend/search/SearchResultList";
import { searchResultList } from "@/app/mocks/searchResults";

export default function SearchPage() {
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
        <SearchTitle />
      </div>
      <SearchResultList searchResultList={searchResultList} />
    </div>
  );
}

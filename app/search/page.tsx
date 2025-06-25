"use client";

import { useEffect, useState } from "react";
import SearchInput from "@/components/search/SearchInput";
import SearchTitle from "@/components/search/SearchTitle";
import SearchResultList from "@/components/search/SearchResultList";
import { SearchResult } from "@/types/search";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const searchResultList: SearchResult[] = [
    { name: "김하늘", friendCode: 100001, status: "친구" },
    { name: "박지민", friendCode: 100002, status: "대기중" },
    { name: "이수연", friendCode: 100003 },
    { name: "최준호", friendCode: 100004, status: "친구" },
    { name: "정예린", friendCode: 100005, status: "대기중" },
    { name: "한세린", friendCode: 100006 },
    { name: "윤재현", friendCode: 100007, status: "친구" },
    { name: "서지훈", friendCode: 100008, status: "대기중" },
    { name: "배은호", friendCode: 100009, status: "친구" },
    { name: "오지민", friendCode: 100010 },
    { name: "노지우", friendCode: 100011, status: "친구" },
    { name: "조은별", friendCode: 100012 },
    { name: "남지훈", friendCode: 100013, status: "대기중" },
    { name: "황서윤", friendCode: 100014, status: "친구" },
    { name: "강민석", friendCode: 100015 },
  ];

  const handleChangeQuery = (value: string) => {
    setQuery(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

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

"use client";

import { useParams } from "next/navigation";

export default function HistoryPage() {
  const params = useParams();

  const fullDate = params.fullDate as string | undefined;
  const date = fullDate?.split("-");

  const percentage = 30;

  return (
    <div className="w-full">
      <div className="ml-[20px]">
        <h1 className="title3 mt-[43px] mb-[11px]">기록</h1>
        <h3 className="body1">
          {date?.[0]}년 {date?.[1]?.padStart(2, "0")}월{" "}
          {date?.[2]?.padStart(2, "0")}일
        </h3>
      </div>

      <p className="body2 text-primary-deepGray mt-[19px] mr-[17px] mb-[19px] text-right">
        목표량
        <b className="body1 text-primary-mainText"> {percentage}%</b>
      </p>
    </div>
  );
}

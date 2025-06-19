"use client";

import BackButton from "@/components/commons/button/BackButton";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import ConsentItem from "@/components/commons/consent/ConsentItem";
import { AGREEMENTS } from "@/constants/terms";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TermsForm = () => {
  const router = useRouter();
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(
    AGREEMENTS.reduce((acc, { id }) => ({ ...acc, [id]: false }), {})
  );
  const isAllCheck = Object.values(checkedMap).every(Boolean);

  const handleCheckClick = (id: string) => {
    setCheckedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleDetailInfoClick = (id: string) => {
    router.push(`/terms/${id}`);
  };

  const handleAllConsentClick = () => {
    setCheckedMap(() =>
      AGREEMENTS.reduce((acc, { id }) => ({ ...acc, [id]: !isAllCheck }), {})
    );
  };

  const handleNextClick = () => {};
  return (
    <div className="flex flex-col items-center pb-[58px]">
      <header className="mb-[76px] flex w-full items-center justify-start px-[20px] py-[16px]">
        <BackButton onBackClick={handleBackClick} />
      </header>
      <section className="flex w-full flex-col items-baseline px-[20px]">
        <h1 className="title2 text-primary-mainText mb-[12px]">
          약관 동의가 필요합니다.
        </h1>
        <span className="text-primary-mainText subhead2 mb-[74px]">
          간단한 동의 후 회원가입을 할 수 있습니다.
        </span>
      </section>
      <main className="flex w-full flex-col items-center px-[20px]">
        <div className="mb-[18px] flex w-full items-center justify-between border-none p-[3px]">
          <button
            className="flex items-center gap-2"
            onClick={handleAllConsentClick}
          >
            {isAllCheck ? (
              <img
                src="icons/check-icon.svg"
                className="mr-[9px] h-[18px] w-[18px]"
                alt="선택됨"
              />
            ) : (
              <div
                className={`border-primary-darkGray mr-[9px] flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-[2px] border`}
              />
            )}
            <div className="flex items-center">
              <span className={"body1 text-primary-mainText"}>전체동의</span>
            </div>
          </button>
        </div>
        <div className="bg-primary-gray mb-[24px] h-[1px] w-full" />
        <div className="mb-[74px] flex w-full flex-col gap-[20px]">
          {AGREEMENTS.map((items) => (
            <ConsentItem
              key={items.id}
              id={items.id}
              label={items.label}
              checked={checkedMap[items.id]}
              required={items.required}
              onCheckClick={handleCheckClick}
              onDetailInfoClick={handleDetailInfoClick}
            />
          ))}
        </div>
        <PrimaryButton
          type="button"
          size="main"
          text="다음으로"
          isActive={isAllCheck}
          onButtonClick={handleNextClick}
        />
      </main>
    </div>
  );
};

export default TermsForm;

"use client";

import PrimaryButton from "@/components/commons/button/PrimaryButton";
import ConsentItem from "@/components/commons/consent/ConsentItem";
import { TermAgreement } from "@/types/api/auth";

interface TermsFormProps {
  termsData: TermAgreement[];
  setTermsData: React.Dispatch<React.SetStateAction<TermAgreement[]>>;
  onTermsNext: () => void;
  onDetailInfoClick: (id: string) => void;
}

const TermsForm = ({
  onTermsNext,
  onDetailInfoClick,
  setTermsData,
  termsData,
}: TermsFormProps) => {
  const isAllChecked = termsData
    .filter((t) => t.required)
    .every((t) => t.agreed);

  const handleCheckClick = (id: string) => {
    setTermsData((prev) =>
      prev.map((item) =>
        item.title === id ? { ...item, agreed: !item.agreed } : item
      )
    );
  };

  const handleAllConsentClick = () => {
    setTermsData((prev) =>
      prev.map((item) => ({ ...item, agreed: !isAllChecked }))
    );
  };

  return (
    <div className="flex flex-col items-center pb-[58px]">
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
            {isAllChecked ? (
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
          {termsData.map(({ title, label, agreed, required }) => (
            <ConsentItem
              key={title}
              id={title}
              label={label}
              checked={agreed}
              required={required}
              onCheckClick={handleCheckClick}
              onDetailInfoClick={onDetailInfoClick}
            />
          ))}
        </div>
        <PrimaryButton
          type="button"
          size="main"
          text="다음으로"
          isActive={isAllChecked}
          onButtonClick={onTermsNext}
        />
      </main>
    </div>
  );
};

export default TermsForm;

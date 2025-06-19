"use client";

type ConsentItemProps = {
  id: string;
  label: string;
  required: boolean;
  checked: boolean;
  onCheckClick: (id: string) => void;
  onDetailInfoClick: (id: string) => void;
};

export default function ConsentItem({
  id,
  label,
  required,
  checked,
  onCheckClick,
  onDetailInfoClick,
}: ConsentItemProps) {
  return (
    <div className="flex w-full max-w-[350px] items-center justify-between border-none p-[3px]">
      <button
        className="flex items-center gap-2"
        onClick={() => onCheckClick(id)}
      >
        {checked ? (
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
          <span
            className={`${required ? "footout" : "footnote"} text-primary-mainText mr-[2px]`}
          >
            {label}
          </span>
          <span className="text-primary-mainText footnote">
            ({required ? "필수" : "선택"})
          </span>
        </div>
      </button>
      <button
        onClick={() => onDetailInfoClick(id)}
        className="text-primary-deepGray mr-[10px] text-xl"
      >
        <img src="/icons/next-icon.svg" />
      </button>
    </div>
  );
}

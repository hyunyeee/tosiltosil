"use client";

type ConsentItemProps = {
  id: string;
  label: string;
  required: boolean;
  checked: boolean;
  onCheckClick: (id: string, checked: boolean) => void;
  onDetailInfoClick: () => void;
};

export default function ConsentItem({
  id,
  label,
  required,
  checked,
  onCheckClick,
  onDetailInfoClick,
}: ConsentItemProps) {
  //   다음과 같이 상위에서 사용할 생각
  //   const onCheckClick = (id: string, checked: boolean) => {
  //     set함수((prev) =>
  //       prev.map((item) => (item.id === id ? { ...item, checked } : item))
  //     );
  //   };

  return (
    <div className="flex w-full max-w-[350px] items-center justify-between border-none p-[3px]">
      <button
        className="flex items-center gap-2"
        onClick={() => onCheckClick(id, !checked)}
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
        onClick={onDetailInfoClick}
        className="text-primary-deepGray mr-[10px] text-xl"
      >
        {">"}
      </button>
    </div>
  );
}

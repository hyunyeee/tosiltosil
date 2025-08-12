"use client";

export interface BackButtonProps {
  onBackClick: () => void;
}

const BackButton = ({ onBackClick }: BackButtonProps) => {
  return (
    <button
      type="button"
      onClick={onBackClick}
      className="flex w-fit gap-[6px]"
    >
      <img src="/icons/prev-icon.svg" alt="뒤로가기" />
      <span className="footout text-[#33383c]">뒤로가기</span>
    </button>
  );
};

export default BackButton;

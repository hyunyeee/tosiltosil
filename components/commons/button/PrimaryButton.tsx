"use client";

export interface PrimaryButtonProps {
  type?: "button" | "submit";
  size: "sub" | "main";
  text: string;
  isActive?: boolean;
  onButtonClick?: () => void;
}

const PrimaryButton = ({
  type,
  size,
  text,
  isActive,
  onButtonClick,
}: PrimaryButtonProps) => {
  const sizeVariants = {
    main: "h-[48px] body1",
    sub: "h-[38px] w-[158px] subhead1",
  };
  const activeClasses = isActive
    ? "bg-primary-mainText text-white"
    : "bg-primary-gray text-white/70";

  return (
    <button
      className={`${sizeVariants[size]} flex w-full items-center justify-center rounded-md ${activeClasses}`}
      type={type}
      disabled={!isActive}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

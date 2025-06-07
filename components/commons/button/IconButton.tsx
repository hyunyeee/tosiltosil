export interface IconButtonProps {
  type?: "button" | "submit";
  sort: "email" | "naver" | "kakao";
  text: string;
  onButtonClick: () => void;
}

const IconButton = ({ type, sort, text, onButtonClick }: IconButtonProps) => {
  const IconVariants = {
    email: "bg-primary-deepGray text-white",
    kakao: "bg-[#FACF44] text-primary-mainText",
    naver: "bg-[#06BE34] text-white ",
  };

  return (
    <button
      className={` ${IconVariants[sort]} flex h-[48px] w-full max-w-[350px] items-center gap-[4px] rounded-md px-[16px] py-[13px]`}
      type={type}
      onClick={onButtonClick}
    >
      {sort === "email" && <img src="icons/email-icon.svg" alt="email" />}
      {sort === "kakao" && <img src="icons/kakao-icon.svg" alt="kakao" />}
      {sort === "naver" && <img src="icons/naver-icon.svg" alt="naver" />}
      <div className="body1 w-full text-center">{text}</div>
    </button>
  );
};

export default IconButton;

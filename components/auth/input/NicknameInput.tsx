import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

interface NicknameInputProps {
  errorMessage?: string;
  value: string;
  onInputChange: (value: string) => void;
}

const NicknameInput = ({
  errorMessage,
  value,
  onInputChange,
}: NicknameInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  const helperText =
    errorMessage ||
    (value === "" ? AUTH_ERROR_MESSAGE.NICKNAME : "사용 가능한 닉네임입니다.");

  return (
    <div className="mb-[54px] flex flex-col items-center justify-center">
      <input
        autoFocus
        className="text-center focus:ring-0 focus:outline-none"
        value={value}
        onChange={handleInputChange}
      />
      <div className="border-primary-darkGray mb-[6px] w-[172px] border-b-1" />
      <p
        className={`caption2 ${errorMessage || value == "" ? "text-primary-gray" : "primary-mainText"}`}
      >
        {helperText}
      </p>
    </div>
  );
};

export default NicknameInput;

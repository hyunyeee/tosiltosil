import InputWrapper from "@/components/auth/input/InputWrapper";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

interface EmailInputProps {
  isValid: boolean;
  isVerified?: boolean;
  errorMessage?: string;
  value: string;
  onInputChange: (value: string) => void;
  sort: "login" | "signup" | "find-password";
}

const EmailInput = ({
  isValid,
  isVerified,
  errorMessage,
  value,
  onInputChange,
  sort,
}: EmailInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  const handleClearClick = () => {
    onInputChange("");
  };

  return (
    <InputWrapper
      error={isValid}
      helperText={
        errorMessage || (value === "" ? AUTH_ERROR_MESSAGE.EMAIL : "")
      }
      isVerified={isVerified}
      sort={sort}
    >
      <input
        className="subhead1 h-[24px] w-full"
        placeholder="Email"
        type="email"
        value={value}
        onChange={handleInputChange}
      />
      {value && (
        <button
          type="button"
          className="flex-shrink-0 cursor-pointer"
          onClick={handleClearClick}
        >
          <img
            src={
              isVerified ? `/icons/check-icon.svg` : `/icons/delete-icon.svg`
            }
            alt={isVerified ? "인증 완료 아이콘" : "입력값 초기화 아이콘"}
          />
        </button>
      )}
    </InputWrapper>
  );
};

export default EmailInput;

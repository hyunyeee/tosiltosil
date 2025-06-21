import InputWrapper from "@/components/auth/input/InputWrapper";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

interface EmailInputProps {
  name: "email";
  errorMessage?: string;
  value: string;
  onInputChange: (name: EmailInputProps["name"], value: string) => void;
}

const EmailInput = ({
  name,
  errorMessage,
  value,
  onInputChange,
}: EmailInputProps) => {
  const isVerified = false;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(name, e.target.value);
  };

  const handleClearClick = () => {
    onInputChange(name, "");
  };

  return (
    <InputWrapper
      error={value !== "" && !!errorMessage}
      helperText={
        errorMessage || (value === "" ? AUTH_ERROR_MESSAGE.EMAIL : "")
      }
      isVerified={isVerified}
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

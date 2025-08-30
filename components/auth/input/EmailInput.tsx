"use client";

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
  const locked = isVerified;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (locked) return;
    onInputChange(e.target.value);
  };

  const handleClearClick = () => {
    if (locked) return;
    onInputChange("");
  };

  return (
    <InputWrapper
      error={!isValid}
      helperText={
        errorMessage || (value === "" ? AUTH_ERROR_MESSAGE.EMAIL : "")
      }
      isVerified={isVerified}
      sort={sort}
    >
      <input
        className={`subhead1 h-[24px] w-full ${
          locked && "pointer-events-none select-text"
        }`}
        placeholder="Email"
        type="email"
        value={value}
        onChange={handleInputChange}
        readOnly={locked}
        aria-readonly={locked}
      />

      {value && !locked && (
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

      {/* 잠긴 상태에서 클릭 불가한 정적 아이콘만 노출 */}
      {value && locked && isVerified && (
        <span className="flex-shrink-0">
          <img src="/icons/check-icon.svg" alt="인증 완료 아이콘" />
        </span>
      )}
    </InputWrapper>
  );
};

export default EmailInput;

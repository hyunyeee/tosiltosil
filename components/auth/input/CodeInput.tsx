"use client";

import InputWrapper from "@/components/auth/input/InputWrapper";
import { formatSecondsToMMSS } from "@/utils/time";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

interface CodeInputProps {
  value: string;
  isVerified: boolean;
  isValid: boolean;
  errorMessage?: string;
  onInputChange: (value: string) => void;
  sort: "login" | "signup" | "find-password";
  onResend: () => void;
  timeLeft: number;
}

const CodeInput = ({
  sort,
  errorMessage,
  value,
  isValid,
  isVerified,
  onInputChange,
  onResend,
  timeLeft,
}: CodeInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  const handleResendCode = () => {
    onResend();
  };

  return (
    <InputWrapper
      sort={sort}
      error={!isValid}
      helperText={errorMessage || (value === "" ? AUTH_ERROR_MESSAGE.CODE : "")}
      isVerified={isVerified}
    >
      <input
        className="subhead1 h-[24px] flex-1"
        placeholder="인증번호 입력"
        type="text"
        value={value}
        onChange={handleInputChange}
        maxLength={6}
      />
      <div className="flex items-center gap-[6px]">
        {isVerified ? (
          <img src="/icons/check-icon.svg" alt="인증번호 확인 완료 아이콘" />
        ) : (
          <>
            <p className="caption2">{formatSecondsToMMSS(timeLeft)}</p>
            <button
              type="button"
              className="bg-primary-deepGray caption2 flex-shrink-0 cursor-pointer rounded-[2px] px-[9px] py-[4px] text-white"
              onClick={handleResendCode}
            >
              재전송
            </button>
          </>
        )}
      </div>
    </InputWrapper>
  );
};

export default CodeInput;

"use client";

import InputWrapper from "@/components/auth/input/InputWrapper";
import { formatSecondsToMMSS } from "@/utils/time";
import { useCountdown } from "@/hooks/useCountdown";

interface CodeInputProps {
  name: string; //name: keyof typeof formData;
  errorMessage: string;
  value: string;
  onInputChange: (name: CodeInputProps["name"], value: string) => void;
}

const CodeInput = ({
  name,
  errorMessage,
  value,
  onInputChange,
}: CodeInputProps) => {
  const isVerified = false;
  const DURATION_IN_SECONDS = 300; // 5분

  const { timeLeft, setResendTrigger } = useCountdown(DURATION_IN_SECONDS);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(name, e.target.value);
  };

  const handleResendCode = () => {
    onInputChange(name, "");
    setResendTrigger((prev) => prev + 1);
  };

  return (
    <InputWrapper
      error={errorMessage !== ""}
      helperText={errorMessage || "* 인증번호 6글자를 입력해주세요"}
      isVerified={isVerified}
    >
      <input
        className="subhead1 h-[24px] flex-grow-1"
        placeholder="인증번호 입력"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <p className="caption2">{formatSecondsToMMSS(timeLeft)}</p>
      <button
        type="button"
        className="cursor-pointer"
        onClick={handleResendCode}
      >
        <img
          src={isVerified ? `/icons/check-icon.svg` : `/icons/re-send-icon.svg`}
          alt={isVerified ? "인증 완료 아이콘" : "인증번호 재전송 아이콘"}
        />
      </button>
    </InputWrapper>
  );
};

export default CodeInput;

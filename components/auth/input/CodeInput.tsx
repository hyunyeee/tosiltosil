"use client";

import { useEffect, useState } from "react";
import InputWrapper from "@/components/auth/input/InputWrapper";

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
  const [timeLeft, setTimeLeft] = useState(300); // 5분

  const formatTime = (seconds: number) => {
    const min = String(Math.floor(seconds / 60)).padStart(1, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(name, e.target.value);
  };

  const handleResendCode = () => {
    onInputChange(name, "");
    setTimeLeft(300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <InputWrapper
      error={errorMessage !== ""}
      helperText={errorMessage || "* 인증번호 6글자를 입력해주세요"}
    >
      <input
        className="subhead1 h-[24px] flex-grow-1"
        placeholder="인증번호 입력"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <p className="caption2">{formatTime(timeLeft)}</p>
      <button
        type="button"
        className="cursor-pointer"
        onClick={handleResendCode}
      >
        <img
          src="/icons/re-send-icon.svg"
          alt="이메일 인증번호 재전송 아이콘"
        />
      </button>
    </InputWrapper>
  );
};

export default CodeInput;

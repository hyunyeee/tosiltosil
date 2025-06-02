"use client";

import { useState } from "react";
import InputWrapper from "@/components/auth/input/InputWrapper";

interface PasswordInputProps {
  errorMessage: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput = ({
  errorMessage,
  value,
  onChange,
}: PasswordInputProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <InputWrapper
      error={errorMessage !== ""}
      helperText={
        errorMessage ||
        "* 영문, 숫자, 특수문자를 포함하여 8글자 이상으로 입력해주세요"
      }
    >
      <input
        className="subhead1 h-[24px] flex-grow-1"
        placeholder="비밀번호"
        type={isOpen ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`${isOpen ? "/icons/open-eye-icon.svg" : "/icons/close-eye-icon.svg"}`}
            alt="비밀번호 노출 선택 아이콘"
          />
        </button>
      )}
    </InputWrapper>
  );
};

export default PasswordInput;

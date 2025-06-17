"use client";

import { useState } from "react";
import InputWrapper from "@/components/auth/input/InputWrapper";

interface PasswordInputProps {
  name: string; //name: keyof typeof formData;
  errorMessage: string;
  value: string;
  onInputChange: (name: PasswordInputProps["name"], value: string) => void;
}

const PasswordInput = ({
  name,
  errorMessage,
  value,
  onInputChange,
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(name, e.target.value);
  };

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
        type={isPasswordVisible ? "text" : "password"}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
        >
          <img
            aria-label={
              isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보이기"
            }
            src={`${isPasswordVisible ? "/icons/open-eye-icon.svg" : "/icons/close-eye-icon.svg"}`}
          />
        </button>
      )}
    </InputWrapper>
  );
};

export default PasswordInput;

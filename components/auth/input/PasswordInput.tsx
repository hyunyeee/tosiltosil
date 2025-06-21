"use client";

import { useState } from "react";
import InputWrapper from "@/components/auth/input/InputWrapper";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

interface PasswordInputProps<NameType extends string> {
  name: NameType;
  errorMessage?: string;
  value: string;
  onInputChange: (name: NameType, value: string) => void;
}

const PasswordInput = <NameType extends string>({
  name,
  errorMessage,
  value,
  onInputChange,
}: PasswordInputProps<NameType>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(name, e.target.value);
  };

  const placeHolder = name === "password" ? "비밀번호" : "비밀번호 확인";
  const helperText = name === "password" ? AUTH_ERROR_MESSAGE.PASSWORD : "";

  return (
    <InputWrapper
      error={value !== "" && !!errorMessage}
      helperText={errorMessage || (value === "" ? helperText : "")}
    >
      <input
        className="subhead1 h-[24px] w-full"
        placeholder={placeHolder}
        type={isPasswordVisible ? "text" : "password"}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <button
          type="button"
          className="flex-shrink-0 cursor-pointer"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
        >
          <img
            aria-label={
              isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보이기"
            }
            src={
              isPasswordVisible
                ? "/icons/open-eye-icon.svg"
                : "/icons/close-eye-icon.svg"
            }
          />
        </button>
      )}
    </InputWrapper>
  );
};

export default PasswordInput;

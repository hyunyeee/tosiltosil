"use client";

import { useState } from "react";
import InputWrapper from "@/components/auth/input/InputWrapper";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

interface PasswordInputProps<NameType extends string> {
  name: NameType;
  isValid: boolean;
  errorMessage?: string;
  value: string;
  onInputChange: (value: string) => void;
  sort: "login" | "signup" | "find-password";
}

const PasswordInput = <NameType extends string>({
  name,
  errorMessage,
  isValid,
  value,
  onInputChange,
  sort,
}: PasswordInputProps<NameType>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  const placeHolder = name === "password" ? "비밀번호" : "비밀번호 확인";

  return (
    <InputWrapper
      error={isValid}
      helperText={
        errorMessage || (value === "" ? AUTH_ERROR_MESSAGE.PASSWORD : "")
      }
      sort={sort}
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

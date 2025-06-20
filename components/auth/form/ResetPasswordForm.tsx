"use client";

import { useState } from "react";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import PasswordInput from "@/components/auth/input/PasswordInput";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";
import Link from "next/link";

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    password: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      const isValidPassword =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value);
      setFormErrors((prev) => ({
        ...prev,
        password: isValidPassword ? "" : AUTH_ERROR_MESSAGE.PASSWORD,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("비밀번호 변경 Form:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[60px]">
        <h1 className="title2 mt-[163px] text-center">비밀번호 재설정</h1>
        <div className="mb-[43px] flex flex-col gap-[27px]">
          <PasswordInput
            name="password"
            value={formData.password}
            errorMessage={formErrors.password}
            onInputChange={handleInputChange}
          />
          <PasswordInput
            name="password"
            value={formData.password}
            errorMessage={formErrors.password}
            onInputChange={handleInputChange}
          />
        </div>
      </div>
      <Link href="/login">
        <PrimaryButton
          size="main"
          text="로그인 페이지로"
          isActive={true}
          onButtonClick={() => {}}
        />
      </Link>
    </form>
  );
};

export default ResetPasswordForm;

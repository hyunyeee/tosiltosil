"use client";

import { useState } from "react";
import Link from "next/link";
import EmailInput from "@/components/auth/input/EmailInput";
import PasswordInput from "@/components/auth/input/PasswordInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setFormErrors((prev) => ({
        ...prev,
        email: isValidEmail ? "" : AUTH_ERROR_MESSAGE.EMAIL,
      }));
      console.log(formErrors);
    }

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
    console.log("로그인 시도:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[43px] flex flex-col gap-[27px]">
        <h1 className="title2 mt-[128px] text-center">로그인</h1>
        <EmailInput
          name="email"
          value={formData.email}
          errorMessage={formErrors.email}
          onInputChange={handleInputChange}
        />
        <PasswordInput
          name="password"
          value={formData.password}
          errorMessage={formErrors.password}
          onInputChange={handleInputChange}
        />
      </div>
      <PrimaryButton
        type="submit"
        size="main"
        text="로그인"
        isActive={true}
        onButtonClick={() => {}}
      />
      <div className="mt-[27px] flex justify-between">
        <Link
          href="/find-password"
          className="subhead2 border-primary-deepGray text-primary-deepGray border-b-1 px-[6px] pb-[5px]"
        >
          <p className="inline">비밀번호찾기</p>
        </Link>
        <Link
          href="/signup"
          className="subhead2 border-primary-deepGray text-primary-deepGray border-b-1 px-[6px] pb-[5px]"
        >
          <p className="inline">회원가입</p>
        </Link>
      </div>
    </form>
  );
};
export default LoginForm;

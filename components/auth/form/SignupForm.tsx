"use client";

import { useState } from "react";
import EmailInput from "@/components/auth/input/EmailInput";
import PasswordInput from "@/components/auth/input/PasswordInput";
import CodeInput from "@/components/auth/input/CodeInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
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
    }

    if (name === "password") {
      const isValidPassword =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value);
      setFormErrors((prev) => ({
        ...prev,
        password: isValidPassword ? "" : AUTH_ERROR_MESSAGE.PASSWORD,
      }));
    }

    if (name === "confirmPassword") {
      const isValidPassword = formData.password === value;
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: isValidPassword
          ? ""
          : AUTH_ERROR_MESSAGE.CONFIRM_PASSWORD,
      }));
    }

    if (name === "code") {
      const isValidCode = /^\d{6}$/.test(value);
      setFormErrors((prev) => ({
        ...prev,
        code: isValidCode ? "" : AUTH_ERROR_MESSAGE.CODE,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("회원가입 Form:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title2 mt-[71px] mb-[46px] text-center">회원가입</h1>
      <div className="flex flex-col gap-[23px]">
        <div>
          <EmailInput
            name="email"
            value={formData.email}
            errorMessage={formErrors.email}
            onInputChange={handleInputChange}
          />
          <div className="flex justify-end">
            <PrimaryButton
              size="sub"
              text="인증번호받기"
              isActive={true}
              onButtonClick={() => {}}
            />
          </div>
        </div>
        <div>
          <CodeInput
            name="code"
            value={formData.code}
            isVerified
            errorMessage={formErrors.code}
            onInputChange={handleInputChange}
          />
          <div className="flex justify-end">
            <PrimaryButton
              size="sub"
              text="인증번호확인"
              isActive={true}
              onButtonClick={() => {}}
            />
          </div>
        </div>
        <PasswordInput
          name="password"
          value={formData.password}
          errorMessage={formErrors.password}
          onInputChange={handleInputChange}
        />
        <PasswordInput
          name="confirmPassword"
          value={formData.confirmPassword}
          errorMessage={formErrors.confirmPassword}
          onInputChange={handleInputChange}
        />

        <PrimaryButton
          type="submit"
          size="main"
          text="다음으로"
          isActive={true}
          onButtonClick={() => {}}
        />
      </div>
    </form>
  );
};

export default SignupForm;

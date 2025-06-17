"use client";

import { useState } from "react";
import EmailInput from "@/components/auth/input/EmailInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

const RequestCodeForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("인증번호 요청 Form: ", formData);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 유효성 검사
    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setFormErrors((prev) => ({
        ...prev,
        EMAIL: isValidEmail ? "" : AUTH_ERROR_MESSAGE.EMAIL,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[37px] flex flex-col gap-[78px]">
        <h1 className="title2 mt-[163px] text-center">비밀번호 찾기</h1>
        <EmailInput
          name="email"
          value={formData.email}
          errorMessage={formErrors.email}
          onInputChange={handleInputChange}
        />
      </div>
      <PrimaryButton
        size="main"
        text="인증번호 받기"
        isActive={false}
        onButtonClick={() => {}}
      />
    </form>
  );
};

export default RequestCodeForm;

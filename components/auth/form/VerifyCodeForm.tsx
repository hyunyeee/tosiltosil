"use client";

import { useState } from "react";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import CodeInput from "@/components/auth/input/CodeInput";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

const VerifyCodeForm = () => {
  const [formData, setFormData] = useState({
    code: "",
  });

  const [formErrors, setFormErrors] = useState({
    code: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "code") {
      const isValidCode = /^\d{6}$/.test(value);
      setFormErrors((prev) => ({
        ...prev,
        CODE: isValidCode ? "" : AUTH_ERROR_MESSAGE.CODE,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("인증번호 확인 Form:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[37px] flex flex-col gap-[78px]">
        <h1 className="title2 mt-[163px] text-center">비밀번호 찾기</h1>
        <CodeInput
          name="code"
          value={formData.code}
          isVerified
          errorMessage={formErrors.code}
          onInputChange={handleInputChange}
        />
      </div>
      <PrimaryButton
        size="main"
        text="인증번호 확인"
        isActive={false}
        onButtonClick={() => {}}
      />
    </form>
  );
};

export default VerifyCodeForm;

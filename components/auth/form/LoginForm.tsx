"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useFormValidate } from "@/hooks/useFormValidate";
import EmailInput from "@/components/auth/input/EmailInput";
import PasswordInput from "@/components/auth/input/PasswordInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { loginSchema } from "@/schemas/auth";

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const { errors: formErrors, validateField } =
    useFormValidate<LoginFormData>(loginSchema);

  const handleInputChange = (name: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = loginSchema.safeParse(formData);

    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors;
      console.log("유효성 검사 실패", flattened);
      return;
    }

    console.log("로그인 시도:", formData);
  };

  const isFormValid =
    Object.values(formErrors ?? {}).every((error) => !error) &&
    Object.values(formData).every((value) => value !== "");

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[43px] flex flex-col gap-[27px]">
        <h1 className="title2 mt-[128px] text-center">로그인</h1>
        <EmailInput
          name="email"
          value={formData.email}
          errorMessage={formErrors?.email?.[0]}
          onInputChange={handleInputChange}
        />
        <PasswordInput
          name="password"
          value={formData.password}
          errorMessage={formErrors?.password?.[0]}
          onInputChange={handleInputChange}
        />
      </div>
      <PrimaryButton
        type="submit"
        size="main"
        text="로그인"
        isActive={isFormValid}
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

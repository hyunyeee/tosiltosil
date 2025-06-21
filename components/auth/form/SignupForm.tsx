"use client";

import { useState } from "react";
import { z } from "zod";
import { signupSchema, checkPasswordsMatch } from "@/schemas/auth";
import { useFormValidate } from "@/hooks/useFormValidate";

import EmailInput from "@/components/auth/input/EmailInput";
import PasswordInput from "@/components/auth/input/PasswordInput";
import CodeInput from "@/components/auth/input/CodeInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";

type SignupFormData = z.infer<typeof signupSchema> & {
  confirmPassword: string;
};

const SignupForm = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  const isVerified = false; // 인증번호 확인 API 성공 응답이 온 경우

  const { errors: formErrors, validateField } =
    useFormValidate<Omit<SignupFormData, "confirmPassword">>(signupSchema);

  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(
    null
  );

  const handleInputChange = (name: keyof SignupFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name !== "confirmPassword") {
      validateField(name, value);
    }
    if (name === "confirmPassword" || name === "password") {
      setPasswordMatchError(null); // 입력 중 오류 초기화
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = signupSchema.safeParse({
      email: formData.email,
      code: formData.code,
      password: formData.password,
    });

    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors;
      console.log("기본 유효성 검사 실패", flattened);
      return;
    }

    const pwError = checkPasswordsMatch(
      formData.password,
      formData.confirmPassword
    );
    if (pwError) {
      setPasswordMatchError(pwError);
      return;
    }

    console.log("회원가입 시도:", formData);
  };

  const isFormValid =
    Object.values(formErrors ?? {}).every((error) => !error) &&
    !passwordMatchError &&
    Object.values(formData).every((value) => value !== "");

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title2 mt-[71px] mb-[46px] text-center">회원가입</h1>
      <div className="flex flex-col gap-[23px]">
        <div>
          <EmailInput
            name="email"
            value={formData.email}
            errorMessage={formErrors?.email?.[0]}
            onInputChange={handleInputChange}
          />
          <div className="flex justify-end">
            <PrimaryButton
              size="sub"
              text="인증번호받기"
              isActive={formData.email !== "" && !formErrors?.email?.[0]}
              onButtonClick={() => {}}
            />
          </div>
        </div>
        <div>
          <CodeInput
            name="code"
            value={formData.code}
            isVerified={isVerified}
            errorMessage={formErrors?.code?.[0]}
            onInputChange={handleInputChange}
          />
          <div className="flex justify-end">
            <PrimaryButton
              size="sub"
              text="인증번호확인"
              isActive={formData.code !== "" && !formErrors?.code?.[0]}
              onButtonClick={() => {}}
            />
          </div>
        </div>
        <PasswordInput
          name="password"
          value={formData.password}
          errorMessage={formErrors?.password?.[0]}
          onInputChange={handleInputChange}
        />
        <PasswordInput
          name="confirmPassword"
          value={formData.confirmPassword}
          errorMessage={passwordMatchError ?? undefined}
          onInputChange={handleInputChange}
        />
        <PrimaryButton
          type="submit"
          size="main"
          text="다음으로"
          isActive={isFormValid}
        />
      </div>
    </form>
  );
};

export default SignupForm;

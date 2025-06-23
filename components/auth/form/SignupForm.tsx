"use client";

import { useState } from "react";
import { SignupFormData, signupSchema } from "@/schemas/auth";
import EmailInput from "@/components/auth/input/EmailInput";
import PasswordInput from "@/components/auth/input/PasswordInput";
import CodeInput from "@/components/auth/input/CodeInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupForm = () => {
  // TODO: isVerified 는 “인증번호확인” API 호출 결과에 따라 true 로 설정
  const [isVerified, setIsVerified] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      code: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("회원가입 시도:", data);
    // TODO: 실제 회원가입 API 호출
  };

  const handleRequestCode = async (email: string) => {
    console.log("인증번호 요청:", email);
    // TODO: 인증번호 요청 API
  };

  const handleVerifyCode = async (code: string) => {
    console.log("인증번호 확인:", code);
    // TODO: 인증번호 확인 API → 성공 시 setIsVerified(true)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title2 mt-[71px] mb-[46px] text-center">회원가입</h1>
      <div className="flex flex-col gap-[23px]">
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <EmailInput
                  isValid={!!errors.email}
                  isVerified={isVerified}
                  sort="signup"
                  value={field.value}
                  errorMessage={errors.email?.message}
                  onInputChange={field.onChange}
                />
                <div className="flex justify-end">
                  <PrimaryButton
                    size="sub"
                    text="인증번호받기"
                    isActive={!!field.value && !errors.email}
                    onButtonClick={() => handleRequestCode(field.value)}
                  />
                </div>
              </>
            )}
          />
        </div>
        <div>
          <Controller
            name="code"
            control={control}
            render={({ field }) => (
              <>
                <CodeInput
                  sort="signup"
                  value={field.value}
                  isVerified={isVerified}
                  errorMessage={errors.code?.message}
                  onInputChange={field.onChange}
                />
                <div className="flex justify-end">
                  <PrimaryButton
                    size="sub"
                    text="인증번호확인"
                    isActive={!!field.value && !errors.code}
                    onButtonClick={() => handleVerifyCode(field.value)}
                  />
                </div>
              </>
            )}
          />
        </div>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordInput
              sort="signup"
              name={field.name}
              value={field.value}
              errorMessage={errors.password?.message}
              onInputChange={field.onChange}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <PasswordInput
              sort="signup"
              name={field.name}
              value={field.value}
              errorMessage={errors.confirmPassword?.message}
              onInputChange={field.onChange}
            />
          )}
        />
        <PrimaryButton
          type="submit"
          size="main"
          text="다음으로"
          isActive={isValid && !isSubmitting && isVerified}
        />
      </div>
    </form>
  );
};

export default SignupForm;

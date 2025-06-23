"use client";

import Link from "next/link";
import EmailInput from "@/components/auth/input/EmailInput";
import PasswordInput from "@/components/auth/input/PasswordInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { LoginFormData, loginSchema } from "@/schemas/auth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("로그인 시도:", data);
    // TODO: 로그인 API 호출 등
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[43px] flex flex-col gap-[27px]">
        <h1 className="title2 mt-[128px] text-center">로그인</h1>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <EmailInput
              sort="login"
              isValid={!!errors.email}
              value={field.value}
              errorMessage={errors.email?.message}
              onInputChange={field.onChange}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordInput
              sort="login"
              name={field.name}
              value={field.value}
              errorMessage={errors.password?.message}
              onInputChange={field.onChange}
            />
          )}
        />
      </div>
      <PrimaryButton
        type="submit"
        size="main"
        text="로그인"
        isActive={isValid && !isSubmitting}
      />
      <div className="mt-[27px] flex justify-between">
        <Link
          href="/find-password"
          className="subhead2 border-primary-deepGray text-primary-deepGray border-b-1 px-[6px] pb-[5px]"
        >
          비밀번호찾기
        </Link>
        <Link
          href="/signup"
          className="subhead2 border-primary-deepGray text-primary-deepGray border-b-1 px-[6px] pb-[5px]"
        >
          회원가입
        </Link>
      </div>
    </form>
  );
};
export default LoginForm;

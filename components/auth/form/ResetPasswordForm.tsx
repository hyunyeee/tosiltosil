"use client";

import PrimaryButton from "@/components/commons/button/PrimaryButton";
import PasswordInput from "@/components/auth/input/PasswordInput";
import { ResetPasswordFormData, resetPasswordSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const ResetPasswordForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data: ResetPasswordFormData) => {
    console.log("비밀번호 변경 Form:", data);
    // TODO: 비밀번호 변경 API 호출
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[60px]">
        <h1 className="title2 mt-[163px] text-center">비밀번호 재설정</h1>
        <div className="mb-[43px] flex flex-col gap-[27px]">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput
                sort="find-password"
                isValid={!errors.password}
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
                sort="find-password"
                name={field.name}
                isValid={!errors.confirmPassword}
                value={field.value}
                errorMessage={errors.confirmPassword?.message}
                onInputChange={field.onChange}
              />
            )}
          />
        </div>
      </div>
      <PrimaryButton
        type="submit"
        size="main"
        text="로그인 페이지로"
        isActive={isValid && !isSubmitting}
      />
    </form>
  );
};

export default ResetPasswordForm;

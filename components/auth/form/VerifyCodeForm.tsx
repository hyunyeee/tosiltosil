"use client";

import PrimaryButton from "@/components/commons/button/PrimaryButton";
import CodeInput from "@/components/auth/input/CodeInput";
import { VerifyCodeFormData, verifyCodeSchema } from "@/schemas/auth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface VerifyCodeFormProps {
  onCodeNext: (code: string) => void;
  onResend: () => void;
}

const VerifyCodeForm = ({ onCodeNext, onResend }: VerifyCodeFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<VerifyCodeFormData>({
    resolver: zodResolver(verifyCodeSchema),
    mode: "onChange",
    defaultValues: { code: "" },
  });

  const onSubmit = (data: VerifyCodeFormData) => {
    onCodeNext(data.code);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <>
            <div className="mb-[37px] flex flex-col gap-[78px]">
              <h1 className="title2 mt-[163px] text-center">비밀번호 찾기</h1>
              <CodeInput
                sort="find-password"
                value={field.value}
                isValid={!errors.code}
                isVerified={false}
                errorMessage={errors.code?.message}
                onInputChange={field.onChange}
                onResend={onResend}
              />
            </div>
            <PrimaryButton
              size="main"
              text="인증번호 확인"
              isActive={isValid && !isSubmitting}
            />
          </>
        )}
      />
    </form>
  );
};

export default VerifyCodeForm;

"use client";

import PrimaryButton from "@/components/commons/button/PrimaryButton";
import CodeInput from "@/components/auth/input/CodeInput";
import { VerifyCodeFormData, verifyCodeSchema } from "@/schemas/auth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCountdown } from "@/hooks/useCountdown";
import { useSendAuthCodeEmail } from "@/apis/auth/queries";
import { useEffect } from "react";

interface VerifyCodeFormProps {
  onCodeNext: (code: string) => void;
  email: string;
}

const VerifyCodeForm = ({ onCodeNext, email }: VerifyCodeFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<VerifyCodeFormData>({
    resolver: zodResolver(verifyCodeSchema),
    mode: "onChange",
    defaultValues: { code: "" },
  });

  useEffect(() => {
    setResendTrigger((prev) => prev + 1);
  }, []);

  const { timeLeft, setResendTrigger } = useCountdown();
  const { mutate: sendAuthCodeEmail } = useSendAuthCodeEmail();

  const onSubmit = (data: VerifyCodeFormData) => {
    onCodeNext(data.code);
  };

  const handleRequestCode = () => {
    sendAuthCodeEmail(
      { email, purpose: "FORGOT_PASSWORD" },
      {
        onSuccess: (data) => {
          console.log("인증코드 이메일 전송 성공", data);
          setResendTrigger((prev) => prev + 1);
        },
        onError: (error) => {
          console.error("인증코드 이메일 전송 실패", error);
          setResendTrigger((prev) => prev + 1);
        },
      }
    );
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
                onResend={handleRequestCode}
                timeLeft={timeLeft}
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

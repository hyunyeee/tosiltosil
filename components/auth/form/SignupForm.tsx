"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendAuthCodeEmail, useVerifyCode } from "@/apis/auth/queries";
import { useCountdown } from "@/hooks/useCountdown";
import EmailInput from "@/components/auth/input/EmailInput";
import PasswordInput from "@/components/auth/input/PasswordInput";
import CodeInput from "@/components/auth/input/CodeInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { SignupFormData, signupSchema } from "@/schemas/auth";

interface SignupFormProps {
  onSignupNext: (password: string) => void;
}

const SignupForm = ({ onSignupNext }: SignupFormProps) => {
  const [isVerified, setIsVerified] = useState(false);
  const [initialAuthCodeRequest, setInitialAuthCodeRequest] = useState(true);

  const {
    control,
    handleSubmit,
    getValues,
    watch,
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

  const email = watch("email");

  useEffect(() => {
    setIsVerified(false);
    setInitialAuthCodeRequest(true);
  }, [email]);

  const { mutate: sendAuthCodeEmail } = useSendAuthCodeEmail();
  const { mutate: verifyCode } = useVerifyCode();

  const { timeLeft, setResendTrigger } = useCountdown();

  const onSubmit = (data: SignupFormData) => {
    onSignupNext(data.password);
  };

  const handleFirstRequestAuthCodeEmail = () => {
    const email = getValues("email");
    sendAuthCodeEmail(
      { email, purpose: "SIGN_UP" },
      {
        onSuccess: (data) => {
          console.log("인증코드 이메일 전송 성공", data);
          setResendTrigger((prev) => prev + 1);
          setInitialAuthCodeRequest(false);
        },
        onError: (error) => {
          console.error("인증코드 이메일 전송 실패", error);
          setInitialAuthCodeRequest(true);
        },
      }
    );
  };

  const handleRequestCode = async () => {
    const email = getValues("email");
    sendAuthCodeEmail(
      { email, purpose: "SIGN_UP" },
      {
        onSuccess: (data) => {
          console.log("인증코드 이메일 전송 성공", data);
          setResendTrigger((prev) => prev + 1);
        },
        onError: (error) => {
          console.error("인증코드 이메일 전송 실패", error);
        },
      }
    );
  };

  const handleVerifyCode = async (code: string) => {
    const email = getValues("email");
    verifyCode(
      { email, authNumber: code },
      {
        onSuccess: () => {
          setIsVerified(true);
          console.log("인증코드 확인 성공");
        },
        onError: () => {
          setIsVerified(false);
          console.error("인증코드 확인 실패");
        },
      }
    );
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
                  isValid={!errors.email}
                  isVerified={isVerified}
                  sort="signup"
                  value={field.value}
                  errorMessage={errors.email?.message}
                  onInputChange={field.onChange}
                />
                {initialAuthCodeRequest && (
                  <div className="flex justify-end">
                    <PrimaryButton
                      size="sub"
                      type="button"
                      text="인증번호받기"
                      isActive={!!field.value && !errors.email}
                      onButtonClick={handleFirstRequestAuthCodeEmail}
                    />
                  </div>
                )}
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
                  isValid={!errors.code}
                  isVerified={isVerified}
                  errorMessage={errors.code?.message}
                  onInputChange={field.onChange}
                  onResend={handleRequestCode}
                  timeLeft={timeLeft}
                />
                <div className="flex justify-end">
                  <PrimaryButton
                    size="sub"
                    type="button"
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
              isValid={!errors.password}
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
              isValid={!errors.confirmPassword}
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

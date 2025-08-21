"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useSendAuthCodeEmail,
  useVerifyCode,
  useVerifyEmail,
} from "@/apis/auth/queries";
import { useDebounce } from "@/hooks/useDebounce";
import { useOverlay } from "@/hooks/useOverlay";
import { useCountdown } from "@/hooks/useCountdown";
import EmailInput from "@/components/auth/input/EmailInput";
import PasswordInput from "@/components/auth/input/PasswordInput";
import CodeInput from "@/components/auth/input/CodeInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import LimitExceededErrorModal from "@/components/overlay/modal/LimitExceededErrorModal";
import { SignupFormData, signupSchema } from "@/schemas/auth";

interface SignupFormProps {
  onSignupNext: (password: string) => void;
}

const SignupForm = ({ onSignupNext }: SignupFormProps) => {
  const [isEmailAvailable, setIsEmailAvailable] = useState(false); // 이메일 검증 성공 여부
  const [isVerified, setIsVerified] = useState(false); // Input 잠금 처리
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
  const debouncedEmail = useDebounce(email, 1000);

  const isEmailFormatValid = !!debouncedEmail?.trim() && !errors.email;

  const {
    data,
    error,
    isFetching: emailChecking,
  } = useVerifyEmail(debouncedEmail, !errors.email);

  useEffect(() => {
    if (!isEmailFormatValid) {
      setIsEmailAvailable(false);
      return;
    }
    if (error) {
      setIsEmailAvailable(false);
      return;
    }
    setIsEmailAvailable(data?.status === 200);
  }, [isEmailFormatValid, data, error]);

  useEffect(() => {
    setIsVerified(false);
    setInitialAuthCodeRequest(true);
  }, [email]);

  const { mutate: sendAuthCodeEmail } = useSendAuthCodeEmail();
  const { mutate: verifyCode } = useVerifyCode();
  const { openOverlay } = useOverlay();
  const { timeLeft, setResendTrigger } = useCountdown();

  const onSubmit = (data: SignupFormData) => {
    onSignupNext(data.password);
  };

  const handleFirstRequestAuthCodeEmail = () => {
    const email = getValues("email");
    sendAuthCodeEmail(
      { email, purpose: "SIGN_UP" },
      {
        onSuccess: () => {
          setResendTrigger((prev) => prev + 1);
          setInitialAuthCodeRequest(false);
        },
        onError: () => {
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
        onSuccess: () => {
          setResendTrigger((prev) => prev + 1);
        },
        onError: (error) => {
          if (error) {
            openOverlay("modal", <LimitExceededErrorModal />);
          }
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
          if (isEmailAvailable) {
            setIsVerified(true);
          }
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
                  sort="signup"
                  value={field.value}
                  isValid={!errors.email && isEmailAvailable}
                  isVerified={isVerified}
                  onInputChange={field.onChange}
                  errorMessage={
                    errors.email?.message ||
                    (!emailChecking && isEmailFormatValid && !isEmailAvailable
                      ? "이미 사용 중인 이메일입니다."
                      : undefined)
                  }
                />
                {initialAuthCodeRequest && (
                  <div className="mt-[16px] flex justify-end">
                    <PrimaryButton
                      size="sub"
                      type="button"
                      text="인증번호받기"
                      isActive={
                        !!field.value && !errors.email && isEmailAvailable
                      }
                      onButtonClick={handleFirstRequestAuthCodeEmail}
                    />
                  </div>
                )}
              </>
            )}
          />
        </div>
        {isEmailAvailable && !initialAuthCodeRequest && (
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
                  {!isVerified && (
                    <div className="mt-[13px] flex justify-end">
                      <PrimaryButton
                        size="sub"
                        type="button"
                        text="인증번호확인"
                        isActive={!!field.value && !errors.code}
                        onButtonClick={() => handleVerifyCode(field.value)}
                      />
                    </div>
                  )}
                </>
              )}
            />
          </div>
        )}

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

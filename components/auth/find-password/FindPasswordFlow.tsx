"use client";

import { useState } from "react";
import useFunnel from "@/hooks/useFunnel";
import RequestCodeForm from "../form/RequestCodeForm";
import VerifyCodeForm from "../form/VerifyCodeForm";
import ResetPasswordForm from "../form/ResetPasswordForm";
import { useRouter } from "next/navigation";
import BackHeader from "@/components/commons/header/BackHeader";

export default function FindPasswordFlow() {
  const router = useRouter();
  const { Funnel, isFirst, Step, nextStep, prevStep } = useFunnel([
    "enterEmail",
    "verifyCode",
    "resetPassword",
  ] as const);
  const [email, setEmail] = useState<string>("");

  const handleEmailNext = (emailValue: string) => {
    // TODO: 이메일 인증번호 API 요청
    nextStep();
    setEmail(emailValue);
  };
  const handleCodeNext = (code: string) => {
    // TODO: 인증번호 완료 API
    nextStep();
  };
  const handleReset = (newPassword: string) => {
    // TODO: 데이터 전부 보냄
    router.replace("/login");
  };
  const handleBackClick = () => {
    if (isFirst) {
      router.back();
    } else {
      prevStep();
    }
  };

  return (
    <div className="flex flex-col">
      <BackHeader onBackClick={handleBackClick} showActions={false} />
      <Funnel>
        <Step name="enterEmail">
          <RequestCodeForm onEmailNext={handleEmailNext} />
        </Step>
        <Step name="verifyCode">
          <VerifyCodeForm onCodeNext={handleCodeNext} />
        </Step>
        <Step name="resetPassword">
          <ResetPasswordForm onResetNext={handleReset} />
        </Step>
      </Funnel>
    </div>
  );
}

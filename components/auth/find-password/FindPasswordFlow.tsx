"use client";

import { useState } from "react";
import useFunnel from "@/hooks/useFunnel";
import RequestCodeForm from "../form/RequestCodeForm";
import VerifyCodeForm from "../form/VerifyCodeForm";
import ResetPasswordForm from "../form/ResetPasswordForm";
import { useRouter } from "next/navigation";

export default function FindPasswordFlow() {
  const router = useRouter();
  const { Funnel, Step, nextStep, prevStep } = useFunnel([
    "enterEmail",
    "verifyCode",
    "resetPassword",
  ] as const);
  const [email, setEmail] = useState<string>("");

  const handleEmailNext = (emailValue: string) => {
    // TODO: 이메일 인증번호 API 요청
    nextStep();
    setEmail(email);
  };
  const handleCodeNext = (code: string) => {
    // TODO: 인증번호 완료 API
    nextStep();
  };
  const handleReset = (newPassword: string) => {
    // TODO: 데이터 전부 보냄
    router.replace("/login");
  };

  return (
    
    <Funnel>
      <Step name="enterEmail">
        <RequestCodeForm onEmailNext={handleEmailNext} />
      </Step>
      <Step name="verifyCode">
        <VerifyCodeForm onCodeNext={handleCodeNext} onBack={prevStep} />
      </Step>
      <Step name="resetPassword">
        <ResetPasswordForm onResetNext={handleReset} onBack={prevStep} />
      </Step>
    </Funnel>
  );
}

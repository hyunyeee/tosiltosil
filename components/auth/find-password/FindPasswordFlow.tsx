"use client";

import { useState } from "react";
import useFunnel from "@/hooks/useFunnel";
import RequestCodeForm from "../form/RequestCodeForm";
import VerifyCodeForm from "../form/VerifyCodeForm";
import ResetPasswordForm from "../form/ResetPasswordForm";
import { useRouter } from "next/navigation";
import BackHeader from "@/components/commons/header/BackHeader";
import { FIND_PASSWORD_STEPS } from "@/constants/flow";

export default function FindPasswordFlow() {
  const router = useRouter();
  const { Funnel, isFirst, Step, nextStep, prevStep } =
    useFunnel(FIND_PASSWORD_STEPS);
  const [email, setEmail] = useState("");

  const handleEmailNext = (emailValue: string) => {
    setEmail(emailValue);
    nextStep();
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
          <VerifyCodeForm onCodeNext={handleCodeNext} email={email} />
        </Step>
        <Step name="resetPassword">
          <ResetPasswordForm onResetNext={handleReset} />
        </Step>
      </Funnel>
    </div>
  );
}

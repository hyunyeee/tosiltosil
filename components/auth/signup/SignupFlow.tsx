"use client";

import { useState } from "react";
import useFunnel from "@/hooks/useFunnel";
import { useRouter } from "next/navigation";
import SignupForm from "../form/SignupForm";
import TermsForm from "../form/TermsForm";
import ProfilePage from "@/app/(auth)/signup/profile/page";
import SignupComplete from "@/app/(auth)/signup/complete/page";
import BackHeader from "@/components/commons/header/BackHeader";
import TermsDetail from "../terms/TermsDetail";

export default function SignupFlow() {
  const router = useRouter();
  const { Funnel, isFirst, Step, nextStep, prevStep, setStep } = useFunnel([
    "signup",
    "terms",
    "termsDetail",
    "profile",
    "complete",
  ] as const);
  const [data, setData] = useState({});
  const [termsId, setTermsId] = useState<string | null>(null);

  const handleSignupNext = () => {
    // TODO:
    nextStep();
  };
  const handleTermsNext = () => {
    // TODO: 인증번호 완료 API
    setStep("profile");
  };
  const handleProfileNext = () => {
    // TODO: 데이터 전부 보냄
    nextStep();
  };

  const handleBackClick = () => {
    if (isFirst) {
      router.back();
    } else {
      prevStep();
    }
  };

  const handleDetailInfoClick = (id: string) => {
    setTermsId(id);
    setStep("termsDetail");
  };

  return (
    <div className="flex flex-col">
      <BackHeader onBackClick={handleBackClick} showActions={false} />
      <Funnel>
        <Step name="signup">
          <SignupForm onSignupNext={handleSignupNext} />
        </Step>
        <Step name="terms">
          <TermsForm
            onTermsNext={handleTermsNext}
            onDetailInfoClick={handleDetailInfoClick}
          />
        </Step>
        <Step name="termsDetail">
          {termsId && <TermsDetail id={termsId} />}
        </Step>
        <Step name="profile">
          <ProfilePage onProfileNext={handleProfileNext} />
        </Step>
        <Step name="complete">
          <SignupComplete />
        </Step>
      </Funnel>
    </div>
  );
}

"use client";

import { useState } from "react";
import useFunnel from "@/hooks/useFunnel";
import { useRouter } from "next/navigation";
import SignupForm from "../form/SignupForm";
import TermsForm from "../form/TermsForm";
import SignupComplete from "@/app/(auth)/signup/complete/page";
import BackHeader from "@/components/commons/header/BackHeader";
import TermsDetail from "../terms/TermsDetail";
import { SignupPayload, TermAgreement } from "@/types/api/auth";
import { AGREEMENTS } from "@/constants/terms";
import { ProfileFormData } from "@/schemas/auth";
import ProfileForm from "../form/ProfileForm";

export default function SignupFlow() {
  const router = useRouter();
  const { Funnel, isFirst, Step, nextStep, prevStep, setStep } = useFunnel([
    "signup",
    "terms",
    "termsDetail",
    "profile",
    "complete",
  ] as const);
  const [signupData, setSignupData] = useState<Partial<SignupPayload>>({});
  const [termsData, setTermsData] = useState<TermAgreement[]>(
    AGREEMENTS.map((prev) => ({ ...prev, agreed: false }))
  );

  const [termsId, setTermsId] = useState<string | null>(null);

  const handleSignupNext = (password: string) => {
    setSignupData((prev) => ({ ...prev, password }));
    nextStep();
  };
  const handleTermsNext = () => {
    const termsResult = termsData.map(({ title, version, agreed }) => ({
      title,
      version,
      agreed,
    }));
    setSignupData((prev) => ({ ...prev, terms: termsResult }));
    setStep("profile");
  };

  const handleProfileNext = (formData: ProfileFormData, file: File | null) => {
    const form = new FormData();
    if (file) {
      form.append("profileImage", file);
    }
    const memberInfoPayload = {
      ...signupData,
      nickname: formData.nickname,
    };
    form.append(
      "memberInfo",
      new Blob([JSON.stringify(memberInfoPayload)], {
        type: "application/json",
      })
    );

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
            termsData={termsData}
            setTermsData={setTermsData}
            onTermsNext={handleTermsNext}
            onDetailInfoClick={handleDetailInfoClick}
          />
        </Step>
        <Step name="termsDetail">
          {termsId && <TermsDetail id={termsId} />}
        </Step>
        <Step name="profile">
          <ProfileForm<ProfileFormData> onSubmit={handleProfileNext} />
        </Step>
        <Step name="complete">
          <SignupComplete />
        </Step>
      </Funnel>
    </div>
  );
}

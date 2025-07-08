"use client";

import ProfileForm from "@/components/auth/form/ProfileForm";

import { ProfilePayload } from "@/types/api/member";

export default function ProfileEditPage() {
  // Todo: get Profile

  const handleSave = (data: ProfilePayload, file: File | null) => {};
  return (
    <ProfileForm
      // initialData={initialData}
      onSubmit={handleSave}
      submitLabel="저장하기"
    />
  );
}

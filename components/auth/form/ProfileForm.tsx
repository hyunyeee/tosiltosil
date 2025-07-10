"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NicknameInput from "@/components/auth/input/NicknameInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import ProfileImageUploader from "@/components/auth/profile/ProfileImageUploader";
import { ProfileFormData, profileSchema } from "@/schemas/auth";
import { ProfilePayload } from "@/types/api/member";

interface ProfileFormProps<T> {
  initialData?: Partial<ProfilePayload>;
  onSubmit: (data: T, file: File | null) => void;
  submitLabel?: string;
}

export default function ProfileForm<
  T extends ProfileFormData | ProfilePayload,
>({ initialData, onSubmit, submitLabel = "다음으로" }: ProfileFormProps<T>) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: "all",
    defaultValues: {
      nickname: initialData?.nickname ?? "",
    },
  });

  const [previewImage, setPreviewImage] = useState<string | null>(
    initialData?.profileImg ?? null
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    return () => {
      if (previewImage) URL.revokeObjectURL(previewImage);
    };
  }, [previewImage]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (previewImage) URL.revokeObjectURL(previewImage);
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setSelectedFile(file);
    }
  };

  const handleResetImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (previewImage) URL.revokeObjectURL(previewImage);
    setPreviewImage(null);
    setSelectedFile(null);
  };

  const internalSubmit = handleSubmit((data) => {
    onSubmit(data as T, selectedFile);
  });

  return (
    <form onSubmit={internalSubmit}>
      <ProfileImageUploader
        previewImage={previewImage}
        onImageChange={handleImageChange}
        onImageReset={handleResetImage}
      />

      <Controller
        name="nickname"
        control={control}
        render={({ field }) => (
          <NicknameInput
            value={field.value}
            errorMessage={errors.nickname?.message}
            onInputChange={field.onChange}
          />
        )}
      />

      <PrimaryButton
        type="submit"
        size="main"
        text={submitLabel}
        isActive={isValid && !isSubmitting}
      />
    </form>
  );
}

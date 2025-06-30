"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NicknameInput from "@/components/auth/input/NicknameInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import ProfileImageUploader from "@/components/auth/profile/ProfileImageUploader";
import { ProfileFormData, profileSchema } from "@/schemas/auth";

interface ProfilePageProps {
  onProfileNext: () => void;
}

export default function ProfilePage({ onProfileNext }: ProfilePageProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    shouldFocusError: true,
    mode: "all",
    defaultValues: {
      nickname: "",
    },
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    return () => {
      revokePreviewImage();
    };
  }, [previewImage]);

  const revokePreviewImage = () => {
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      revokePreviewImage();
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
      setSelectedFile(file);
    }
  };

  const resetImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setPreviewImage(null);
    setSelectedFile(null);
  };

  const onSubmit = async (data: ProfileFormData) => {
    const formData = new FormData();
    formData.append("nickname", data.nickname);
    if (selectedFile) {
      formData.append("profileImage", selectedFile);
    }
    for (const [key, value] of formData.entries()) {
      console.log(key, ":", value);
    }
  };

  return (
    <div className="mt-[120px]">
      <h1 className="title2">프로필 설정</h1>
      <h3 className="subhead2">마지막 단계인 프로필 설정까지하면 완료!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[100px]">
          <ProfileImageUploader
            previewImage={previewImage}
            onImageChange={handleImageChange}
            onImageReset={resetImage}
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
            text="다음으로"
            isActive={isValid && !isSubmitting}
            onButtonClick={onProfileNext}
          />
        </div>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
    }
  };

  const resetImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setPreviewImage(null);
  };

  return (
    <div className="mt-[120px]">
      <h1 className="title2">프로필 설정</h1>
      <h3 className="subhead2">마지막 단계인 프로필 설정까지하면 완료!</h3>
      <form>
        <div className="mt-[100px]">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <div className="relative mx-auto mb-[29px] h-[140px] w-[140px]">
              <div className="h-full w-full overflow-hidden rounded-full bg-black/20">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="프로필 미리보기"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src="/images/default-profile-rabbit.png"
                    alt="기본 프로필 아이콘"
                    className="mx-auto mt-[40px] h-16 w-16"
                  />
                )}
              </div>
              {previewImage && (
                <button
                  type="button"
                  onClick={resetImage}
                  className="absolute right-[13px] bottom-0 z-10"
                >
                  <Image
                    src="/icons/delete-profile-icon.svg"
                    alt="프로필 초기화"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </div>

            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

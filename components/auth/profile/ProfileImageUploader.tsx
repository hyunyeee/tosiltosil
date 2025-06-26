import Image from "next/image";

interface ProfileImageUploaderProps {
  previewImage: string | null;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProfileImageUploader = ({
  previewImage,
  onImageChange,
  onImageReset,
}: ProfileImageUploaderProps) => {
  return (
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
            onClick={onImageReset}
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
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={onImageChange}
      />
    </label>
  );
};

export default ProfileImageUploader;

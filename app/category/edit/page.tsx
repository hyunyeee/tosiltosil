"use client";
import { useGetCategories } from "@/apis/category/queries";
import CategoryList from "@/components/category/CategoryList";
import BasicTitle from "@/components/friend/BasicTitle";
import FriendListFrame from "@/components/friend/FriendListFrame";

export default function CategoryEditPage() {
  // TODO: 카테고리 받아오기
  const { data: categories, isLoading, error } = useGetCategories();
  if (isLoading) {
    return <div></div>;
  }
  return (
    <div className="flex min-h-full w-full flex-col">
      <div className="mt-[28px] flex shrink-0 items-center justify-between px-[20px]">
        <BasicTitle
          titleIconSrc="/icons/checklist-icon.svg"
          text="카테고리"
          buttonIconType="plus"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <FriendListFrame
          isEmpty={!categories || categories.length === 0}
          content="카테고리가 없습니다."
        >
          {categories && (
            <div className="flex flex-col gap-[7px] px-5">
              <CategoryList initialCategories={categories} />
            </div>
          )}
        </FriendListFrame>
      </div>
    </div>
  );
}

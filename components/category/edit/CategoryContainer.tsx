"use client";
import BasicTitle from "@/components/friend/BasicTitle";
import FriendListFrame from "@/components/friend/FriendListFrame";
import CategoryList from "./CategoryList";
import { useGetCategories } from "@/apis/category/queries";

const CategoryContainer = () => {
  const { data: categories, isLoading, error } = useGetCategories();

  const handleCategoryAdd = () => {
    /*TODO: 모달 추가 */
  };

  return (
    <>
      <div className="mt-[28px] flex shrink-0 items-center justify-between px-[20px]">
        <BasicTitle
          titleIconSrc="/icons/checklist-icon.svg"
          text="카테고리"
          buttonIconType="plus"
          onButtonClick={handleCategoryAdd}
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
    </>
  );
};

export default CategoryContainer;

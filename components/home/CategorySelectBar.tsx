import CategoryLabel from "@/components/home/CategoryLabel";
import { Category } from "@/types/Category";

interface CategorySelectBarProps {
  categoryList: Category[];
  selectedCategoryId: number | null;
  onCategorySelect: (category: number | null) => void;
}

const CategorySelectBar = ({
  categoryList,
  selectedCategoryId,
  onCategorySelect,
}: CategorySelectBarProps) => {
  const resetCategory = () => {
    onCategorySelect(null);
  };

  return (
    <div className="bg-gray-background flex shrink-0 items-center gap-[14px] overflow-x-scroll px-[20px] py-[9px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] [&::-webkit-scrollbar]:hidden">
      <button className="flex-shrink-0">
        <img src="/icons/add-category-icon.svg" />
      </button>
      <div
        className={`${selectedCategoryId === null ? "bg-primary-mainText" : "bg-primary-darkGray"} footnote flex-shrink-0 cursor-pointer rounded-[2px] border-[1px] px-[12px] py-[4px] text-white`}
        onClick={resetCategory}
      >
        전체
      </div>
      {categoryList.map((category) => (
        <CategoryLabel
          key={category.categoryId}
          {...category}
          selectedCategoryId={selectedCategoryId}
          onCategorySelect={onCategorySelect}
        />
      ))}
    </div>
  );
};
export default CategorySelectBar;

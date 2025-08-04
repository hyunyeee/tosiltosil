import { getPrimaryColor, getSubColor } from "@/utils/theme";

interface CategoryLabelProps {
  categoryId: number;
  title: string;
  color: string;
  selectedCategoryId: number | null;
  onCategorySelect: (category: number | null) => void;
}

const CategoryLabel = ({
  categoryId,
  title,
  color,
  selectedCategoryId,
  onCategorySelect,
}: CategoryLabelProps) => {
  const isSelected = selectedCategoryId === categoryId;

  const handleSelectCategory = () => {
    onCategorySelect(categoryId);
  };

  return (
    <div
      onClick={handleSelectCategory}
      className="footnote text-primary-mainText flex-shrink-0 cursor-pointer rounded-[2px] border-[1px] px-[12px] py-[4px] text-center"
      style={{
        backgroundColor: getSubColor(color),
        borderColor: getPrimaryColor(color),
        opacity: isSelected ? 1 : 0.5,
      }}
    >
      {title}
    </div>
  );
};

export default CategoryLabel;

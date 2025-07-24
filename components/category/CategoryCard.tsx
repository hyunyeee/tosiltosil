import { DragState } from "@/hooks/useDragAndDrop";

interface CategoryCardProps {
  title: string;
  color: string;
  onCategoryDelete: () => void;
  dragState: DragState;
}

const CategoryCard = ({
  title,
  color,
  onCategoryDelete,
  dragState,
}: CategoryCardProps) => {
  return (
    <div
      className={`${dragState === "dragging" ? "border-primary-darkGray shadow-category" : "border-black/10"} bg-gray-background flex w-full items-center justify-between rounded-md border py-[9px] pr-[13px] pl-[11px]`}
    >
      <span
        className="text-primary-mainText footnote rounded-sm px-[23px] py-[7px]"
        style={{
          backgroundColor: `var(--color-sub-${color})`,
          borderColor: `var(--color-primary-${color})`,
        }}
      >
        {title}
      </span>
      {dragState === "idle" && (
        <div className="flex items-center gap-2.5">
          <span
            className="h-6 w-6 rounded-sm"
            style={{ backgroundColor: `var(--color-primary-${color})` }}
          />
          <div className="bg-primary-gray h-5 w-px" />
          <button type="button" onClick={onCategoryDelete}>
            <img src="/icons/delete-profile-icon.svg" alt="삭제 아이콘" />
          </button>
        </div>
      )}
      {(dragState === "dragging" || dragState === "others") && (
        <img src="/icons/hamburger-icon.svg" alt="draggingIcon" />
      )}
    </div>
  );
};

export default CategoryCard;

import { FriendHomeHeaderRelationship } from "@/types/friend";
import { RELATIONSHIP_CONFIG } from "@/constants/relationshipConfig";

interface FriendHomeHeaderProps {
  nickname: string;
  code: string;
  relationship: FriendHomeHeaderRelationship;
  onActionClick?: () => void;
  onMoreClick?: () => void;
}

const FriendHomeHeader = ({
  nickname,
  code,
  relationship,
  onActionClick,
  onMoreClick,
}: FriendHomeHeaderProps) => {
  const showRelationText =
    relationship === "REQUEST_SENT" || relationship === "FRIEND";

  const handleActionClick = () => {
    onActionClick?.();
  };

  const handleMoreClick = () => {
    onMoreClick?.();
  };

  return (
    <div className="mx-[20px] mt-[11px] mb-[15px] flex justify-between">
      <p className="body1">
        {nickname} (#{code})
      </p>
      <div className="flex items-center gap-[8px]">
        {showRelationText && (
          <p className="subhead2 text-primary-mainText mr-[11px] text-center">
            {RELATIONSHIP_CONFIG[relationship].relationText}
          </p>
        )}

        {RELATIONSHIP_CONFIG[relationship].actionButtonText && (
          <button
            onClick={handleActionClick}
            className="footnote bg-primary-mainText rounded-[2px] px-[14px] py-[3px] text-white"
          >
            {RELATIONSHIP_CONFIG[relationship].actionButtonText}
          </button>
        )}

        <button onClick={handleMoreClick}>
          <img src="/icons/more-icon.svg" alt="더보기" />
        </button>
      </div>
    </div>
  );
};

export default FriendHomeHeader;

interface FriendHomeHeaderProps {
  nickname: string;
  code: string;
  relationship:
    | "REQUEST_RECEIVED"
    | "REQUEST_SENT"
    | "FRIEND"
    | "BLOCKED"
    | "GENERAL";
}

const FriendHomeHeader = ({
  nickname,
  code,
  relationship,
}: FriendHomeHeaderProps) => {
  const showRelationText =
    relationship === "REQUEST_SENT" || relationship === "FRIEND";

  const relationText =
    relationship === "REQUEST_SENT"
      ? "대기중"
      : relationship === "FRIEND"
        ? "친구"
        : null;

  const relationActionButtonText =
    relationship === "REQUEST_SENT"
      ? "취소"
      : relationship === "GENERAL"
        ? "추가"
        : null;

  return (
    <div className="mx-[20px] mt-[11px] mb-[15px] flex justify-between">
      <p className="body1">
        {nickname} (#{code})
      </p>
      <div className="flex items-center gap-[8px]">
        {showRelationText && (
          <p className="subhead2 text-primary-mainText mr-[11px] text-center">
            {relationText}
          </p>
        )}

        {relationActionButtonText && (
          <button className="footnote bg-primary-mainText rounded-[2px] px-[14px] py-[3px] text-white">
            {relationActionButtonText}
          </button>
        )}

        <button>
          <img src="/icons/more-icon.svg" alt="더보기" />
        </button>
      </div>
    </div>
  );
};

export default FriendHomeHeader;

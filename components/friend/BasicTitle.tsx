interface TitleProps {
  titleIconSrc: string;
  text: string;
  buttonIconType?: "plus";
  onButtonClick?: () => void;
}
type ButtonIconType = NonNullable<TitleProps["buttonIconType"]>;

const BUTTON_ICON_SRC: Record<ButtonIconType, string> = {
  plus: "/icons/plus-icon.svg",
};

const BasicTitle = ({
  titleIconSrc,
  text,
  buttonIconType,
  onButtonClick,
}: TitleProps) => {
  return (
    <div className="mt-[21px] mb-[17px] flex w-full items-center justify-between border-b border-black/10 pb-[5px]">
      <div className="flex items-center gap-[6px]">
        <img src={titleIconSrc} alt="제목 아이콘" />
        <h2 className="subhead2">{text}</h2>
      </div>
      {buttonIconType && (
        <button type="button" onClick={onButtonClick}>
          <img
            src={BUTTON_ICON_SRC[buttonIconType]}
            alt={`${buttonIconType}-icon`}
          />
        </button>
      )}
    </div>
  );
};

export default BasicTitle;

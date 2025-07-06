import { useOverlay } from "@/hooks/useOverlay";
import PrimaryButton from "@/components/commons/button/PrimaryButton";

const ConfirmBottomSheet = () => {
  const { closeOverlay } = useOverlay();

  return (
    <>
      <div className="body1">title</div>
      <p className="footnote">content</p>
      <div className="flex gap-[4px]">
        <PrimaryButton
          size="sub"
          text="차단하기"
          isActive
          onButtonClick={() => closeOverlay()}
        />
        <PrimaryButton
          size="sub"
          text="취소하기"
          isActive
          onButtonClick={() => closeOverlay()}
        />
      </div>
    </>
  );
};

export default ConfirmBottomSheet;

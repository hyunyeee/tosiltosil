import { useOverlay } from "@/hooks/useOverlay";
import PrimaryButton from "@/components/commons/button/PrimaryButton";

const ConfirmBottomSheet = () => {
  const { closeOverlay } = useOverlay();

  return (
    <div className="flex flex-col items-center">
      <img src="/images/modal-vector.svg" />
      <img src="/icons/alert-circle-icon.svg" className="mt-[23px] mb-[7px]" />
      <div className="body1">title</div>
      <div className="bg-primary-gray my-[13px] h-[1px] w-full" />
      <p className="text-primary-mainText footnote mb-[24px]">content</p>
      <div className="flex w-full justify-center gap-[13px]">
        <PrimaryButton
          size="sub"
          text="차단하기"
          isActive
          onButtonClick={() => closeOverlay()}
        />
        <PrimaryButton
          size="sub"
          text="취소하기"
          isActive={false}
          onButtonClick={() => closeOverlay()}
        />
      </div>
    </div>
  );
};

export default ConfirmBottomSheet;

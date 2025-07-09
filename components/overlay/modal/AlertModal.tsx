import { useOverlay } from "@/hooks/useOverlay";
import PrimaryButton from "@/components/commons/button/PrimaryButton";

const AlertModal = () => {
  const { closeOverlay } = useOverlay();

  return (
    <div className="flex flex-col items-center">
      <img src="/images/modal-vector.svg" />
      <img src="/icons/alert-circle-icon.svg" className="mt-[23px] mb-[7px]" />
      <div className="body1 text-primary-mainText">title</div>
      <div className="bg-primary-gray my-[13px] h-[1px] w-full" />
      <p className="text-primary-mainText footnote mb-[24px]">content</p>
      <PrimaryButton
        size="sub"
        text="확인"
        isActive
        onButtonClick={() => closeOverlay()}
      />
    </div>
  );
};

export default AlertModal;

import { useOverlay } from "@/hooks/useOverlay";
import PrimaryButton from "@/components/commons/button/PrimaryButton";

const AlertModal = () => {
  const { closeOverlay } = useOverlay();

  return (
    <>
      <div className="body1">title</div>
      <p className="footnote">content</p>
      <PrimaryButton
        size="sub"
        text="확인"
        isActive
        onButtonClick={() => closeOverlay()}
      />
    </>
  );
};

export default AlertModal;

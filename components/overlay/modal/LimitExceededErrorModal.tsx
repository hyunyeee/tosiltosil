import AlertModal from "@/components/overlay/modal/AlertModal";
import { LOGIN_ERROR_MESSAGE } from "@/constants/ModalMessages";

const LimitExceededErrorModal = () => {
  const { title, content } = LOGIN_ERROR_MESSAGE.LimitExceeded;
  return <AlertModal title={title} content={content} />;
};

export default LimitExceededErrorModal;

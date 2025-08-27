import AlertModal from "@/components/overlay/modal/AlertModal";
import { LOGIN_ERROR_MESSAGE } from "@/constants/modal/ModalMessages";

const LimitExceededErrorModal = () => {
  const { title, content } = LOGIN_ERROR_MESSAGE.LIMIT_EXCEEDED;
  return <AlertModal title={title} content={content} />;
};

export default LimitExceededErrorModal;

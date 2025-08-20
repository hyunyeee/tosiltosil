import { LOGIN_ERROR_MESSAGE } from "@/constants/ModalMessages";
import AlertModal from "@/components/overlay/modal/AlertModal";

const LoginErrorModal = () => {
  const { title, content } = LOGIN_ERROR_MESSAGE.Invalid;
  return <AlertModal title={title} content={content} />;
};

export default LoginErrorModal;

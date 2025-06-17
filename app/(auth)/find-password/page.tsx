import RequestCodeForm from "@/components/auth/form/RequestCodeForm";
import VerifyCodeForm from "@/components/auth/form/VerifyCodeForm";

const FindPasswordPage = () => {
  const isAuthCodeSent = true;
  return <div>{isAuthCodeSent ? <RequestCodeForm /> : <VerifyCodeForm />}</div>;
};

export default FindPasswordPage;

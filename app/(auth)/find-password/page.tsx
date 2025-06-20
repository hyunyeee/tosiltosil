import RequestCodeForm from "@/components/auth/form/RequestCodeForm";
import VerifyCodeForm from "@/components/auth/form/VerifyCodeForm";

export default function FindPasswordPage() {
  const isAuthCodeSent = true;
  return <div>{isAuthCodeSent ? <RequestCodeForm /> : <VerifyCodeForm />}</div>;
}

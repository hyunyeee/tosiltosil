import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login, sendEmail } from "@/apis/auth/api";

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("로그인 성공", data);
      router.push("/home");
    },
    onError: (error) => {
      console.error("로그인 실패", error);
    },
  });
};

export const useSendEmail = () => {
  return useMutation({
    mutationFn: sendEmail,
    onSuccess: (data) => {
      console.log("인증번호 이메일 전송 성공", data);
    },
    onError: (error) => {
      console.error("인증번호 이메일 전송 실패", error);
    },
  });
};

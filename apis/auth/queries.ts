import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { localLogin, sendEmail, signup, verifyCode } from "@/apis/auth/api";
import {
  LoginPayload,
  SendEmailPayload,
  VerifyCodePayload,
} from "@/apis/auth/types";
import { ApiResponse } from "@/types/api/api";

export const useLogin = () => {
  const router = useRouter();
  return useMutation<ApiResponse<{ memberId: string }>, Error, LoginPayload>({
    mutationFn: localLogin,
    onSuccess: (data) => {
      console.log("로그인 성공", data);
      router.push("/home");
    },
    onError: (error) => {
      console.error("로그인 실패", error);
    },
  });
};

export const useSignup = () => {
  const router = useRouter();
  return useMutation<ApiResponse<{ nickname: string }>, Error, FormData>({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("회원가입 성공", data);
      router.replace("/signup/complete");
    },
    onError: (error) => {
      console.error("회원가입 실패", error);
    },
  });
};

export const useSendEmail = () => {
  return useMutation<ApiResponse<{ email: string }>, Error, SendEmailPayload>({
    mutationFn: sendEmail,
    onSuccess: (data) => {
      console.log("인증코드 이메일 전송 성공", data);
    },
    onError: (error) => {
      console.error("인증코드 이메일 전송 실패", error);
    },
  });
};

export const useVerifyCode = () => {
  return useMutation<ApiResponse<void>, Error, VerifyCodePayload>({
    mutationFn: verifyCode,
  });
};

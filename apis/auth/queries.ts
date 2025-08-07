import { useMutation } from "@tanstack/react-query";
import { login } from "@/apis/auth/api";
import { useRouter } from "next/navigation";

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

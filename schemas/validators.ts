import { z } from "zod";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

export const emailSchema = z
  .string()
  .email({ message: "유효한 이메일 형식이 아닙니다." });

export const codeSchema = z
  .string()
  .regex(/^\d{6}$/, { message: "인증번호는 숫자 6자리여야 합니다." });

const passwordErrorMsg =
  "영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요.";

export const passwordSchema = z
  .string()
  .min(8, { message: passwordErrorMsg })
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/, {
    message: passwordErrorMsg,
  });

export const nicknameSchema = z
  .string()
  .min(2, { message: AUTH_ERROR_MESSAGE.NICKNAME })
  .max(8, { message: AUTH_ERROR_MESSAGE.NICKNAME });

import { z } from "zod";
import {
  emailSchema,
  codeSchema,
  passwordSchema,
  nicknameSchema,
} from "./validators";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signupSchema = z
  .object({
    email: emailSchema,
    code: codeSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: AUTH_ERROR_MESSAGE.CONFIRM_PASSWORD,
    path: ["confirmPassword"],
  });

export const requestCodeSchema = z.object({
  email: emailSchema,
});

export const verifyCodeSchema = z.object({
  code: codeSchema,
});

export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: AUTH_ERROR_MESSAGE.CONFIRM_PASSWORD,
    path: ["confirmPassword"],
  });

export const profileSchema = z.object({
  nickname: nicknameSchema,
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type RequestCodeFormData = z.infer<typeof requestCodeSchema>;
export type VerifyCodeFormData = z.infer<typeof verifyCodeSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;

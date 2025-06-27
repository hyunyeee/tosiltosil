import { z } from "zod";
import { AUTH_ERROR_MESSAGE } from "@/constants/authErrorMessage";

export const emailSchema = z
  .string()
  .email({ message: AUTH_ERROR_MESSAGE.EMAIL });

export const codeSchema = z
  .string()
  .regex(/^\d{6}$/, { message: AUTH_ERROR_MESSAGE.CODE });

export const passwordSchema = z
  .string()
  .min(8, { message: AUTH_ERROR_MESSAGE.PASSWORD })
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/, {
    message: AUTH_ERROR_MESSAGE.PASSWORD,
  });

export const nicknameSchema = z
  .string()
  .min(2, { message: AUTH_ERROR_MESSAGE.NICKNAME })
  .max(8, { message: AUTH_ERROR_MESSAGE.NICKNAME });

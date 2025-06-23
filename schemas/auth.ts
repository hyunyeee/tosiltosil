import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "이메일 양식에 맞지 않습니다. 다시 입력해주세요.",
  }),
  password: z
    .string()
    .min(8, {
      message: "영문,숫자,특수문자를 포함하여 8글자 이상으로 입력해주세요",
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message: "영문,숫자,특수문자를 포함하여 8글자 이상으로 입력해주세요",
    }),
});

export const signupSchema = z
  .object({
    email: z.string().email({ message: "올바른 이메일 형식을 입력해주세요." }),
    code: z
      .string()
      .regex(/^\d{6}$/, { message: "숫자 6자리로 입력해주세요." }),
    password: z
      .string()
      .min(8, {
        message: "영문,숫자,특수문자를 포함하여 8글자 이상으로 입력해주세요",
      })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: "영문,숫자,특수문자를 포함하여 8글자 이상으로 입력해주세요",
      }),
  })
  .extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "입력하신 비밀번호와 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export const requestCodeSchema = z.object({
  email: z.string().email("유효한 이메일 형식이 아닙니다"),
});

export const verifyCodeSchema = z.object({
  code: z.string().regex(/^\d{6}$/, "인증번호는 숫자 6자리여야 합니다"),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "영문,숫자,특수문자를 포함하여 8글자 이상으로 입력해주세요"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "입력하신 비밀번호와 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type RequestCodeFormData = z.infer<typeof requestCodeSchema>;
export type VerifyCodeFormData = z.infer<typeof verifyCodeSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

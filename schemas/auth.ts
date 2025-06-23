import { z } from "zod";

export type LoginFormData = z.infer<typeof loginSchema>;

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
    confirmPassword: z.string({
      required_error:
        "영문,숫자,특수문자를 포함하여 8글자 이상으로 입력해주세요",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "입력하신 비밀번호와 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

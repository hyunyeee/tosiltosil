import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "이메일 양식에 맞지 않습니다. 다시 입력해주세요.",
  }),
  password: z
    .string()
    .min(8, {
      message:
        "영어, 숫자, 특수문자를 모두 포함하여 8글자 이상으로 입력해주세요.",
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message:
        "영어, 숫자, 특수문자를 모두 포함하여 8글자 이상으로 입력해주세요.",
    }),
});

export const signupSchema = z
  .object({
    email: z.string().email({ message: "올바른 이메일 형식을 입력해주세요." }),
    code: z
      .string()
      .regex(/^\d{1,6}$/, { message: "숫자 6자리 이하로 입력해주세요." }),
    password: z
      .string()
      .min(8, {
        message:
          "영어, 숫자, 특수문자를 모두 포함하여 8글자 이상으로 입력해주세요.",
      })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message:
          "영어, 숫자, 특수문자를 모두 포함하여 8글자 이상으로 입력해주세요.",
      }),
    confirmPassword: z.string({
      required_error: "비밀번호를 다시 입력해주세요.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "입력하신 비밀번호와 일치하지 않습니다. 다시 입력해주세요",
  });

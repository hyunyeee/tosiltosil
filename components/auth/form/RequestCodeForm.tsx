"use client";

import EmailInput from "@/components/auth/input/EmailInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { RequestCodeFormData, requestCodeSchema } from "@/schemas/auth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RequestCodeForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestCodeFormData>({
    resolver: zodResolver(requestCodeSchema),
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const onSubmit = (data: RequestCodeFormData) => {
    console.log("인증번호 요청 Form:", data);
    // TODO: 인증번호 요청 API 호출
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <div className="mb-[37px] flex flex-col gap-[78px]">
              <h1 className="title2 mt-[163px] text-center">비밀번호 찾기</h1>
              <EmailInput
                isValid={!!errors.email}
                value={field.value}
                errorMessage={errors.email?.message}
                onInputChange={field.onChange}
                sort="find-password"
              />
            </div>
            <PrimaryButton
              size="main"
              text="인증번호 받기"
              isActive={!!field.value && !errors.email}
            />
          </>
        )}
      />
    </form>
  );
};

export default RequestCodeForm;

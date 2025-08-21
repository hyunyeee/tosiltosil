"use client";

import EmailInput from "@/components/auth/input/EmailInput";
import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { RequestCodeFormData, requestCodeSchema } from "@/schemas/auth";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendAuthCodeEmail } from "@/apis/auth/queries";

interface RequestCodeFormProps {
  onEmailNext: (email: string) => void;
}

const RequestCodeForm = ({ onEmailNext }: RequestCodeFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<RequestCodeFormData>({
    resolver: zodResolver(requestCodeSchema),
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const {
    mutate: sendAuthCodeEmail,
    isError,
    reset: resetMutationState,
  } = useSendAuthCodeEmail();

  const onSubmit = (data: RequestCodeFormData) => {
    sendAuthCodeEmail(
      { email: data.email, purpose: "FORGOT_PASSWORD" },
      {
        onSuccess: (data) => {
          onEmailNext(data.data.email);
        },
        onError: (error) => {
          setError("email", { type: "server", message: error.message });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[37px] flex flex-col gap-[78px]">
        <h1 className="title2 mt-[163px] text-center">비밀번호 찾기</h1>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <EmailInput
              isValid={!errors.email}
              value={field.value}
              errorMessage={errors.email?.message}
              onInputChange={(v) => {
                if (isError) resetMutationState();
                field.onChange(v);
              }}
              sort="find-password"
            />
          )}
        />
      </div>
      <PrimaryButton
        size="main"
        text="인증번호 받기"
        isActive={isValid && !isSubmitting}
      />
    </form>
  );
};

export default RequestCodeForm;

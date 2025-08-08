import { apiClient } from "@/apis/client";
import { ApiResponse } from "@/types/api/api";

import {
  LoginPayload,
  SendEmailPayload,
  VerifyCodePayload,
} from "@/apis/auth/types";

export const login = async (payload: LoginPayload) => {
  return await apiClient.post<ApiResponse<{ memberId: string }>, LoginPayload>(
    "/api/v1/auth/login/local",
    payload
  );
};

export const sendEmail = async (payload: SendEmailPayload) => {
  return await apiClient.post<ApiResponse<{ email: string }>, SendEmailPayload>(
    "/api/v1/auth/email/send",
    payload
  );
};

export const verifyCode = async (payload: VerifyCodePayload) => {
  return await apiClient.post<ApiResponse<void>, VerifyCodePayload>(
    "/api/v1/auth/email/verify",
    payload
  );
};

export const signup = async (
  payload: FormData
): Promise<ApiResponse<{ nickname: string }>> => {
  return await apiClient.post<ApiResponse<{ nickname: string }>, FormData>(
    "/api/v1/auth/signup/local",
    payload
  );
};

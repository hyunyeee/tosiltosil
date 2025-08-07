import { apiClient } from "@/apis/client";
import { ApiResponse } from "@/types/api/api";

import { LoginPayload, SendEmailPayload } from "@/apis/auth/types";

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

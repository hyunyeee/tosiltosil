import { apiClient } from "@/apis/client";
import { ApiResponse } from "@/types/api/api";

import { LoginPayload } from "@/apis/auth/types";

export const login = async (payload: LoginPayload) => {
  return await apiClient.post<ApiResponse<{ memberId: string }>, LoginPayload>(
    "/api/v1/auth/login/local",
    payload
  );
};

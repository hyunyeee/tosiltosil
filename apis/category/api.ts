import { ApiResponse } from "@/types/api/api";
import { apiClient } from "../client";
import type {
  Category,
  CreateCategoryPayload,
  UpdateCategoryPayload,
  UpdateCategoryOrderPayload,
} from "./types";

// GET
export const getCategories = async () => {
  return await apiClient.get<ApiResponse<Category[]>>("/api/v1/categories");
};

export const getCategoryColorsPerDay = async ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  return await apiClient.get<ApiResponse<[]>>(
    `/api/v1/categories/color-per-day?year=${year}&month=${month}`
  );
};

// POST
export const createCategory = async (payload: CreateCategoryPayload) => {
  return await apiClient.post<
    ApiResponse<{ categoryId: number }>,
    CreateCategoryPayload
  >("/api/v1/categories", payload);
};

//  PATCH
export const updateCategory = async ({
  categoryId,
  data,
}: UpdateCategoryPayload) => {
  return await apiClient.patch<
    ApiResponse<{ categoryId: number }>,
    typeof data
  >(`/api/v1/categories/${categoryId}`, data);
};

export const updateCategoryOrder = async ({
  categoryId,
  data,
}: UpdateCategoryOrderPayload) => {
  return await apiClient.patch<
    ApiResponse<{ orderIndex: number }>,
    typeof data
  >(`/api/v1/categories/${categoryId}/change-order`, data);
};

//  DELETE
export const deleteCategory = async (categoryId: number) => {
  return await apiClient.delete<ApiResponse<{ categoryId: number }>>(
    `/api/v1/categories/${categoryId}`
  );
};

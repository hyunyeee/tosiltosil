import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { categoryKeys } from "./keys";
import type {
  Category,
  CreateCategoryPayload,
  UpdateCategoryPayload,
  UpdateCategoryOrderPayload,
} from "./types";
import {
  getCategories,
  getCategoryColorsPerDay,
  createCategory,
  updateCategory,
  updateCategoryOrder,
  deleteCategory,
} from "./api";
import { ApiResponse } from "@/types/api/api";

export const useGetCategories = () => {
  return useQuery<ApiResponse<Category[]>, Error>({
    queryKey: categoryKeys.all,
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

export const useGetCategoryColorsPerDay = ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  return useQuery<ApiResponse<[]>, Error>({
    queryKey: categoryKeys.colorsPerDayByDate(year, month),
    queryFn: () => getCategoryColorsPerDay({ year, month }),
    enabled: !!year && !!month,
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation<
    ApiResponse<{ categoryId: number }>,
    Error,
    CreateCategoryPayload
  >({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.all });
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation<
    ApiResponse<{ categoryId: number }>,
    Error,
    UpdateCategoryPayload
  >({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
    },
  });
};

export const useUpdateCategoryOrder = () => {
  const queryClient = useQueryClient();
  return useMutation<
    ApiResponse<{ orderIndex: number }>,
    Error,
    UpdateCategoryOrderPayload
  >({
    mutationFn: updateCategoryOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation<ApiResponse<{ categoryId: number }>, Error, number>({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryKeys.lists() });
    },
  });
};

import { getRequiredEnv } from "@/utils/env";
import { fetchClient } from "./fetchClient";

const baseURL = getRequiredEnv("NEXT_PUBLIC_API_BASE_URL");
export const apiClient = fetchClient({
  baseURL,
});

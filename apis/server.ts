import { cookies } from "next/headers";
import { fetchClient } from "./fetchClient";
import { getRequiredEnv } from "@/utils/env";

export const serverApiClient = () => {
  const baseURL = getRequiredEnv("API_BASE_URL");
  return fetchClient({
    baseURL,
    defaultHeaders: {
      Cookie: cookies().toString(),
    },
  });
};

import { cookies } from "next/headers";
import { fetchClient } from "./fetchClient";

export const serverApiClient = () => {
  return fetchClient({
    baseURL: process.env.API_BASE_URL!,
    defaultHeaders: {
      Cookie: cookies().toString(),
    },
  });
};

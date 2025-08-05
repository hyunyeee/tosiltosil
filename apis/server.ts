import { cookies } from "next/headers";
import { fetchClient } from "./fetchClient";

export const serverApiClient = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // 값이 없는 경우를 대비한 방어 코드
  if (!baseURL) {
    throw new Error(
      "필수 환경변수가 설정되지 않았습니다: NEXT_PUBLIC_API_BASE_URL"
    );
  }

  return fetchClient({
    baseURL,
    defaultHeaders: {
      Cookie: cookies().toString(),
    },
  });
};

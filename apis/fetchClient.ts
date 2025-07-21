type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface FetchClientOptions {
  baseURL: string;
  defaultHeaders?: Record<string, string>;
}

export function fetchClient({
  baseURL,
  defaultHeaders = {},
}: FetchClientOptions) {
  async function request<TResponse, TBody = undefined>(
    method: Method,
    path: string,
    body?: TBody
  ): Promise<TResponse> {
    const isFormData = body instanceof FormData;

    const headers: Record<string, string> = isFormData
      ? { ...defaultHeaders }
      : {
          "Content-Type": "application/json",
          ...defaultHeaders,
        };
    try {
      const res = await fetch(baseURL + path, {
        method,
        credentials: "include",
        headers,
        body: isFormData ? body : JSON.stringify(body),
      });
      if (!res.ok) {
        const errorPayload = await res.json().catch(() => null);
        throw new Error(errorPayload?.message || res.statusText);
      }

      if (res.status === 204) {
        return undefined as unknown as TResponse;
      }
      return res.json() as Promise<TResponse>;
    } catch (error) {
      // TODO: 에러 구분 추가
      throw error;
    }
  }

  return {
    get: <TResponse>(path: string) => request<TResponse>("GET", path),
    post: <TResponse, TBody>(path: string, body: TBody) =>
      request<TResponse, TBody>("POST", path, body),
    put: <TResponse, TBody>(path: string, body: TBody) =>
      request<TResponse, TBody>("PUT", path, body),
    patch: <TResponse, TBody>(path: string, body: TBody) =>
      request<TResponse, TBody>("PATCH", path, body),
    delete: <TResponse>(path: string) => request<TResponse>("DELETE", path),
  };
}

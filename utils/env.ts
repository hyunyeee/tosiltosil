export const getRequiredEnv = (key: string): string => {
  const baseUrl = process.env[key];
  if (!baseUrl) {
    throw new Error(`필수 환경변수가 설정되지 않았습니다: ${key}`);
  }
  return baseUrl;
};

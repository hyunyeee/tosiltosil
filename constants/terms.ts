export const AGREEMENTS = [
  {
    title: "termsOfService",
    label: "서비스 이용약관 동의",
    version: "0.1.0",
    required: true,
  },
  {
    title: "privacyPolicy",
    label: "개인정보 수집 동의 및 이용 동의",
    version: "0.1.0",
    required: true,
  },
  {
    title: "ageConfirmation",
    label: "만 14세 이상 확인",
    version: "0.1.0",
    required: true,
  },
] as const;

export type AgreementConfig = (typeof AGREEMENTS)[number];

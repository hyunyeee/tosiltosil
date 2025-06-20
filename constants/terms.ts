export interface AgreementConfig {
  id: string;
  label: string;
  required: boolean;
}
export const AGREEMENTS: AgreementConfig[] = [
  {
    id: "termsOfService",
    label: "서비스 이용약관 동의",
    required: true,
  },
  {
    id: "privacyPolicy",
    label: "개인정보 수집 동의 및 이용 동의",
    required: true,
  },
  {
    id: "ageConfirmation",
    label: "만 14세 이상 확인",
    required: true,
  },
];

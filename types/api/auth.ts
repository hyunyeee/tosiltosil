import { AgreementConfig } from "@/constants/terms";

export interface SignupPayload {
  password: string;
  nickname: string;
  terms: Omit<TermAgreement, "label" | "required">[];
}

export type TermAgreement = AgreementConfig & { agreed: boolean };

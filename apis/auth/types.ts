// POST /api/v1/auth/login/local
export interface LoginPayload {
  email: string;
  password: string;
}

// POST /api/v1/auth/email/send
export interface SendEmailPayload {
  email: string;
  purpose: "SIGN_UP";
}

// POST /api/v1/auth/email/verify
export interface VerifyCodePayload {
  email: string;
  authNumber: string;
}

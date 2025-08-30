export const authKeys = {
  all: ["auth"] as const,
  verifyEmail: () => [...authKeys.all, "verify-email"] as const,
  verifyEmailByAddress: (email: string) =>
    [...authKeys.verifyEmail(), email] as const,
};

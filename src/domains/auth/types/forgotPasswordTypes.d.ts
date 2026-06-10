export interface OTPStepProps {
  email: string;
  onVerify: (otp: string) => Promise<boolean>;
  onResend: () => Promise<boolean>;
  loading: boolean;
}

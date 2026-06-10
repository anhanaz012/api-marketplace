"use client";

import EmailStep from "@/domains/auth/components/email-step";
import OTPStep from "@/domains/auth/components/otp-step";
import React from "react";
import { toast } from "sonner";

export type Step = "email" | "otp";

const ForgotPassword = () => {
  const [step, setStep] = React.useState<Step>("email");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSendOtp = async (emailValue: string) => {
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1200));
      setEmail(emailValue);
      setStep("otp");
      toast.success("Verification code sent to your email!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send code. Please try again.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (otpValue: string) => {
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1200));
      toast.success("OTP verified successfully!");
      return true;
    } catch (err) {
      console.error(err);
      toast.error("Invalid code. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1200));
      toast.success("New code sent to your email!");
      return true;
    } catch (err) {
      console.error(err);
      toast.error("Failed to resend code. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  if (step === "otp") {
    return (
      <OTPStep
        email={email}
        onVerify={handleVerifyOtp}
        onResend={handleResendOtp}
        loading={loading}
      />
    );
  }

  return <EmailStep onSendOtp={handleSendOtp} loading={loading} />;
};

export default ForgotPassword;

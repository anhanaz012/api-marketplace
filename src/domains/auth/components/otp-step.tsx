"use client";

import { Icon } from "@/shared/ui";
import Button from "@/shared/ui/button/button";
import React from "react";
import { OTPStepProps } from "../types/forgotPasswordTypes";
import { ErrorField } from "./error-field";
import { useRouter } from "next/navigation";

const OTPStep: React.FC<OTPStepProps> = ({
  email,
  onVerify,
  onResend,
  loading,
}) => {
  // OTP state - 6 digit array
  const [otp, setOtp] = React.useState<string[]>(Array(6).fill(""));
  const [errors, setErrors] = React.useState<{ otp?: string }>({});
  const [resendCooldown, setResendCooldown] = React.useState(0);
  const otpRefs = React.useRef<(HTMLInputElement | null)[]>(
    Array(6).fill(null),
  );
  const router = useRouter();

  // Enable verify button only when all 6 digits are filled
  const isOtpValid = otp.join("").length === 6;

  // Auto-focus first OTP input on mount
  React.useEffect(() => {
    setTimeout(() => otpRefs.current[0]?.focus(), 50);
  }, []);

  // Countdown timer for resend button cooldown
  React.useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(
        () => setResendCooldown(resendCooldown - 1),
        1000,
      );
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  // Handle OTP input change - digits only, auto-advance to next field
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Keep only the last character
    setOtp(newOtp);
    setErrors({});

    // Auto-focus next input when digit is entered
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  // Handle keyboard navigation (backspace, arrow keys)
  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // Clear current box if it has a value
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move to previous box if current is empty
        otpRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  // Handle paste of full 6-digit code
  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;

    const newOtp = Array(6).fill("");
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);

    // Focus the next empty box after paste
    const nextIndex = Math.min(pasted.length, 5);
    otpRefs.current[nextIndex]?.focus();
  };

  // Verify OTP code
  const handleVerifyOtp = async () => {
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      setErrors({ otp: "Please enter all 6 digits" });
      return;
    }

    const success = await onVerify(otpValue);
    if (!success) {
      setOtp(Array(6).fill(""));
      setErrors({ otp: "Invalid code. Please try again." });
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    }
    router.push("/reset-password");
  };

  // Resend OTP with 60-second cooldown
  const handleResend = async () => {
    if (resendCooldown > 0) return;

    setResendCooldown(60); // 60 seconds cooldown
    setOtp(Array(6).fill(""));
    setErrors({});

    const success = await onResend();
    if (success) {
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    } else {
      setResendCooldown(0);
    }
  };

  // Mask email for privacy (e.g., jo***n@example.com)
  const maskedEmail = React.useMemo(() => {
    if (!email) return "";
    const [localPart, domain] = email.split("@");
    if (localPart.length <= 3) return email;
    const maskedLocal = localPart.slice(0, 2) + "***" + localPart.slice(-1);
    return `${maskedLocal}@${domain}`;
  }, [email]);

  return (
    <div className="max-w-md xs:max-sm:max-w-sm xs:max-sm:px-4 mx-auto items-center flex-col flex flex-1 justify-center">
      {/* Email icon header */}
      <button className="bg-primary/10 h-14 w-14 pt-1 rounded-full">
        <Icon name="Envelope" />
      </button>

      <h1 className="text-[40px] sm:max-md:text-2xl xs:max-sm:text-2xl font-medium text-text-primary my-4">
        Check your email
      </h1>

      <p className="text-md text-center text-text-secondary">
        We've sent a 6-digit code to{" "}
        <span className="font-medium text-text-primary">{maskedEmail}</span>.
        Please check your inbox and follow the instructions.
      </p>

      {/* 6-digit OTP input boxes */}
      <ErrorField error={errors.otp} className="my-8 w-full">
        <div className="flex xs:max-sm:grid xs:max-sm:grid-cols-6 gap-3 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                otpRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleOtpKeyDown(index, e)}
              onPaste={handleOtpPaste}
              className={`
                w-14 h-14 xs:max-sm:w-10 xs:max-sm:h-10 text-xl flex text-center font-semibold rounded-xl
                border bg-transparent outline-none
                transition-all duration-150 select-none
                text-text-primary
                ${
                  digit
                    ? "border-text-primary"
                    : "border-stroke dark:border-gray-600"
                }
                focus:border-text-primary focus:ring-2 focus:ring-text-primary/20
                ${errors.otp ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
              `}
            />
          ))}
        </div>
      </ErrorField>

      {/* Verify button */}
      <Button
        type="submit"
        variant={isOtpValid ? "primary" : "secondary"}
        className="w-full"
        onClick={handleVerifyOtp}
        disabled={loading || !isOtpValid}
      >
        {loading ? "Verifying..." : "Verify code"}
      </Button>

      {/* Resend section */}
      <p className="text-text-secondary text-sm mt-6 text-center">
        Still haven't received the code?
      </p>

      <Button
        variant="ghost"
        className="w-fit mx-auto py-3 custom-shadow mt-3"
        onClick={handleResend}
        disabled={loading || resendCooldown > 0}
      >
        Click here to{" "}
        <span className="text-text-primary">
          {resendCooldown > 0 ? `Resend (${resendCooldown}s)` : "Resend"}
        </span>
      </Button>
    </div>
  );
};

export default OTPStep;

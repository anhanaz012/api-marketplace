"use client";
import { Icon } from "@/shared/ui";
import Button from "@/shared/ui/button/button";
import Input from "@/shared/ui/input/input";
import Logo from "@/shared/ui/logo/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

type Step = "email" | "otp";

const ForgotPassword = () => {
  const [step, setStep] = React.useState<Step>("email");
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState<{ email?: string; otp?: string }>(
    {},
  );
  const [otp, setOtp] = React.useState<string[]>(Array(6).fill(""));
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const otpRefs = React.useRef<(HTMLInputElement | null)[]>(
    Array(6).fill(null),
  );

  // Real-time validation for email step
  const isEmailValid = (() => {
    if (!email.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
    return true;
  })();

  // Real-time validation for OTP step
  const isOtpValid = (() => {
    return otp.join("").length === 6;
  })();

  // Auto-focus first OTP box when step changes
  React.useEffect(() => {
    if (step === "otp") {
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    }
  }, [step]);

  const validateEmail = (): boolean => {
    if (!email.trim()) {
      setErrors({ email: "Email is required" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleNext = async () => {
    if (!validateEmail()) return;

    try {
      setLoading(true);
      // TODO: call API to send OTP
      await new Promise((res) => setTimeout(res, 1200));
      setStep("otp");
      toast.success("Verification code sent to your email!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // digits only

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // keep only last char
    setOtp(newOtp);
    setErrors({});

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // Clear current box
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move to previous box
        otpRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

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

    const nextIndex = Math.min(pasted.length, 5);
    otpRefs.current[nextIndex]?.focus();
  };

  const handleVerifyOtp = async () => {
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      setErrors({ otp: "Please enter all 6 digits" });
      return;
    }

    try {
      setLoading(true);
      // TODO: call verify OTP API
      await new Promise((res) => setTimeout(res, 1200));
      toast.success("OTP verified successfully!");
      router.push("/reset-password");
    } catch (err) {
      console.error(err);
      toast.error("Invalid code. Please try again.");
      setOtp(Array(6).fill(""));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setLoading(true);
      setOtp(Array(6).fill(""));
      setErrors({});
      // TODO: call resend OTP API
      await new Promise((res) => setTimeout(res, 1200));
      toast.success("New code sent to your email!");
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
    } catch (err) {
      console.error(err);
      toast.error("Failed to resend code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── OTP Step ──────────────────────────────────────────────
  if (step === "otp") {
    return (
      <div className="max-w-md mx-auto items-center flex-col flex flex-1 justify-center">
        <button className="bg-primary/10 h-14 w-14 pt-1 rounded-full">
          <Icon name="Envelope" />
        </button>
        <h1 className="text-[40px] font-medium text-text-primary my-4">
          Check your email
        </h1>
        <p className="text-md text-center text-text-secondary">
          We've sent a 6-digit code to your email. Please check your inbox and
          follow the instructions.
        </p>

        {/* OTP Boxes */}
        <div className="my-8 flex gap-3 justify-center">
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
                w-14 h-14 text-xl flex text-center font-semibold rounded-xl
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

        {errors.otp && (
          <p className="text-red-500 text-xs -mt-4 mb-4">{errors.otp}</p>
        )}

        <Button
          type="submit"
          variant={isOtpValid ? "primary" : "secondary"}
          className="w-full"
          onClick={handleVerifyOtp}
          disabled={loading || !isOtpValid}
        >
          {loading ? "Verifying..." : "Verify code"}
        </Button>

        <p className="text-text-secondary text-sm mt-6 text-center">
          Still haven't received the code?
        </p>

        <Button
          variant="ghost"
          className="w-fit mx-auto py-3 custom-shadow mt-3"
          onClick={handleResend}
          disabled={loading}
        >
          Click here to <span className="text-text-primary">Resend</span>
        </Button>
      </div>
    );
  }

  // ── Email Step ────────────────────────────────────────────
  return (
    <div className="max-w-md mx-auto items-center flex-col flex flex-1 justify-center">
      <button className="bg-primary/10 h-14 w-14 pt-1 rounded-full">
        <Icon name="Envelope" />
      </button>
      <h1 className="text-[40px] font-medium text-text-primary my-4">
        Forgot Password?
      </h1>
      <p className="text-md text-center text-text-secondary">
        Enter your email address and we'll send you a 6-digit code to reset your
        password.
      </p>
      <div className="my-8 w-full">
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors({});
          }}
          onKeyDown={(e) => e.key === "Enter" && isEmailValid && handleNext()}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-2">{errors.email}</p>
        )}
      </div>
      <Button
        type="submit"
        variant={isEmailValid ? "primary" : "secondary"}
        className="w-full"
        onClick={handleNext}
        disabled={loading || !isEmailValid}
      >
        {loading ? "Sending..." : "Next"}
      </Button>
      <Button variant="ghost" className="w-fit mx-auto py-3 custom-shadow mt-6">
        <Link href="login-signup">
          Back to <span className="text-text-primary">Sign in</span>
        </Link>
      </Button>
    </div>
  );
};

export default ForgotPassword;

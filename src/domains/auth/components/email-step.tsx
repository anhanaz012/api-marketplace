"use client";

import { Icon, Logo } from "@/shared/ui";
import Button from "@/shared/ui/button/button";
import Input from "@/shared/ui/input/input";
import Link from "next/link";
import React from "react";
import { ErrorField } from "./error-field";

interface EmailStepProps {
  onSendOtp: (email: string) => Promise<void>;
  loading: boolean;
}

const EmailStep: React.FC<EmailStepProps> = ({ onSendOtp, loading }) => {
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState<{ email?: string }>({});

  // Enable Next button only when email is valid
  const isEmailValid = (() => {
    if (!email.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
    return true;
  })();

  // Validate email format before proceeding
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

  // Send OTP to the provided email
  const handleNext = async () => {
    if (!validateEmail()) return;
    await onSendOtp(email);
  };

  // Submit on Enter key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isEmailValid) {
      handleNext();
    }
  };

  return (
    <div className="max-w-md xs:max-sm:max-w-sm xs:max-sm:px-4 mx-auto items-center flex-col flex flex-1 justify-center">
      {/* Email icon header */}

      <Logo />

      <h1 className="text-[40px] sm:max-md:text-2xl xs:max-sm:text-2xl font-medium text-text-primary my-4">
        Forgot Password?
      </h1>

      <p className="text-md text-center text-text-secondary">
        Enter your email address and we'll send you a 6-digit code to reset your
        password.
      </p>

      {/* Email input field */}
      <ErrorField error={errors.email} className="my-8 w-full">
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors({}); // Clear error on typing
          }}
          onKeyDown={handleKeyDown}
        />
      </ErrorField>

      {/* Next button */}
      <Button
        type="submit"
        variant={isEmailValid ? "primary" : "secondary"}
        className="w-full"
        onClick={handleNext}
        disabled={loading || !isEmailValid}
      >
        {loading ? "Sending..." : "Next"}
      </Button>

      {/* Back to sign in link */}
      <Button variant="ghost" className="w-fit mx-auto py-3 custom-shadow mt-6">
        <Link href="login">
          Back to <span className="text-text-primary">Sign in</span>
        </Link>
      </Button>
    </div>
  );
};

export default EmailStep;

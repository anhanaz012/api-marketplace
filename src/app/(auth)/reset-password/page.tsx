"use client";
import BackButton from "@/domains/auth/components/back-btn";
import { ErrorField } from "@/domains/auth/components/error-field";
import { Icon } from "@/shared/ui";
import Button from "@/shared/ui/button/button";
import Input from "@/shared/ui/input/input";
import { validateResetPassword } from "@/utils/validator";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const ResetPassword = () => {
  // Form state
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [errors, setErrors] = React.useState<{
    password?: string;
    confirmPassword?: string;
  }>({});
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  // Enable confirm button only when passwords are valid and match
  const isFormValid = (() => {
    if (!password || password.length < 8) return false;
    if (!confirmPassword) return false;
    if (password !== confirmPassword) return false;
    return true;
  })();

  // Handle password reset confirmation
  const handleConfirm = async () => {
    if (!validateResetPassword({ password, confirmPassword, setErrors }))
      return;
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1200));
      toast.success("Password reset successfully!");
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Back button - returns to sign in page */}
      <BackButton />

      <div className="max-w-md xs:max-sm:w-full xs:max-sm:px-4 xs:max-sm:text-center mx-auto items-center flex-col flex flex-1 justify-center">
        {/* Lock icon - visual header */}
        <button className="bg-primary/10 h-14 w-14 pt-1 rounded-full">
          <Icon name="Lock" />
        </button>

        <h1 className="text-[40px] my-4 xs:max-md:text-2xl font-medium text-text-primary mb-4">
          Set a New Password
        </h1>

        <p className="text-md xs:max-sm:max-w-xs text-center text-text-secondary">
          Reset your access with a unique password to keep your data safe and
          private.
        </p>

        {/* Password input fields */}
        <div className="my-8 w-full flex flex-col gap-8">
          <ErrorField error={errors.password}>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                // Clear error when user starts typing
                if (errors.password)
                  setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && isFormValid && handleConfirm()
              }
              rightIcon={<Icon name={showPassword ? "EyeOff" : "Eye"} />}
              onRightIconClick={() => setShowPassword((v) => !v)}
            />
          </ErrorField>

          <ErrorField error={errors.confirmPassword}>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                // Clear error when user starts typing
                if (errors.confirmPassword)
                  setErrors((prev) => ({
                    ...prev,
                    confirmPassword: undefined,
                  }));
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && isFormValid && handleConfirm()
              }
              rightIcon={<Icon name={showConfirmPassword ? "EyeOff" : "Eye"} />}
              onRightIconClick={() => setShowConfirmPassword((v) => !v)}
            />
          </ErrorField>
        </div>

        {/* Confirm button - disabled while loading or invalid */}
        <Button
          type="submit"
          variant={isFormValid ? "primary" : "secondary"}
          className="w-full"
          onClick={handleConfirm}
          disabled={loading || !isFormValid}
        >
          {loading ? "Saving..." : "Confirm"}
        </Button>
      </div>
    </>
  );
};

export default ResetPassword;

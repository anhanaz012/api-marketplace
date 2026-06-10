"use client";
import { Icon } from "@/shared/ui";
import Button from "@/shared/ui/button/button";
import Input from "@/shared/ui/input/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const ResetPassword = () => {
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

  // Real-time validation
  const isFormValid = (() => {
    if (!password || password.length < 8) return false;
    if (!confirmPassword) return false;
    if (password !== confirmPassword) return false;
    return true;
  })();

  const validate = (): boolean => {
    const newErrors: { password?: string; confirmPassword?: string } = {};

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = async () => {
    if (!validate()) return;

    try {
      setLoading(true);
      // TODO: call reset password API
      await new Promise((res) => setTimeout(res, 1200));
      toast.success("Password reset successfully!");
      router.push("/login-signup");
    } catch (err) {
      console.error(err);
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full p-10 flex justify-end">
        <Button
          variant="light"
          className="w-fit bg-primary/20 py-2 px-4 custom-shadow"
        >
          <Link href="/login-signup">Back to Sign in</Link>
        </Button>
      </div>
      <div className="max-w-md mx-auto items-center flex-col flex flex-1 justify-center">
        {/* Back to Sign in — top right, matching the design screenshot */}

        {/* Lock icon */}
        <button className="bg-primary/10 h-14 w-14 pt-1 rounded-full">
          <Icon name="Lock" />
        </button>

        <h1 className="text-[40px] font-medium text-text-primary my-4">
          Set a New Password
        </h1>

        <p className="text-md text-center text-text-secondary">
          Enter a new password for your account.
        </p>

        {/* Inputs */}
        <div className="my-8 w-full flex flex-col gap-4">
          <div>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password)
                  setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && isFormValid && handleConfirm()
              }
              rightIcon={<Icon name={showPassword ? "EyeOff" : "Eye"} />}
              onRightIconClick={() => setShowPassword((v) => !v)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-2">{errors.password}</p>
            )}
          </div>

          <div>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-2">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

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

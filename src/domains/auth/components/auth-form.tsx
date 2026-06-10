"use client";

import { Icon } from "@/shared/ui";
import Button from "@/shared/ui/button/button";
import Checkbox from "@/shared/ui/checkbox/checkbox";
import Input from "@/shared/ui/input/input";
import { validate } from "@/utils/validator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { AuthMode, FormErrors, FormState } from "../types/formTypes";

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  terms: false,
};

const SocialAuth = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        leftIcon={<Icon name="Google" />}
        variant="ghost"
        className="w-full border-2 border-secondary"
      >
        Google
      </Button>
      <Button
        leftIcon={<Icon name="Github" />}
        variant="ghost"
        className="w-full border-2 border-secondary"
      >
        Github
      </Button>
    </div>
  );
};

const RegisterWith = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-0.5 w-full bg-linear-to-r from-transparent to-[#C3C3C3]" />
      <p className="min-w-fit text-text-secondary">Sign in with</p>
      <div className="h-0.5 w-full bg-linear-to-l from-transparent to-[#C3C3C3]" />
    </div>
  );
};

export default function AuthForm() {
  const [mode, setMode] = useState<AuthMode>("signup");
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isSignup = mode === "signup";

  const setField = (field: keyof FormState, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Real-time validation - runs whenever form or mode changes
  const isValidated = (() => {
    // For login, only email and password are required
    if (!isSignup) {
      return form.email.trim() !== "" && form.password.trim() !== "";
    }
    // For signup, all fields are required
    return (
      form.firstName.trim() !== "" &&
      form.lastName.trim() !== "" &&
      form.email.trim() !== "" &&
      form.password.trim() !== "" &&
      form.terms === true
    );
  })();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run validation which sets errors
    const isValid = validate({ isSignup, form, setErrors });

    if (!isValid) return;

    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1200));
      router.push("/");
      toast.success(isSignup ? "Account created!" : "Logged in!");
      setForm(initialState);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 px-16 justify-center overflow-y-auto flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[40px] font-medium text-text-primary mb-4">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h1>

        <p className="text-md text-text-secondary">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-text-primary cursor-pointer"
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-text-primary cursor-pointer"
              >
                Sign up
              </button>
            </>
          )}
        </p>
      </div>

      {/* Form - added onSubmit handler */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        {/* Signup-only fields */}
        {isSignup && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) => setField("firstName", e.target.value)}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-2">{errors.firstName}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => setField("lastName", e.target.value)}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-2">{errors.lastName}</p>
              )}
            </div>
          </div>
        )}

        <div>
          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-2">{errors.email}</p>
          )}
        </div>

        <div>
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onRightIconClick={() => setShowPassword((prev) => !prev)}
            rightIcon={
              showPassword ? (
                <Icon name="EyeOff" size={20} className="text-[#9f9f9f]" />
              ) : (
                <Icon name="Eye" size={20} className="text-[#9f9f9f]" />
              )
            }
            onChange={(e) => setField("password", e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-2">{errors.password}</p>
          )}
        </div>

        {!isSignup && (
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        )}

        {/* Signup-only checkbox */}
        {isSignup && (
          <div>
            <div className="flex gap-2 items-center">
              <Checkbox
                checked={form.terms}
                onChange={(val: boolean) => setField("terms", val)}
              />
              <span className="text-text-secondary">
                I agree to the Terms & Conditions
              </span>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-xs mt-2">{errors.terms}</p>
            )}
          </div>
        )}

        <Button
          type="submit"
          variant={isValidated ? "primary" : "secondary"}
          className="w-full"
          disabled={loading}
        >
          {loading ? "Please wait..." : isSignup ? "Create account" : "Sign in"}
        </Button>

        <RegisterWith />
        <SocialAuth />
      </form>
    </div>
  );
}

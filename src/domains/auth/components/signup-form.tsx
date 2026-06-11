"use client";

import { Icon } from "@/shared/ui";
import Button from "@/shared/ui/button/button";
import Checkbox from "@/shared/ui/checkbox/checkbox";
import Input from "@/shared/ui/input/input";
import { validateSignup } from "@/utils/validator";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { FormErrors, SignupFormState } from "../types/formTypes";
import { SocialAuth } from "./social-auth";
import { ErrorField } from "./error-field";

const initialState: SignupFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  terms: false,
};

export default function SignupForm() {
  // Form state management
  const [form, setForm] = useState<SignupFormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Update field and clear its error
  const setField = (field: keyof SignupFormState, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Enable submit only when all fields filled and terms accepted
  const isValidated =
    form.firstName.trim() !== "" &&
    form.lastName.trim() !== "" &&
    form.email.trim() !== "" &&
    form.password.trim() !== "" &&
    form.terms === true;

  // Handle signup form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateSignup({ form, setErrors })) return;

    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1200));
      router.push("/");
      toast.success("Account created successfully!");
      setForm(initialState);
    } catch (err) {
      console.error(err);
      toast.error("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Name fields row */}
      <div className="grid grid-cols-2 xs:max-sm:grid-cols-1 xs:max-sm:gap-8 gap-4">
        <ErrorField error={errors.firstName}>
          <Input
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => setField("firstName", e.target.value)}
          />
        </ErrorField>

        <ErrorField error={errors.lastName}>
          <Input
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => setField("lastName", e.target.value)}
          />
        </ErrorField>
      </div>

      {/* Email input field */}
      <ErrorField error={errors.email}>
        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
        />
      </ErrorField>

      {/* Password input with toggle visibility */}
      <ErrorField error={errors.password}>
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
      </ErrorField>

      {/* Terms and conditions checkbox */}
      <ErrorField error={errors.terms}>
        <div className="flex gap-2 items-center">
          <Checkbox
            checked={form.terms}
            onChange={(val: boolean) => setField("terms", val)}
          />
          <span className="text-muted xs:max-sm:text-sm xs:max-sm:text-left">
            I agree to the{" "}
            <a href="#" className="text-base cursor-pointer">
              Terms & Conditions{" "}
            </a>
          </span>
        </div>
      </ErrorField>

      {/* Submit button - disabled while loading */}
      <Button
        type="submit"
        variant={isValidated ? "primary" : "secondary"}
        className="w-full"
        disabled={loading}
      >
        {loading ? "Please wait..." : "Create account"}
      </Button>

      {/* Social authentication options */}
      <SocialAuth />
    </form>
  );
}

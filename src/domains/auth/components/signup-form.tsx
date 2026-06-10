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

      {/* Email input field */}
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

      {/* Password input with toggle visibility */}
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

      {/* Terms and conditions checkbox */}
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

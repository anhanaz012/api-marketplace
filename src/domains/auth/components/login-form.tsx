// "use client";
// import { Icon } from "@/shared/ui";
// import Button from "@/shared/ui/button/button";
// import Input from "@/shared/ui/input/input";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { toast } from "sonner";
// import { FormErrors, LoginFormState } from "../types/formTypes";
// import { SocialAuth } from "./social-auth";
// import { vaidateLogin } from "@/utils/validator";

// export default function LoginForm() {
//   // Form state management
//   const [form, setForm] = useState<LoginFormState>({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // Update form field and clear its error
//   const setField = (field: keyof LoginFormState, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     setErrors((prev) => ({ ...prev, [field]: "" }));
//   };

//   // Check if both fields have content
//   const isValidated = form.email.trim() !== "" && form.password.trim() !== "";

//   // Handle login form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validate form before submitting
//     if (!vaidateLogin({ form, setErrors })) return;

//     try {
//       setLoading(true);
//       await new Promise((res) => setTimeout(res, 1200)); // Simulate API call
//       router.push("/"); // Redirect to home on success
//       toast.success("Logged in successfully!");
//       setForm({ email: "", password: "" }); // Reset form
//     } catch (err) {
//       console.error(err);
//       toast.error("Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-8">
//       {/* Email input field */}
//       <div>
//         <Input
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setField("email", e.target.value)}
//         />
//         {errors.email && (
//           <p className="text-red-500 text-xs mt-2">{errors.email}</p>
//         )}
//       </div>

//       {/* Password input with toggle visibility */}
//       <div>
//         <Input
//           placeholder="Password"
//           type={showPassword ? "text" : "password"}
//           value={form.password}
//           onRightIconClick={() => setShowPassword((prev) => !prev)}
//           rightIcon={
//             showPassword ? (
//               <Icon name="EyeOff" size={20} className="text-[#9f9f9f]" />
//             ) : (
//               <Icon name="Eye" size={20} className="text-[#9f9f9f]" />
//             )
//           }
//           onChange={(e) => setField("password", e.target.value)}
//         />
//         {errors.password && (
//           <p className="text-red-500 text-xs mt-2">{errors.password}</p>
//         )}
//         {/* Forgot password link */}
//         <div className="text-right mt-2">
//           <Link
//             href="/forgot-password"
//             className="text-xs text-base hover:text-primary"
//           >
//             Forgot password?
//           </Link>
//         </div>
//       </div>

//       {/* Submit button - disabled while loading */}
//       <Button
//         type="submit"
//         variant={isValidated ? "primary" : "secondary"}
//         className="w-full"
//         disabled={loading}
//       >
//         {loading ? "Please wait..." : "Sign in"}
//       </Button>

//       {/* Social authentication options */}
//       <SocialAuth />
//     </form>
//   );
// }

"use client";
import { Icon } from "@/shared/ui";
import Button from "@/shared/ui/button/button";
import Input from "@/shared/ui/input/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { FormErrors, LoginFormState } from "../types/formTypes";
import { SocialAuth } from "./social-auth";
import { vaidateLogin } from "@/utils/validator";
import { ErrorField } from "./error-field";

export default function LoginForm() {
  // Form state management
  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Update form field and clear its error
  const setField = (field: keyof LoginFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Check if both fields have content
  const isValidated = form.email.trim() !== "" && form.password.trim() !== "";

  // Handle login form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submitting
    if (!vaidateLogin({ form, setErrors })) return;

    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1200)); // Simulate API call
      router.push("/"); // Redirect to home on success
      toast.success("Logged in successfully!");
      setForm({ email: "", password: "" }); // Reset form
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Email input field */}
      <ErrorField error={errors.email}>
        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
        />
      </ErrorField>

      <div>
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
        {/* Forgot password link */}
        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-xs text-base hover:text-primary"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      {/* Submit button - disabled while loading */}
      <Button
        type="submit"
        variant={isValidated ? "primary" : "secondary"}
        className="w-full"
        disabled={loading}
      >
        {loading ? "Please wait..." : "Sign in"}
      </Button>

      {/* Social authentication options */}
      <SocialAuth />
    </form>
  );
}

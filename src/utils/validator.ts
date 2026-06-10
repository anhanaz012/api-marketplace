import { FormErrors } from "@/domains/auth/types/formTypes";

export const validate = ({
  isSignup,
  form,
  setErrors,
}: {
  isSignup: boolean;
  form: any;
  setErrors: any;
}): boolean => {
  const newErrors: FormErrors = {};

  if (isSignup) {
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.terms) newErrors.terms = "You must accept terms";
  }

  if (!form.email.trim()) newErrors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(form.email))
    newErrors.email = "Invalid email";

  if (!form.password.trim()) newErrors.password = "Password is required";
  else if (form.password.length < 6) newErrors.password = "Min 6 characters";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

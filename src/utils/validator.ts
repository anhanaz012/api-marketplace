import {
  FormErrors,
  LoginFormState,
  SignupFormState,
} from "@/domains/auth/types/formTypes";

export const validateSignup = ({
  form,
  setErrors,
}: {
  form: SignupFormState;
  setErrors: any;
}): boolean => {
  const newErrors: FormErrors = {};

  if (!form.firstName.trim()) {
    newErrors.firstName = "First name is required";
  }

  if (!form.lastName.trim()) {
    newErrors.lastName = "Last name is required";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (!form.password.trim()) {
    newErrors.password = "Password is required";
  } else if (form.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  } else if (!/(?=.*[A-Z])(?=.*[0-9])/.test(form.password)) {
    newErrors.password =
      "Password must contain at least one uppercase letter and one number";
  }

  if (!form.terms) {
    newErrors.terms = "You must agree to the Terms & Conditions";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

export const vaidateLogin = ({
  form,
  setErrors,
}: {
  form: LoginFormState;
  setErrors: any;
}): boolean => {
  const newErrors: FormErrors = {};

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (!form.password.trim()) {
    newErrors.password = "Password is required";
  } else if (form.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

export const validateResetPassword = ({
  password,
  confirmPassword,
  setErrors,
}: {
  password: string;
  confirmPassword: string;
  setErrors: any;
}): boolean => {
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

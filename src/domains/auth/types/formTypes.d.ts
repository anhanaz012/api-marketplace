export type AuthMode = "login" | "signup";

export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
};

export type FormErrors = Partial<Record<keyof FormState, string>>;

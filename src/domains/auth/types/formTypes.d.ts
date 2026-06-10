export type AuthMode = "login" | "signup";

export type FormErrors = Partial<Record<keyof FormState, string>>;

export interface SignupFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}
export interface LoginFormState {
  email: string;
  password: string;
}

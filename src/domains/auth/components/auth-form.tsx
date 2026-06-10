"use client";

import { useState } from "react";
import { AuthMode } from "../types/formTypes";
import SignupForm from "./signup-form";
import LoginForm from "./login-form";

export default function AuthForm() {
  const [mode, setMode] = useState<AuthMode>("signup");

  return (
    <div className="w-1/2 xs:max-lg:py-10 xs:max-lg:w-full sm:max-lg:mx-auto sm:max-lg:max-w-xl px-16 lg:max-xl:px-8 xs:max-sm:px-4 justify-center overflow-y-auto flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[40px] sm:max-md:text-2xl xs:max-sm:text-2xl font-medium text-text-primary mb-4">
          {mode === "signup" ? "Create an Account" : "Welcome Back"}
        </h1>

        <p className="text-md text-text-secondary">
          {mode === "signup" ? (
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
              Don't have an account?{" "}
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

      {/* Dynamic Form Rendering */}
      {mode === "signup" ? <SignupForm /> : <LoginForm />}
    </div>
  );
}

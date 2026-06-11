"use client";

import { SuccessPage } from "@/shared/ui";

export default function ResetPasswordSuccessPage() {
  return (
    <SuccessPage
      title="Password Reset Successfully!"
      message="Your password has been successfully reset. You can now log in with your new password."
      actionBtnText="Go to Login"
      redirectPath="/login"
    />
  );
}

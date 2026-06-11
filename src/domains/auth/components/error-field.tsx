// shared/ui/error-field/error-field.tsx
import { ReactNode } from "react";
import { Icon } from "@/shared/ui";

interface ErrorFieldProps {
  children: ReactNode;
  error?: string;
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  className?: string;
  errorClassName?: string;
}

export function ErrorField({
  children,
  error,
  showIcon = true,
  iconPosition = "left",
  className = "",
  errorClassName = "",
}: ErrorFieldProps) {
  return (
    <div className={className}>
      {children}
      {error && (
        <div
          className={`flex items-center gap-1 text-red-500 text-xs mt-2 ${errorClassName}`}
        >
          {showIcon && iconPosition === "left" && (
            <Icon
              name="AlertCircle"
              size={14}
              className="shrink-0 text-red-500"
            />
          )}
          <span>{error}</span> {/* ← not <p>, no default margins */}
          {showIcon && iconPosition === "right" && (
            <Icon
              name="AlertCircle"
              size={14}
              className="shrink-0 text-red-500"
            />
          )}
        </div>
      )}
    </div>
  );
}

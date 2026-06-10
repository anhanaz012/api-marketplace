import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
}

export default function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconClick,
  className = "",
  ...props
}: InputProps) {
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!rightIcon;

  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 block text-sm text-gray-600">{label}</label>
      )}

      <div className="relative w-full">
        {hasLeftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        <input
          {...props}
          className={`
            w-full
            border-0 
            px-4
            border-b-2
            border-stroke
            bg-transparent
            py-2
            outline-none
            transition
            focus:border-primary
            placeholder:text-text-secondary
            ${hasLeftIcon ? "pl-10" : ""}
            ${hasRightIcon ? "pr-10" : ""}
            ${error ? "border-red-500 focus:border-red-500" : ""}
            ${className}
          `}
        />

        {hasRightIcon && (
          <div
            onClick={onRightIconClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {rightIcon}
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

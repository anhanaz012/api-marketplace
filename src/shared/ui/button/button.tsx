import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  children,
  leftIcon,
  rightIcon,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center transition-all duration-300 justify-center cursor-pointer gap-2 rounded-lg p-4 font-medium transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light",
    secondary: "bg-secondary text-white hover:bg-gray-300",
    ghost: "bg-transparent text-text-secondary hover:bg-primary-light",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}

      <span>{children}</span>

      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}

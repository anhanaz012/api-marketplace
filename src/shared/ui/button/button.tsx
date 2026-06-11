import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  borderRounded?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "light" | "primaryOutline";
}

export default function Button({
  children,
  leftIcon,
  rightIcon,
  borderRounded = false,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = `inline-flex items-center transition-all duration-300 justify-center cursor-pointer gap-2 ${borderRounded ? "rounded-full" : "rounded-md"} p-4 font-medium transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`;

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-gray-300",
    primaryOutline:
      "bg-transparent border border-primary hover:border-stroke hover:text-text-secondary text-primary hover:bg-primary/20",
    light:
      "bg-primary/10 text-primary hover:bg-primary/20 shadow-none! font-normal! text-sm",
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

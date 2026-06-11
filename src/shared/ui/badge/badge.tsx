"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const Badge = ({ children, onClick, href }: BadgeProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`gradient-btn cursor-pointer max-w-fit flex rounded-full`}
    >
      <span className="gradient-text text-sm">{children}</span>
    </button>
  );
};

export default Badge;

"use client";

import { HEADER_HEIGHT, navItems } from "@/constants/header.constants";
import { Button } from "@/shared/ui";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  isActive: (href: string) => boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const MobileMenu = ({
  isOpen,
  isActive,
  onClose,
  onNavigate,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 bg-white z-40 md:hidden shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          top: HEADER_HEIGHT,
          maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
          overflowY: "auto",
        }}
      >
        <div className="flex flex-col p-5 space-y-6">
          <nav
            className="flex flex-col text-center text-gray"
            aria-label="Mobile Navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className={`py-3 transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted hover:text-base"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="border-t border-gray-200" />

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="primaryOutline"
              borderRounded
              onClick={() => onNavigate("/login")}
              className="py-2.5 text-sm font-normal w-full"
            >
              Sign in
            </Button>
            <Button
              variant="primary"
              borderRounded
              onClick={() => onNavigate("/signup")}
              className="py-2.5 text-sm font-normal w-full"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 z-30 md:hidden"
        onClick={onClose}
      />
    </>
  );
};

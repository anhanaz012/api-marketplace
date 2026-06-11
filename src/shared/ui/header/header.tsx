"use client";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import Logo from "../logo/logo";

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-red-400 items-center justify-between flex w-full shadow-md">
      {/* Logo */}
      <Logo />
      {/* Primary Navigation */}
      <nav aria-label="Primary Navigation">
        <ul className="flex items-center gap-6 text-text-primary">
          <li>
            <a
              href="/"
              className="hover:text-text-secondary cursor-pointer transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/apis"
              className="hover:text-text-secondary cursor-pointer transition-colors"
            >
              Public Hub
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-text-secondary cursor-pointer transition-colors"
            >
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* Authentication Actions */}
      <div className="flex items-center gap-3">
        <Button
          variant="primaryOutline"
          borderRounded
          onClick={() => {
            router.push("/login");
          }}
          className="py-2 text-sm px-6 font-normal"
        >
          Sign in
        </Button>
        <Button
          variant="primary"
          borderRounded
          onClick={() => {
            router.push("/signup");
          }}
          className="py-2 text-sm px-6 font-normal"
        >
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;

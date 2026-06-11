"use client";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import Logo from "../logo/logo";

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" aria-label="Go to homepage">
          <Logo />
        </a>

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
                href="/docs"
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
              router.push("/signin");
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
      </div>
    </header>
  );
};

export default Header;

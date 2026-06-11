"use client";
import React from "react";
import Button from "../button/button";
import Logo from "../logo/logo";

const Header = () => {
  const [activeTab, setActiveTab] = React.useState("home");

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" aria-label="Go to homepage">
          <Logo />
        </a>

        {/* Primary Navigation */}
        <nav aria-label="Primary Navigation">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="/"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/apis"
                className="text-gray-700 hover:text-black transition-colors"
              >
                Public Hub
              </a>
            </li>
            <li>
              <a
                href="/docs"
                className="text-gray-700 hover:text-black transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Authentication Actions */}
        <div className="flex items-center gap-3">
          <Button variant="secondary">Log In</Button>
          <Button variant="primary">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  const onLogoClick = () => router.push("/");
  return (
    <>
      <button
        onClick={onLogoClick}
        className="gradient-btn max-w-fit mx-auto flex rounded-full px-4 py-0"
      >
        <span className="gradient-text">API Market</span>
      </button>
    </>
  );
};

export default Logo;

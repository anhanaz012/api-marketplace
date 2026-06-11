"use client";

import slide1 from "@/assets/images/slider/slide1.png";
import slide2 from "@/assets/images/slider/slide2.png";
import LoginForm from "@/domains/auth/components/login-form";
import AutoSlider from "@/domains/auth/components/slider";

export default function LoginScreen() {
  const slides = [slide1, slide2, slide1];
  return (
    <div className="flex h-screen xs:max-lg:h-auto p-5">
      <AutoSlider slides={slides} autoSlideInterval={5000} />
      <section className="w-1/2 xs:max-lg:py-10 xs:max-sm:text-center py-0 xs:max-lg:w-full sm:max-lg:mx-auto sm:max-lg:max-w-xl px-16 lg:max-xl:px-8 xs:max-sm:px-4 overflow-y-auto xs:max-sm:overflow-auto flex flex-col">
        <div className="my-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-[40px] sm:max-md:text-2xl xs:max-sm:text-2xl font-medium text-base mb-4">
              Welcome Back
            </h1>
            <p className="text-md xs:max-sm:max-w-xs text-muted">
              Don't have an account?{" "}
              <a href="/signup" className="text-base cursor-pointer">
                Sign up
              </a>
            </p>
          </div>
          {/* Login Form */}
          <LoginForm />
        </div>
      </section>
    </div>
  );
}

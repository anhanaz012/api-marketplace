"use client";

import { Icon } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AutoSliderProps } from "../types/sliderTypes";

export default function AutoSlider({
  slides,
  autoSlideInterval = 4000,
}: AutoSliderProps) {
  const [current, setCurrent] = useState(0);

  // Auto-advance slides every interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoSlideInterval]);

  return (
    <div className="relative xs:max-lg:hidden w-1/2 overflow-hidden rounded-2xl">
      {/* Fixed button - always visible on top of slides */}
      <div className="absolute right-5 top-5 z-20">
        <Link
          href="/"
          className="rounded-full flex items-center justify-center px-4 py-3.5 gap-2 bg-[#D9D9D980]/50 text-white text-sm font-normal backdrop-blur"
        >
          <span className="leading-none">Back to Website</span>
          <Icon name="ArrowRight" size={14} className="text-white block" />
        </Link>
      </div>

      {/* Slides container - horizontal scroll with smooth transition */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-full min-w-full shrink-0"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              loading="eager"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slide indicators - click to jump to specific slide */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-white"
                : "w-10 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

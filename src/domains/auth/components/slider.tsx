"use client";

import { Icon } from "@/shared/ui/icon/Icon";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface AutoSliderProps {
  slides: StaticImageData[];
  autoSlideInterval?: number;
}

export default function AutoSlider({
  slides,
  autoSlideInterval = 4000,
}: AutoSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoSlideInterval]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      {/* Fixed button */}
      <div className="absolute right-5 top-5 z-20">
        <button className="rounded-full bg-white/20 px-4 py-2 text-xs text-white backdrop-blur">
          Back to Website
          <Icon name="ArrowRight" size={20} className="text-gray-500" />
        </button>
      </div>

      {/* Slides */}
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
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
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

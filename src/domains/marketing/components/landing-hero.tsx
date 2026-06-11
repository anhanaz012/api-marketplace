"use client";

import { Button } from "@/shared/ui";
import DesktopViewImage from "./desktop-view";

export default function Hero() {
  return (
    <section className="w-full bg-primary-light pt-20">
      <div className="mx-auto flex flex-col">
        {/* Headline Section */}
        <div className="text-center mx-auto mb-12 max-w-6xl">
          <h1 className="text-5xl xs:max-md:text-3xl font-medium text-gray leading-tight mb-2">
            The ultimate
          </h1>
          <h2 className="text-5xl xs:max-md:text-3xl font-medium text-gray leading-tight mb-4">
            API & Automation tools
          </h2>
          <div className="text-5xl xs:max-md:text-3xl gradient-heading font-display">
            MARKETPLACE
          </div>
        </div>

        {/* Description Section */}
        <div className="grid max-w-6xl md:grid-cols-2 xs:max-md:gap-4 px-0 xs:max-xl:px-4 gap-12 mb-12 xs:max-md:mb-8 mx-auto">
          <div className="text-center">
            <p className="text-lg text-gray leading-relaxed">
              Discover a powerful, easy-to-use platform where innovation meets
              simplicity.
            </p>
          </div>
          <div className="text-center max-w-6xl">
            <p className="text-lg text-gray leading-relaxed">
              Join the future of modular development and digital interaction —
              all from one unified platform.
            </p>
          </div>
        </div>

        {/* Join Now Button */}
        <Button
          variant="primary"
          className="py-2.5 max-w-fit mx-auto mb-10 px-6 font-extralight!"
          borderRounded
        >
          Join Now
        </Button>
        <DesktopViewImage />
      </div>
    </section>
  );
}

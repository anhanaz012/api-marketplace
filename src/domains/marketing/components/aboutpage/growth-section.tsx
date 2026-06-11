"use client";

import { IconType } from "react-icons";
import { CiGlobe } from "react-icons/ci";
import { GoTools } from "react-icons/go";
import { PiTreeStructureLight, PiUsersThreeThin } from "react-icons/pi";
import SupportCard from "./support-card";

interface FeatureCard {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    id: "global-community",
    icon: CiGlobe,
    title: "Global Community",
    description:
      "Developers from all over the world rely on our platform to build apps, tools, and services at scale.",
  },
  {
    id: "all-in-one",
    icon: GoTools,
    title: "All-in-One Toolkit",
    description:
      "Access everything you need in one place. Clean docs, sandbox testing, version control, and real-time analytics.",
  },
  {
    id: "collaborative-growth",
    icon: PiUsersThreeThin,
    title: "Collaborative Growth",
    description:
      "We support developers, startups, and enterprises with flexible solutions, partnerships, and a strong API-first ecosystem.",
  },
  {
    id: "scalable-infrastructure",
    icon: PiTreeStructureLight,
    title: "Scalable Infrastructure",
    description:
      "Whether you're handling 10 or 1 billion requests, our infrastructure grows with you — fast, secure, and reliable.",
  },
];

export default function GrowthSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-[40px] mx-auto max-w-2xl xs:max-md:text-2xl font-medium text-gray mb-4">
            Designed for Growth. Built for You
          </h3>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex xs:max-sm:flex-col gap-4 p-6 custom-shadow rounded-3xl bg-primary-light  transition-colors"
            >
              {/* Icon */}
              <div className="shrink-0">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white">
                  <feature.icon size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-medium text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Body Text */}
        <div className="max-w-6xl mx-auto text-center space-y-4 text-gray">
          <p className="text-xl max-w-5xl font-medium mx-auto leading-14">
            Whether you&apos;re an API provider looking to showcase your
            product, or a developer searching for the right tool — our platform
            is built for both sides. Providers get visibility, analytics, and
            real users. Clients get speed, variety, and quality APIs, all in one
            trusted space. Together, we&apos;re building the future of connected
            technology.
          </p>
        </div>

        {/* CTA Section */}
        <SupportCard />
      </div>
    </section>
  );
}

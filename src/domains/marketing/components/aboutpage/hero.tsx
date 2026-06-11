import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });

const features = [
  {
    title: "Why Developers Love Us",
    description: "Fast setup. Clean docs. Powerful tools.",
  },
  {
    title: "Global Reach",
    description:
      "Used by developers worldwide — scaling from startups to enterprise.",
  },
  {
    title: "Built for Builders",
    description: "APIs that help you launch faster and grow smarter.",
  },
];

export default function Hero() {
  return (
    <section className="w-full px-0 xs:max-xl:px-4 bg-primary-light py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Main heading */}
        <div className="text-center mx-auto mb-6 max-w-6xl">
          <h1 className="text-[40px] max-w-2xl xs:max-md:text-2xl font-medium text-gray mb-4">
            Discover What We Offer And Why
          </h1>
          <div className="text-5xl gradient-heading font-display">
            We Built This Platform
          </div>
        </div>

        {/* Body paragraph */}
        <p className="text-gray text-lg leading-relaxed max-w-2xl">
          Welcome to our API &amp; Actors marketplace.
          <br />
          Unlock the future of integration and innovation. At our API &amp;
          Actor Marketplace, we connect developers, businesses, and creators
          with powerful APIs and intelligent automation actors — all in one
          platform. Whether you&apos;re a seasoned developer or a no-code
          entrepreneur, our marketplace is designed to empower you to build,
          integrate, and scale faster than ever.
        </p>

        {/* Divider spacing */}
        <div className="mt-4" />

        {/* Sub-section heading */}

        <h3 className="text-[40px] max-w-2xl xs:max-md:text-2xl font-medium text-gray mb-4">
          Here&apos;s what sets us apart
        </h3>

        {/* Feature cards */}
        <div className="w-full grid grid-cols-1 sm:max-md:grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center gap-3 bg-white rounded-3xl border border-gray-200 shadow px-10 sm:max-md:px-4 p-8"
            >
              <p className="text-lg font-medium text-base">{feature.title}</p>
              <p className="text-md text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

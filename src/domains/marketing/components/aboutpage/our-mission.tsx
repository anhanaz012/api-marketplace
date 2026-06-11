import { Logo } from "@/shared/ui";
import Badge from "@/shared/ui/badge/badge";

type CardItem = {
  title: string;
  badge: string;
  description: string;
  gradient: string;
};

const cards: CardItem[] = [
  {
    title: "Our Mission",
    badge: "SimplifyDevelopment",
    description:
      "We're on a mission to simplify API access for developers and businesses. Our goal is to make building great products faster, easier, and more reliable for everyone.",
    gradient: "bg-gradient-to-br from-slate-600 via-teal-800 to-slate-900",
  },
  {
    title: "What We Offer",
    badge: "PowerfulAPIs",
    description:
      "With over 35,000+ APIs and tools trusted by 2,000+ developers, we provide everything you need to discover, test, and integrate powerful APIs — all in one place.",
    gradient: "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700",
  },
  {
    title: "Built on Trust & Support",
    badge: "ReliableSupport",
    description:
      "Handling over 1 billion API calls every month with 24/7 support, we're committed to your success — whether you're a solo developer or scaling a global product.",
    gradient: "bg-gradient-to-br from-blue-800 via-slate-700 to-blue-950",
  },
];

export default function MissionSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Intro paragraph */}
        <p className="text-3xl max-w-3xl text-gray text-left mx-auto font-medium leading-relaxed">
          Imagine a place where innovation meets simplicity — that &apos;s us. A
          powerful API marketplace where 35,000+ tools connect 2,000+ developers
          to endless possibilities. Fast. Scalable. Built for the future.
        </p>

        {/* Cards */}
        <div className="flex flex-col lg:max-2xl:grid lg:max-2xl:grid-cols-2 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col-reverse sm:flex-row overflow-hidden rounded-4xl border border-gray-100 shadow bg-white min-h-55"
            >
              {/* Left: Text content */}
              <div className="flex flex-col justify-center gap-3 p-20 xs:max-2xl:p-6 xs:max-2xl:w-full sm:w-[55%]">
                <h3 className="text-2xl font-medium text-gray">{card.title}</h3>

                {/* Pill badge */}
                <Badge>
                  <span className="gradient-text">{card.badge}</span>
                </Badge>

                {/* Description */}
                <p className="text-md text-muted max-w-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Right: Gradient panel */}
              <div
                className={`${card.gradient} sm:w-[45%] min-h-40 sm:min-h-full`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

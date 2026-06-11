import { stats } from "@/mockdata";

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col items-center text-center gap-3 rounded-3xl border-2 border-secondary bg-white px-6 py-4"
          >
            {/* Card title */}
            <p className=" text-gray text-lg font-medium tracking-wide">
              {stat.title}
            </p>

            {/* Big stat value */}
            <p className="text-4xl gradient-heading leading-none">
              {stat.value}
            </p>

            {/* Description */}
            <p className="text-sm text-base leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { features } from "@/mockdata";
import Image from "next/image";
import img1 from "@/assets/images/slider/slide1.png";
import img2 from "@/assets/images/slider/slide2.png";

export default function FeaturesSection() {
  return (
    <section className="bg-white px-6 py-12 md:py-20 gap-14 flex flex-col">
      {/* {Feature 1} */}
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 md:items-center">
          {/* Image Container */}
          <div className="relative h-80 xs:max-md:hidden md:h-96 lg:h-112.5 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={img1}
              alt="Build Smarter, Faster"
              fill
              className="object-cover"
            />
          </div>
          {/* Content Container */}

          <div className="space-y-10 px-10 xs:max-lg:px-0 flex flex-col text-center items-center justify-center">
            {/* <div className="space-y-4"> */}
            <h2 className="text-base text-3xl md:text-4xl md:max-lg:text-3xl font-medium">
              APIs That Drive
              <span className="gradient-heading pl-2"> the Future</span>
            </h2>
            {/* </div> */}

            {/* Features List */}
            <p className="text-gray text-lg">
              Discover powerful, scalable APIs built for modern developers. From
              AI to payments, streamline your development and launch faster with
              tools trusted by top companies around the world.
            </p>
          </div>
        </div>
      </div>
      {/* {Feature 2} */}
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 md:items-center">
          {/* Content Container */}
          <div className="space-y-10 md:max-lg:space-y-4 xs:max-lg:pr-0 pr-10">
            <h2 className="text-base xs:max-md:text-center text-3xl md:text-4xl md:max-lg:text-3xl font-medium">
              Build Smarter, Faster With
              <span className="gradient-heading pl-2"> the Right APIs</span>
            </h2>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 xs:max-md:flex-col bg-primary-light rounded-3xl"
                >
                  {/* Icon Circle */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                    <feature.icon size={24} />
                  </div>

                  {/* Feature Content */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-xl md:max-lg:text-sm text-gray">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Container */}
          <div className="relative h-80 xs:max-md:hidden md:h-96 lg:h-112.5 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={img2}
              alt="Build Smarter, Faster"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

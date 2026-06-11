import DesktopImage from "@/assets/images/image.png";
import { brands } from "@/constants";
import Image from "next/image";

const DesktopViewImage = () => {
  return (
    <>
      <section className="relative">
        {/* Image Container */}
        <div className="max-w-6xl mx-auto px-0 xs:max-xl:px-4 xs:max-md:w-full relative">
          <Image
            src={DesktopImage}
            alt="Desktop View"
            className="w-full md:max-2xl:max-w-2xl md:max-2xl:mx-auto h-120 xs:max-md:h-80 md:max-lg:h-96 object-cover rounded-t-[50px]
                 border-t-20 border-r-20 border-l-20
                 border-secondary"
          />
        </div>
        {/* Full Width Banner */}
        <div
          className="
        absolute
        left-0
        right-0
        bottom-0
        h-56
        xs:max-md:h-44
        backdrop-blur-sm
         bg-[#28282847]
        border-t border-white/20"
        >
          <div className="max-w-300 px-0 xs:max-xl:px-4 xs:max-md:w-full xs:max-md:max-w-full text-white mx-auto h-full flex flex-col items-center justify-center xs:max-md:gap-8 gap-12">
            <p className="xs:max-md:text-center text-left">
              Data from the biggest companies around the world
            </p>
            <div className="grid grid-cols-5 xs:max-md:grid-cols-5 xs:max-md:gap-4 gap-12">
              {brands.map((brand) => {
                const Icon = brand.icon;
                return (
                  <div key={brand.name} className="flex items-center gap-2">
                    <Icon size={34} />
                    <p className="text-xl xs:max-md:hidden block md:max-xl:text-sm">
                      {brand.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesktopViewImage;

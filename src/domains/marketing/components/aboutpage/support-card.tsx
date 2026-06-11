export default function SupportCard() {
  return (
    <div className="relative w-full xs:max-sm:px-4 px-0 max-w-xl mx-auto pt-18">
      {/* Outer border */}
      <div className="border-2 border-primary rounded-[50px] p-4">
        <div className="border-2 border-primary rounded-4xl p-4">
          {/* Inner border */}
          <div className="border-2 border-primary rounded-4xl p-10 xs:max-sm:p-4 xs:max-sm:text-center xs:max-sm:py-10 py-14 bg-white">
            {/* Text */}
            <h3 className="gradient-heading text-5xl xs:max-sm:text-3xl min-w-fit font-display">
              Here to support you
            </h3>
          </div>
        </div>
      </div>

      {/* Button - positioned to overlap the bottom border */}
      <div className="flex justify-center -mt-10 relative z-10">
        <button className="bg-primary hover:font-bold cursor-pointer text-white font-normal py-3 px-40 xs:max-sm:px-4 sm:max-md:px-10 rounded-full transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}

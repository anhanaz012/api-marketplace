import { footerLinks } from "@/constants/footer.constants";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiLinkedinBoxFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-primary-light px-20 xs:max-lg:px-4 py-12 xs:max-sm:py-8">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-secondary">
          <h2 className="text-3xl xs:max-lg:text-2xl text-gray leading-tight mb-6 md:mb-0 max-w-sm">
            Join us — your innovation powers the future
          </h2>
          <div className="text-primary max-w-fit px-4 py-2 rounded-full shadow bg-white text-sm">
            marketplace@business.com
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 xs:max-sm:gap-4">
          {/* Left Section - Social Media */}
          <div>
            <p className="text-gray xs:max-lg:text-sm">
              Follow us to stay connected and updated
            </p>
            <div className="flex gap-2 xs:max-sm:justify-end justify-start xs:max-md:mt-0 items-center mt-2">
              <RiLinkedinBoxFill size={30} className="text-gray" />
              <FaSquareXTwitter size={28} className="text-gray" />
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex gap-8 xs:max-md:gap-2">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray xs:max-lg:text-sm hover:text-gray-800 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

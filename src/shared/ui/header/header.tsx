// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import Button from "../button/button";
// import Logo from "../logo/logo";
// import { navItems } from "@/constants/header.constants";

// const HEADER_HEIGHT = 57;

// const Header = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const isActive = (href: string) => pathname === href;

//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Lock page scroll when mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [isMenuOpen]);

//   return (
//     <>
//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-white px-5 xs:max-sm:px-4 py-2.5 flex items-center justify-between shadow-md">
//         <Logo />

//         {/* Desktop Navigation */}
//         <nav className="hidden md:block" aria-label="Primary Navigation">
//           <ul className="flex items-center gap-6 text-gray text-[15px]">
//             {navItems.map((item) => (
//               <li key={item.id}>
//                 <Link
//                   href={item.href}
//                   className={`transition-all duration-200 hover:text-base ${
//                     isActive(item.href)
//                       ? "text-primary font-extralight bg-primary/10 p-2 px-5 rounded-full"
//                       : ""
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Desktop Auth Buttons */}
//         <div className="hidden md:flex items-center gap-3">
//           <Button
//             variant="primaryOutline"
//             borderRounded
//             onClick={() => router.push("/login")}
//             className="py-2 text-sm px-6 font-normal whitespace-nowrap"
//           >
//             Sign in
//           </Button>

//           <Button
//             variant="primary"
//             borderRounded
//             onClick={() => router.push("/signup")}
//             className="py-2 text-sm px-6 font-normal whitespace-nowrap"
//           >
//             Sign up
//           </Button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100"
//           aria-label="Toggle menu"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="relative w-6 h-5">
//             <span
//               className={`absolute left-0 w-6 h-0.5 bg-gray rounded-full transition-all duration-300 ${
//                 isMenuOpen ? "rotate-45 top-2" : "top-0"
//               }`}
//             />
//             <span
//               className={`absolute left-0 top-2 w-6 h-0.5 bg-gray rounded-full transition-all duration-300 ${
//                 isMenuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`absolute left-0 w-6 h-0.5 bg-gray rounded-full transition-all duration-300 ${
//                 isMenuOpen ? "-rotate-45 top-2" : "top-4"
//               }`}
//             />
//           </span>
//         </button>
//       </header>

//       {/* Spacer for fixed header */}
//       <div style={{ height: HEADER_HEIGHT }} />

//       {/* Mobile Menu */}
//       <div
//         className={`fixed left-0 right-0 bg-white z-40 md:hidden shadow-lg transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//         style={{
//           top: HEADER_HEIGHT,
//           maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
//           overflowY: "auto",
//         }}
//       >
//         <div className="flex flex-col p-5 space-y-6">
//           <nav
//             className="flex flex-col text-center text-gray"
//             aria-label="Mobile Navigation"
//           >
//             {navItems.map((item) => (
//               <Link
//                 key={item.id}
//                 href={item.href}
//                 className={`py-3 transition-all duration-200 ${
//                   isActive(item.href)
//                     ? "text-primary bg-primary/10 font-medium"
//                     : "text-muted hover:text-base"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           <div className="border-t border-gray-200" />

//           <div className="grid grid-cols-2 gap-3">
//             <Button
//               variant="primaryOutline"
//               borderRounded
//               onClick={() => {
//                 router.push("/login");
//                 setIsMenuOpen(false);
//               }}
//               className="py-2.5 text-sm font-normal w-full"
//             >
//               Sign in
//             </Button>

//             <Button
//               variant="primary"
//               borderRounded
//               onClick={() => {
//                 router.push("/signup");
//                 setIsMenuOpen(false);
//               }}
//               className="py-2.5 text-sm font-normal w-full"
//             >
//               Sign up
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Overlay */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 z-30 md:hidden"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Header;

"use client";

import { MobileMenu } from "@/components/MobileMenu";
import { HEADER_HEIGHT, navItems } from "@/constants/header.constants";
import { useHeaderLogic } from "@/hooks/useHeader";
import Link from "next/link";
import Button from "../button/button";
import Logo from "../logo/logo";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen, isActive, router } = useHeaderLogic();

  const handleMobileNavigate = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed p-0 left-0 right-0 z-50 bg-white px-5 xs:max-sm:px-4 py-2.5 flex items-center justify-between border-b border-gray-300">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Primary Navigation">
          <ul className="flex items-center gap-6 text-gray text-[15px]">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`transition-all duration-300 hover:text-base ${
                    isActive(item.href)
                      ? "text-primary font-extralight bg-primary/10 p-2 px-5 rounded-full"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="primaryOutline"
            borderRounded
            onClick={() => router.push("/login")}
            className="py-2 text-sm px-6 font-normal whitespace-nowrap"
          >
            Sign in
          </Button>
          <Button
            variant="primary"
            borderRounded
            onClick={() => router.push("/signup")}
            className="py-2 text-sm px-6 font-normal whitespace-nowrap"
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-6 h-0.5 bg-gray rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 top-2" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 w-6 h-0.5 bg-gray rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 w-6 h-0.5 bg-gray rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 top-2" : "top-4"
              }`}
            />
          </span>
        </button>
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: HEADER_HEIGHT }} />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        isActive={isActive}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleMobileNavigate}
      />
    </>
  );
};

export default Header;

import localFont from "next/font/local";

// For static fonts with multiple weights
export const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
});

// For static single-weight font (CORRECTED)
export const protestRiot = localFont({
  src: "../../public/fonts/protest-riot/ProtestRiot-Regular.ttf",
  variable: "--font-protest-riot",
  style: "normal",
  display: "swap",
  // fallback: ["cursive", "Impact", "system-ui"], // Professional fallback for display font
  preload: false, // Good - don't preload secondary fonts
});

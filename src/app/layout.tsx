import type { Metadata } from "next";
import { protestRiot, poppins } from "@/lib/fonts";
import "./globals.css";
import "./gradients.css";

export const metadata: Metadata = {
  title: "API Marketplace",
  description:
    "Discover, test, and integrate APIs seamlessly with our API Marketplace. Explore a wide range of APIs, read reviews, and find the perfect solution for your project. Start building with confidence today!",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${protestRiot.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import {
  Feature,
  PowerPlayer,
} from "@/domains/marketing/types/landingPageTypes";
import { AiFillAmazonCircle, AiOutlineThunderbolt } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { LuPuzzle } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";

export const stats = [
  {
    title: "Developers",
    value: "2000+",
    description:
      "Trusted by 2000+ developers who build faster with powerful, ready-to-use APIs.",
  },
  {
    title: "APIs",
    value: "35000+",
    description: "Explore 35,000+ powerful APIs ready to integrate.",
  },
  {
    title: "API Calls Per Month",
    value: "1Billion+",
    description:
      "Handling 1B+ API requests monthly with speed and reliability.",
  },
  {
    title: "Customer Care",
    value: "24/7",
    description: "24/7 customer care, because your time matters.",
  },
];
export const players: PowerPlayer[] = [
  {
    id: 1,
    icon: TbBrandLinkedinFilled,
    title: "LinkedIn Bulk Data API",
    rank: 1,
    description:
      "Fast, accurate, and scalable LinkedIn data extraction. Ideal for lead generation, hiring, and market research.",
    bgColor: "bg-[#007EBB]",
  },
  {
    id: 2,
    icon: TbBrandLinkedinFilled,
    title: "LinkedIn Sales Navigator (No Cookies)",
    rank: 2,
    description:
      "Bulk data extraction without cookies for B2B targeting and advanced prospecting. Perfect for lead generation and sales team automation.",
    bgColor: "bg-[#007EBB]",
  },
  {
    id: 3,
    icon: FaFacebook,
    title: "Facebook Bulk Data API",
    rank: 3,
    description:
      "Fast, accurate Facebook data extraction for audience analysis and brand tracking. Delivers powerful marketing intelligence at scale.",
    bgColor: "bg-[#3B579D]",
  },
  {
    id: 4,
    icon: AiFillAmazonCircle,
    title: "Apollo No Cookies API",
    rank: 1,
    description:
      "Fast, bulk data access for lead enrichment and B2B outreach. Ideal for sales automation and prospecting at scale.",
    bgColor: "bg-yellow-500",
  },
  {
    id: 5,
    icon: RiInstagramFill,
    title: "Instagram Bulk Data API",
    rank: 2,
    description:
      "Fast, accurate bulk data extraction for influencer analysis and brand monitoring. Perfect for marketing research and competitive social insights.",
    bgColor: "bg-pink-600",
  },
  {
    id: 6,
    icon: AiFillAmazonCircle,
    title: "Amazon Sellers Data",
    rank: 1,
    description:
      "Fast, accurate bulk product data for price tracking and competitor analysis. Ideal for reviews monitoring and e-commerce market research.",
    bgColor: "bg-gray-800",
  },
];
export const features: Feature[] = [
  {
    icon: LuPuzzle,
    title: "Unified API Marketplace",
    description:
      "A centralized hub to find, test, and integrate powerful APIs across various categories.",
  },
  {
    icon: AiOutlineThunderbolt,
    title: "Developer-First Experience",
    description:
      "Simple, fast, and built for developers—easy onboarding, clear docs, and real-time testing tools.",
  },
];

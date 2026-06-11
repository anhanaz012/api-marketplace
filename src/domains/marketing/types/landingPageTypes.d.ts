import { IconType } from "react-icons";

export interface PowerPlayer {
  id: number;
  icon: IconType;
  title: string;
  rank: number;
  description: string;
  bgColor: string;
}
export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

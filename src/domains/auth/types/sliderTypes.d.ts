import { StaticImageData } from "next/image";

export interface AutoSliderProps {
  slides: StaticImageData[];
  autoSlideInterval?: number;
}

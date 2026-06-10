import AutoSlider from "@/domains/auth/components/slider";
import slide1 from "@/assets/images/slider/slide1.png";

export default function HeroSlider() {
  const slides = [slide1, slide1, slide1];

  return (
    <div className="h-[calc(100vh-40px)] max-w-2xl w-1/2 overflow-hidden rounded-2xl">
      <AutoSlider slides={slides} autoSlideInterval={5000} />
    </div>
  );
}

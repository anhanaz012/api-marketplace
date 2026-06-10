import slide1 from "@/assets/images/slider/slide1.png";
import slide2 from "@/assets/images/slider/slide2.png";
import AuthForm from "@/domains/auth/components/signup-form";
import AutoSlider from "@/domains/auth/components/slider";

const LoginSignup = () => {
  const slides = [slide1, slide2, slide1];
  return (
    <div className="flex flex-1 p-5">
      <AutoSlider slides={slides} autoSlideInterval={5000} />
      <AuthForm />
    </div>
  );
};

export default LoginSignup;

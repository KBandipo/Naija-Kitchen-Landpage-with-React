import WelcomeMessage from "./WelcomeMessage";

function HeroSection() {
  return (
    <>
      <div className="h-screen w-full bg-[url('/images/hero-food.jpg')] bg-cover bg-center bg-no-repeat pt-10 md:flex md:pt-20">
        <WelcomeMessage />
      </div>
    </>
  );
}

export default HeroSection;

import React from "react";
import WelcomeMessage from "./WelcomeMessage";

function HeroSection() {
  return (
    <>
      <div className="flex h-screen w-full bg-[url('/images/hero-food.jpg')] bg-cover bg-center bg-no-repeat">
        <WelcomeMessage />
      </div>
    </>
  );
}

export default HeroSection;

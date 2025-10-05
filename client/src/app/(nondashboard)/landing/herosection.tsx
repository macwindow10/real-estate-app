import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="Rentifull Rental Platform"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}

export default HeroSection;

import React from "react";
import HeroSection from "./herosection";
import FeaturesSection from "./featuressection";
import DiscoverSection from "./discoversection";

export const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
    </div>
  );
};

export default Landing;

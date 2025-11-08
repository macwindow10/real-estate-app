import React from "react";
import HeroSection from "./herosection";
import FeaturesSection from "./featuressection";
import DiscoverSection from "./discoversection";
import CallToActionSection from "./calltoactionsection";

export const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
    </div>
  );
};

export default Landing;

import React from "react";
import AboutHero from "./sections/hero";
import AboutCards from "./sections/cards";

const AboutPage: React.FC = () => {
  return (
    <div className="flex -translate-y-16 flex-col gap-8 pb-24 md:translate-y-0 md:pb-48">
      <AboutHero />
      <AboutCards />
    </div>
  );
};

export default AboutPage;

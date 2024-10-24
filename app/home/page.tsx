import React from "react";
import Hero from "./sections/hero";
import Cards from "./sections/cards";

const HomePage: React.FC = () => {
  return (
    <div className="flex -translate-y-16 flex-col md:translate-y-0 md:gap-8">
      <Hero />
      <Cards />
    </div>
  );
};

export default HomePage;

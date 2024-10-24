"use client";
import React from "react";

const ContactHero: React.FC = () => {
  return (
    <div className="relative h-[20vh] w-full bg-primary-light bg-opacity-80 lg:h-[40vh]">
      <div className="vignette z-1 absolute h-full w-full bg-hero-bg-pattern bg-cover bg-center bg-no-repeat opacity-60 shadow-2xl"></div>

      <div className="absolute h-full w-full">
        <div className="container mx-auto grid h-full place-items-center p-6">
          <h2 className="flex text-4xl font-bold text-white drop-shadow-lg lg:text-7xl">
            CONTACT US
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

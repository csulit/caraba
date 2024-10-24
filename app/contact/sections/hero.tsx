"use client";
import Image from "next/image";
import React from "react";
import heroBgImage from "../../../public/images/carabao_capital_hero_bg.webp";

const ContactHero: React.FC = () => {
  return (
    <div className="relative h-[20vh] w-full bg-primary-light bg-opacity-80 lg:h-[40vh]">
      <Image
        src={heroBgImage}
        fill
        className="z-2 vignette absolute object-cover opacity-60"
        alt="bg"
      />

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

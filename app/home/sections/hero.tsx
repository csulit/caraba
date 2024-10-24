"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import heroImage from "../../../public/images/carabao_capital_hero.webp";
import heroBgImage from "../../../public/images/carabao_capital_hero_bg.webp";

const Hero: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative h-[55vh] w-full bg-primary-light bg-opacity-80 lg:h-[70vh]">
        <Image
          src={heroImage}
          fill
          className="vignette object-cover lg:hidden"
          alt="hero"
        />

        <Image
          src={heroBgImage}
          fill
          className="vignette absolute object-cover opacity-60"
          alt="bg"
        />

        <div className="absolute h-full w-full">
          <div className="container mx-auto flex h-full flex-row items-end p-6 lg:items-center xl:p-0">
            <div className="mt-4 flex w-full flex-col md:justify-center lg:mt-0 lg:w-1/2">
              <div className="flex flex-col items-center gap-1 rounded-xl md:p-6 lg:items-start lg:gap-4">
                <h1 className="hidden font-semibold text-white drop-shadow-lg md:text-4xl lg:flex">
                  Welcome to
                </h1>

                <h2 className="hidden font-bold text-white drop-shadow-lg lg:flex lg:text-7xl">
                  CARABAO CAPITAL
                </h2>

                <div className="h-px w-full bg-white drop-shadow-lg"></div>

                <h3 className="text-center text-white drop-shadow-lg md:text-xl lg:text-start">
                  Your trusted partner in strategic investments and financial
                  growth.
                </h3>

                <Button
                  variant="secondary"
                  size="sm"
                  className="w-32 rounded-full font-bold lg:mt-12"
                  onClick={() => router.push("contact")}
                >
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2 lg:justify-end">
              <div className="absolute hidden h-52 w-52 -translate-x-72 -translate-y-60 rounded-full border-8 border-white opacity-40 shadow-2xl lg:block"></div>
              <div className="absolute hidden h-8 w-8 -translate-x-1/2 translate-y-80 rounded-full border-4 border-white opacity-40 shadow-2xl lg:block"></div>
              <div className="absolute h-[95%] w-[95%] -translate-x-5 -translate-y-5 rounded-3xl bg-black bg-opacity-20 shadow-2xl lg:h-1/2 lg:w-3/4 lg:-translate-x-8 lg:-translate-y-5"></div>
              <div className="absolute h-[95%] w-[95%] overflow-hidden rounded-3xl border border-white border-opacity-30 shadow-2xl lg:h-1/2 lg:w-3/4">
                <Image
                  src={heroImage}
                  fill
                  className="vignette object-cover"
                  alt="bg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

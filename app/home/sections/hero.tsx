"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import heroImage from "../../../public/images/carabao_capital_hero.webp";
import heroBgImage from "../../../public/images/carabao_capital_hero_bg.webp";
import { AnimatePresence, m } from "framer-motion";

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
          className="vignette absolute object-cover opacity-0 lg:opacity-60"
          alt="bg"
        />

        <div className="absolute h-full w-full">
          <div className="container mx-auto flex h-full flex-row items-end p-6 lg:items-center xl:p-0">
            <AnimatePresence initial={true}>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 20 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 flex w-full flex-col md:justify-center lg:mt-0 lg:w-1/2"
              >
                <div className="flex flex-col items-center gap-4 rounded-xl md:p-6 lg:items-start">
                  <h1 className="hidden font-semibold text-white drop-shadow-lg md:text-4xl lg:flex">
                    Welcome to
                  </h1>

                  <h2 className="hidden font-bold text-white drop-shadow-lg lg:flex lg:text-7xl">
                    CARABAO CAPITAL
                  </h2>

                  <AnimatePresence initial={true}>
                    <m.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 20 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="h-px w-full bg-white drop-shadow-lg"
                    ></m.div>
                  </AnimatePresence>

                  <h3 className="text-center text-white drop-shadow-lg md:text-xl lg:text-start">
                    Your trusted partner in strategic investments and financial
                    growth.
                  </h3>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="hidden w-32 rounded-full font-bold md:block lg:mt-12"
                    onClick={() => router.push("contact")}
                  >
                    Contact Us
                  </Button>
                </div>
              </m.div>
            </AnimatePresence>

            <div className="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2 lg:justify-end">
              <AnimatePresence initial={true}>
                <m.div
                  initial={{ y: -248, x: -200 }}
                  animate={{ y: -240, x: -288 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute hidden h-52 w-52 -translate-x-72 -translate-y-60 rounded-full border-8 border-white border-opacity-40 shadow-2xl lg:block"
                ></m.div>
              </AnimatePresence>

              <AnimatePresence initial={true}>
                <m.div
                  initial={{ y: 248, x: -200 }}
                  animate={{ y: 320, x: "50%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute hidden h-8 w-8 rounded-full border-4 border-white border-opacity-40 shadow-2xl lg:block"
                ></m.div>
              </AnimatePresence>

              <AnimatePresence initial={true}>
                <m.div
                  initial={{ y: 0, x: 0, opacity: 0 }}
                  animate={{ y: -20, x: -20, opacity: 20 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute h-[95%] w-[95%] rounded-3xl bg-black bg-opacity-20 shadow-2xl lg:h-1/2 lg:w-3/4"
                ></m.div>
              </AnimatePresence>

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

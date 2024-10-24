"use client";
import { AnimatePresence, m } from "framer-motion";
import { Eye, Target } from "lucide-react";
import React from "react";

const AboutCards: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 px-6">
      <AnimatePresence initial={true}>
        <m.div
          initial={{ y: 86 }}
          animate={{ y: 28 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative flex translate-y-7 gap-6 rounded-xl border bg-white p-6 px-6 shadow-xl lg:container lg:mx-auto"
        >
          <div className="hidden h-44 w-44 place-items-center rounded-lg bg-primary lg:grid">
            <Target className="h-32 w-32 text-white" />
          </div>

          <div className="absolute -top-7 right-7 grid h-14 w-14 place-items-center rounded-lg bg-primary lg:hidden">
            <Target className="h-7 w-7 text-white" />
          </div>

          <div className="flex flex-1 items-start gap-4">
            <div className="mt-2 flex flex-1 flex-col gap-4">
              <h3 className="text-3xl font-semibold text-primary">
                Our Mission
              </h3>

              <p className="text-gray-600">
                To identify, invest in, and nurture businesses with exceptional
                potential, driving innovation and creating lasting value for our
                stakeholders.
              </p>

              <div className="mt-4 hidden h-px w-1/2 bg-primary bg-opacity-30 lg:block"></div>
            </div>
          </div>
        </m.div>
      </AnimatePresence>

      <AnimatePresence initial={true}>
        <m.div
          initial={{ y: 86 }}
          animate={{ y: 56 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex translate-y-14 gap-6 rounded-xl border bg-white p-6 px-6 shadow-xl lg:container lg:mx-auto"
        >
          <div className="hidden h-44 w-44 place-items-center rounded-lg bg-primary lg:grid">
            <Eye className="h-32 w-32 text-white" />
          </div>

          <div className="absolute -top-7 right-7 grid h-14 w-14 place-items-center rounded-lg bg-primary lg:hidden">
            <Eye className="h-7 w-7 text-white" />
          </div>

          <div className="flex flex-1 items-start gap-4">
            <div className="mt-2 flex flex-1 flex-col gap-4">
              <h3 className="text-3xl font-semibold text-primary">
                Our Approach
              </h3>

              <p className="text-gray-600">
                We combine rigorous analysis, industry expertise, and a
                long-term perspective to make strategic investments across
                diverse sectors. Our hands-on approach and extensive network
                enable us to actively support our portfolio companies in
                achieving their full potential.
              </p>
              <div className="mt-4 hidden h-px w-1/2 bg-primary bg-opacity-30 lg:block"></div>
            </div>
          </div>
        </m.div>
      </AnimatePresence>
    </div>
  );
};

export default AboutCards;

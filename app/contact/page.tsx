"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
import ContactHero from "./sections/hero";
import ContactForm from "./sections/contact-form";
import ContactInfo from "./sections/contact-info";
import { AnimatePresence, m } from "framer-motion";

const ContactUsPage: React.FC = () => {
  return (
    <div className="flex flex-col pb-36 lg:p-0">
      <ContactHero />
      <div className="container mx-auto flex flex-col gap-6 px-6 py-6 lg:flex-row lg:px-0">
        <AnimatePresence initial={true}>
          <m.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            <Card className="flex-1 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </m.div>
        </AnimatePresence>

        <AnimatePresence initial={true}>
          <m.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Card className="h-full bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactInfo />
              </CardContent>
            </Card>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactUsPage;

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
import ContactHero from "./sections/hero";
import ContactForm from "./sections/contact-form";
import ContactInfo from "./sections/contact-info";

const ContactUsPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <div className="container mx-auto flex flex-col gap-6 px-6 py-6 lg:flex-row lg:px-0">
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

        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">
              Our Office
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ContactInfo />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUsPage;

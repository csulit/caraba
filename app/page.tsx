"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BarChart3, Building, Users, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="relative flex h-full min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-[100] bg-white text-primary shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <Image
                  alt="logo"
                  fill
                  src="/images/carabao_capital_logo_blue.png"
                />
              </div>
              <span className="hidden text-xl font-bold md:block">
                Carabao Capital
              </span>
            </div>
            <nav className="flex space-x-4">
              <Button
                variant="link"
                className="font-semibold text-primary"
                onClick={() => setActiveSection("home")}
              >
                Home
              </Button>
              <Button
                variant="link"
                className="font-semibold text-primary"
                onClick={() => setActiveSection("about")}
              >
                About
              </Button>
              <Button
                variant="link"
                className="font-semibold text-primary"
                onClick={() => setActiveSection("contact")}
              >
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex flex-col">
        {activeSection === "home" && (
          <div className="flex -translate-y-16 flex-col md:translate-y-0 md:gap-8">
            <div className="relative h-[55vh] w-full bg-primary-light bg-opacity-80 lg:h-[70vh]">
              <div className="vignette lg:bg-hero-bg-pattern z-1 absolute h-full w-full bg-hero-pattern bg-cover bg-top bg-no-repeat shadow-2xl lg:bg-center lg:opacity-60"></div>

              <div className="absolute h-full w-full">
                <div className="container mx-auto flex h-full flex-row items-end p-6 lg:items-center xl:p-0">
                  <div className="mt-4 flex w-full flex-col md:justify-center lg:mt-0 lg:w-1/2">
                    <div className="flex flex-col items-center gap-4 rounded-xl md:p-6 lg:items-start">
                      <h1 className="hidden font-semibold text-white drop-shadow-lg md:text-4xl lg:flex">
                        Welcome to
                      </h1>

                      <h2 className="hidden font-bold text-white drop-shadow-lg lg:flex lg:text-7xl">
                        CARABAO CAPITAL
                      </h2>

                      <div className="h-px w-full bg-white drop-shadow-lg"></div>

                      <h3 className="text-center text-white drop-shadow-lg md:text-xl lg:text-start">
                        Your trusted partner in strategic investments and
                        financial growth.
                      </h3>

                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-32 rounded-full font-bold lg:mt-12"
                        onClick={() => setActiveSection("contact")}
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>

                  <div className="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2 lg:justify-end">
                    <div className="absolute hidden h-52 w-52 -translate-x-72 -translate-y-60 rounded-full border-8 border-white opacity-40 shadow-2xl lg:block"></div>
                    <div className="absolute hidden h-8 w-8 -translate-x-1/2 translate-y-80 rounded-full border-4 border-white opacity-40 shadow-2xl lg:block"></div>
                    <div className="absolute h-[95%] w-[95%] -translate-x-5 -translate-y-5 rounded-3xl bg-black bg-opacity-20 shadow-2xl lg:h-1/2 lg:w-3/4 lg:-translate-x-8 lg:-translate-y-5"></div>
                    <div className="absolute h-[95%] w-[95%] overflow-hidden rounded-3xl border border-white border-opacity-30 bg-hero-pattern bg-cover bg-center shadow-2xl lg:h-1/2 lg:w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container -top-32 mx-auto grid gap-4 p-8 md:grid-cols-3 lg:-translate-y-24 lg:gap-20 xl:-translate-y-20 xl:p-0">
              <Card className="border-2 border-primary bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-center gap-4 text-center md:items-center">
                    <div className="flex items-center gap-4 md:flex-col">
                      <BarChart3 className="h-8 w-8 text-primary md:h-14 md:w-14" />
                      <h3 className="text-xl font-semibold">
                        Strategic Investments
                      </h3>
                    </div>

                    <p className="text-gray-600">
                      Identifying and capitalizing on high-potential
                      opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-center gap-4 text-center md:items-center">
                    <div className="flex items-center gap-4 md:flex-col">
                      <Users className="h-8 w-8 text-primary md:h-14 md:w-14" />
                      <h3 className="text-xl font-semibold">Expert Team</h3>
                    </div>
                    <p className="text-gray-600">
                      Seasoned professionals with deep industry insights.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-center gap-4 text-center md:items-center">
                    <div className="flex items-center gap-4 md:flex-col">
                      <Building className="h-8 w-8 text-primary md:h-14 md:w-14" />
                      <h3 className="text-xl font-semibold">
                        Diverse Portfolio
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Balanced investments across multiple sectors for optimal
                      returns.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === "about" && (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-800">
                About Carabao Capital
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-lg text-gray-600">
                Carabao Capital is a leading investment holding company with a
                focus on long-term value creation and sustainable growth.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-700">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To identify, invest in, and nurture businesses with
                  exceptional potential, driving innovation and creating lasting
                  value for our stakeholders.
                </p>
                <h3 className="text-xl font-semibold text-green-700">
                  Our Approach
                </h3>
                <p className="text-gray-600">
                  We combine rigorous analysis, industry expertise, and a
                  long-term perspective to make strategic investments across
                  diverse sectors. Our hands-on approach and extensive network
                  enable us to actively support our portfolio companies in
                  achieving their full potential.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {activeSection === "contact" && (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-800">
                Contact Carabao Capital
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-green-700">
                    Get in Touch
                  </h3>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" />
                    </div>
                    <Button
                      type="submit"
                      className="bg-green-700 text-white hover:bg-green-800"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-green-700">
                    Our Office
                  </h3>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-green-700" /> 123
                      Financial District, City Center
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-green-700" /> +1 (555)
                      123-4567
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-green-700" />{" "}
                      info@carabaocapital.com
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <footer className="absolute bottom-0 w-full border-t border-primary border-opacity-10 bg-gray-100">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-primary">
          © 2024 Carabao Capital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BarChart3, Building, Users, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-green-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8" />
              <span className="text-xl font-bold">Carabao Capital</span>
            </div>
            <nav className="flex space-x-4">
              <Button
                variant="link"
                className="text-white"
                onClick={() => setActiveSection("home")}
              >
                Home
              </Button>
              <Button
                variant="link"
                className="text-white"
                onClick={() => setActiveSection("about")}
              >
                About
              </Button>
              <Button
                variant="link"
                className="text-white"
                onClick={() => setActiveSection("contact")}
              >
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {activeSection === "home" && (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-800">
                Welcome to Carabao Capital
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 mb-6">
                Your trusted partner in strategic investments and financial
                growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <BarChart3 className="h-12 w-12 text-green-700 mb-2" />
                  <h3 className="text-xl font-semibold mb-2">
                    Strategic Investments
                  </h3>
                  <p className="text-gray-600">
                    Identifying and capitalizing on high-potential
                    opportunities.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-green-700 mb-2" />
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Seasoned professionals with deep industry insights.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Building className="h-12 w-12 text-green-700 mb-2" />
                  <h3 className="text-xl font-semibold mb-2">
                    Diverse Portfolio
                  </h3>
                  <p className="text-gray-600">
                    Balanced investments across multiple sectors for optimal
                    returns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeSection === "about" && (
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-800">
                About Carabao Capital
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 mb-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-4">
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
                  <h3 className="text-xl font-semibold text-green-700 mb-4">
                    Our Office
                  </h3>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-green-700" /> 123
                      Financial District, City Center
                    </p>
                    <p className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-green-700" /> +1 (555)
                      123-4567
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-green-700" />{" "}
                      info@carabaocapital.com
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          © 2024 Carabao Capital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

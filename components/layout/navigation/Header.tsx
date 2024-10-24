"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const navItems = ["home", "about", "contact"];

const Header: React.FC = () => {
  const router = useRouter();

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] bg-white text-primary shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image
                alt="logo"
                fill
                src="/images/carabao_capital_logo_blue.webp"
                placeholder="blur"
                blurDataURL="/images/carabao_capital_logo_blue.webp"
              />
            </div>
            <span className="hidden text-xl font-bold md:block">
              Carabao Capital
            </span>
          </div>
          <nav className="flex space-x-4">
            {navItems.map((route) => (
              <Button
                key={route}
                variant="link"
                className={cn(
                  "font-semibold capitalize text-primary",
                  pathname.includes(route) && "bg-primary text-white",
                )}
                onClick={() => router.push(route)}
              >
                {route}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import PageAnimation from "@/components/animations/PageAnimation";
import { LazyMotion, domAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  if (
    pathname?.includes("forbidden") ||
    pathname?.includes("page-not-found") ||
    pathname?.includes("server-error") ||
    pathname?.includes("email-action") ||
    pathname?.includes("reset-password")
  ) {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <PageAnimation className="h-full">{children}</PageAnimation>
    </LazyMotion>
  );
};

export default Template;

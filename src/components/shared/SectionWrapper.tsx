"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "secondary" | "dark" | "none";
  pattern?: boolean;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  id,
  background = "default",
  pattern = false,
  fullWidth = false,
}: SectionWrapperProps) {
  const bgColors = {
    default: "bg-background",
    muted: "bg-muted/30",
    secondary: "bg-secondary text-secondary-foreground",
    dark: "bg-black text-white",
    none: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24 overflow-hidden",
        bgColors[background],
        className
      )}
    >
      {pattern && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id={`pattern-${id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#pattern-${id})`} />
          </svg>
        </div>
      )}
      
      <div className={cn("container mx-auto px-4 relative z-10", fullWidth ? "max-w-none px-0" : "")}>
        <FadeIn>{children}</FadeIn>
      </div>
    </section>
  );
}


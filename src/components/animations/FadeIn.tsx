"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn, slideUp, slideInLeft, slideInRight } from "@/lib/animation-variants";

interface FadeInProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function FadeIn({
  direction = "up",
  delay = 0,
  duration = 0.6,
  children,
  className,
  fullWidth = false,
  ...props
}: FadeInProps) {
  const getVariants = () => {
    switch (direction) {
      case "up": return slideUp;
      case "down": return { hidden: { y: -30, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case "left": return slideInLeft;
      case "right": return slideInRight;
      case "none": return fadeIn;
      default: return slideUp;
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variants}
      className={cn(fullWidth ? "w-full" : "", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}


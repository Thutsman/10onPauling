"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

interface RevealAnimationProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  color?: string;
  delay?: number;
}

export default function RevealAnimation({
  children,
  width = "fit-content",
  color = "var(--primary)",
  delay = 0.25
}: RevealAnimationProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: color,
          zIndex: 20
        }}
      />
    </div>
  );
}


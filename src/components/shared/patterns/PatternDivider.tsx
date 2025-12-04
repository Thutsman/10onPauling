"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface PatternDividerProps {
  color?: string;
  height?: number;
  className?: string;
  pattern?: "zigzag" | "diamonds" | "triangles";
}

export default function PatternDivider({
  color = "currentColor",
  height = 20,
  className,
  pattern = "zigzag"
}: PatternDividerProps) {
  const patterns = {
    zigzag: (
      <path d="M0 20 L10 0 L20 20 L30 0 L40 20" fill="none" stroke={color} strokeWidth="2" />
    ),
    diamonds: (
      <path d="M0 10 L10 0 L20 10 L10 20 Z M20 10 L30 0 L40 10 L30 20 Z" fill={color} />
    ),
    triangles: (
      <path d="M0 20 L10 0 L20 20 M20 20 L30 0 L40 20" fill={color} opacity="0.5" />
    )
  };

  return (
    <div className={cn("w-full overflow-hidden", className)} style={{ height }}>
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <pattern id={`divider-${pattern}`} x="0" y="0" width="40" height={height} patternUnits="userSpaceOnUse">
          {patterns[pattern]}
        </pattern>
        <rect width="100%" height="100%" fill={`url(#divider-${pattern})`} />
      </svg>
    </div>
  );
}


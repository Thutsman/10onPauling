"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className={cn(
        "absolute top-4 left-4 z-[100] -translate-y-[150%] rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
      )}
    >
      Skip to main content
    </a>
  );
}


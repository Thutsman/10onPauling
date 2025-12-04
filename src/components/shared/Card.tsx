"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  image,
  title,
  subtitle,
  children,
  footer,
  className,
  hoverEffect = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.3 } } : {}}
      className={cn(
        "bg-card border rounded-xl overflow-hidden shadow-sm transition-shadow duration-300 h-full flex flex-col",
        hoverEffect && "hover:shadow-xl",
        className
      )}
    >
      {image && (
        <div className="relative h-56 overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title || "Card Image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        {title && <h3 className="font-heading text-xl font-bold mb-1 text-secondary">{title}</h3>}
        {subtitle && <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>}
        
        <div className="text-foreground/80 leading-relaxed flex-grow">
          {children}
        </div>

        {footer && (
          <div className="mt-6 pt-4 border-t border-border">
            {footer}
          </div>
        )}
      </div>
    </motion.div>
  );
}


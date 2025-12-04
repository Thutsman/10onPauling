"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, LucideIcon, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Amenity {
  text: string;
}

interface ProgramCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  icon: LucideIcon;
  focusAreas: string[];
  whatYoullDo: string[];
  whoShouldApply: string;
  color: string;
  accentColor: string;
}

export default function ProgramCard({
  title,
  price,
  description,
  image,
  icon: Icon,
  focusAreas,
  whatYoullDo,
  whoShouldApply,
  color,
  accentColor,
}: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={cn("rounded-2xl overflow-hidden bg-card border-2 transition-all duration-300 hover:shadow-xl flex flex-col h-full", color)}>
      {/* Image Header */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
          {price}
        </div>
        <div className="absolute -bottom-6 left-6 p-3 rounded-full bg-background shadow-md border border-border z-10">
          <Icon className={cn("w-8 h-8", accentColor)} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-10 flex flex-col flex-grow">
        <h3 className="font-heading text-2xl font-bold text-secondary mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{description}</p>

        {/* Focus Areas */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Focus Areas</h4>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area, idx) => (
              <span key={idx} className={cn("px-3 py-1.5 rounded-md text-xs font-semibold border", accentColor, "bg-primary/5 border-primary/20 text-foreground")}>
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full justify-between mb-4 hover:bg-muted/50"
          >
            <span className="text-sm font-medium">Program Details</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pb-4 text-sm">
                  <div>
                    <h5 className={cn("font-bold mb-2", accentColor)}>What You'll Do</h5>
                    <ul className="space-y-1.5">
                      {whatYoullDo.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className={cn("font-bold mb-2", accentColor)}>Who Should Apply</h5>
                    <p className="text-muted-foreground leading-relaxed">{whoShouldApply}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Button className={cn("w-full text-white hover:opacity-90", accentColor.replace('text-', 'bg-'))}>
            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

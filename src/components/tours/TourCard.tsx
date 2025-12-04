"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users, Mountain, Check, Info, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TourOption {
  title: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
}

interface TourCardProps {
  destination: string;
  tagline: string;
  description: string;
  image: string;
  options: TourOption[];
  features: {
    duration: string;
    groupSize: string;
    difficulty: string;
    bestTime: string;
  };
}

export default function TourCard({
  destination,
  tagline,
  description,
  image,
  options,
  features,
}: TourCardProps) {
  const [expandedOption, setExpandedOption] = React.useState<string | null>(null);

  const toggleOption = (title: string) => {
    setExpandedOption(expandedOption === title ? null : title);
  };

  return (
    <div className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Column */}
        <div className="relative h-64 lg:h-auto min-h-[400px]">
          <Image
            src={image}
            alt={destination}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="font-heading text-3xl font-bold mb-1">{destination}</h3>
            <p className="text-white/90 font-medium">{tagline}</p>
          </div>
        </div>

        {/* Content Column */}
        <div className="p-6 lg:p-8 flex flex-col">
          <div className="mb-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>
            
            {/* Quick Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Clock className="w-4 h-4 text-primary" />
                <span>{features.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Users className="w-4 h-4 text-primary" />
                <span>{features.groupSize}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Mountain className="w-4 h-4 text-primary" />
                <span>{features.difficulty}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{features.bestTime}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-auto">
            <h4 className="font-heading font-semibold text-lg text-secondary mb-2">Available Tours</h4>
            {options.map((option, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden bg-background">
                <button
                  onClick={() => toggleOption(option.title)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-foreground">{option.title}</span>
                      <span className="text-sm font-bold text-primary ml-2">{option.price}</span>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {option.duration}
                    </div>
                  </div>
                  {expandedOption === option.title ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground ml-4" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedOption === option.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t bg-muted/30"
                    >
                      <div className="p-4 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {option.description}
                        </p>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-foreground block mb-2">Includes:</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {option.includes.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Check className="w-3 h-3 text-green-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button size="sm" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90">
                          Book This Tour
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


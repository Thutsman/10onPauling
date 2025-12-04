"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import PatternDivider from "@/components/shared/patterns/PatternDivider";

const stats = [
  {
    icon: Trophy,
    badge: "#1 Global Destination",
    subhead: "Forbes Travel Guide 2025",
    description: "Voted the leading global destination for sustainable luxury travel.",
    gradient: "from-accent/90 via-accent/60 to-amber-200",
    outline: "border-accent/70",
  },
  {
    icon: ShieldCheck,
    badge: "Luxury Safeguard",
    subhead: "Boutique Hotel in Bulawayo",
    description: "Awarded for impeccable service, safety, and bespoke guest journeys.",
    gradient: "from-primary/90 via-primary/50 to-amber-100",
    outline: "border-primary/70",
  },
  {
    icon: Sparkles,
    badge: "Unforgettable Experiences",
    subhead: "Guests rate us 4.9/5",
    description: "From conservation safaris to curated dining, the ratings reflect true impact.",
    gradient: "from-earth/90 via-earth/60 to-amber-200",
    outline: "border-earth/70",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

export default function StatsCards() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-sandstone/60 to-background">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <PatternDivider pattern="diamonds" height={26} className="text-foreground/40" />
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.35 } }}
              className={cn(
                "relative p-8 rounded-3xl border-2 text-center shadow-xl transition-all duration-300 bg-gradient-to-br",
                stat.outline,
                stat.gradient
              )}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-60 transition-opacity pointer-events-none bg-gradient-to-br from-black/10 via-black/5 to-transparent" />
              <div className="relative flex justify-center mb-4">
                <div className="p-5 bg-white rounded-full shadow-lg">
                  <stat.icon className="w-9 h-9 text-foreground" />
                </div>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-1 relative">
                {stat.badge}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 relative">
                {stat.subhead}
              </p>
              <p className="text-muted-foreground min-h-[60px] text-sm md:text-base leading-relaxed mb-4 relative">
                {stat.description}
              </p>
              <div className="relative mt-auto h-1 mx-auto w-1/2 rounded-full bg-white/70" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


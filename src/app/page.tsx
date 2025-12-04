"use client";

import * as React from "react";
import { motion } from "framer-motion";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import StatsCards from "@/components/home/StatsCards";
import DiscoverZimbabwe from "@/components/home/DiscoverZimbabwe";
import AboutSection from "@/components/home/AboutSection";
import BowerySection from "@/components/home/BowerySection";
import ConciergeSection from "@/components/home/ConciergeSection";
import FinalCTA from "@/components/home/FinalCTA";
import Link from "next/link";
import { ArrowRight, Bed, Car, Globe, HeartHandshake } from "lucide-react";
import PatternDivider from "@/components/shared/patterns/PatternDivider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlideshow />

      {/* Statistics Cards */}
      <StatsCards />

      {/* Features Grid */}
      <section
        id="zimbabwe-features"
        className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-sandstone/35 to-white"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <PatternDivider pattern="zigzag" height={32} className="text-foreground" />
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-3">
              Curated Experiences
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              More than just a hotel, we offer a complete Zimbabwean journey tailored to your desires.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Luxury Accommodation",
                description: "Elegant suites designed for comfort and style.",
                icon: Bed,
                href: "/accommodation",
                color: "bg-primary/10 text-primary",
              },
              {
                title: "Wildlife Tours",
                description: "Guided safaris to Hwange and Matobo Hills.",
                icon: Globe,
                href: "/tours",
                color: "bg-safari/10 text-safari",
              },
              {
                title: "Volunteer",
                description: "Give back to the community with impactful programs.",
                icon: HeartHandshake,
                href: "/volunteer-experience",
                color: "bg-earth/10 text-earth",
              },
              {
                title: "Car Rental",
                description: "Reliable vehicles for your self-drive adventures.",
                icon: Car,
                href: "/car-rental",
                color: "bg-secondary/10 text-secondary",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    },
                  },
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link 
                  href={feature.href}
                  className="group p-8 rounded-2xl bg-white shadow-2xl border border-border/40 transition-all duration-300 flex flex-col items-center text-center bg-opacity-90 block h-full"
                >
                  <div className={`p-4 rounded-full mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <div className="mt-auto text-sm font-semibold text-primary flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Discover Zimbabwe */}
      <DiscoverZimbabwe />

      {/* About Section */}
      <AboutSection />

      {/* The Bowery Restaurant */}
      <BowerySection />

      {/* Concierge Services */}
      <ConciergeSection />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}

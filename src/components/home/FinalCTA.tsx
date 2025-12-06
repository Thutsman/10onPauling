"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BookingButton from "@/components/layout/BookingButton";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta/final-cta-bg.jpeg"
          alt="10 On Pauling Hotel - Luxury boutique hotel exterior with pool area at golden hour"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Pattern Border Top */}
      <div className="absolute top-0 left-0 right-0 h-3 opacity-20">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <pattern id="cta-pattern-top" x="0" y="0" width="60" height="12" patternUnits="userSpaceOnUse">
            <path d="M0 12 L30 0 L60 12" fill="var(--accent)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-pattern-top)" />
        </svg>
      </div>

      {/* Pattern Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-3 opacity-20">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <pattern id="cta-pattern-bottom" x="0" y="0" width="60" height="12" patternUnits="userSpaceOnUse">
            <path d="M0 0 L30 12 L60 0" fill="var(--accent)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-pattern-bottom)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Book Your Stay at Bulawayo's #1 Boutique Hotel
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light drop-shadow-lg">
            Plan Your Zimbabwe Experience Today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingButton mode="inline" className="text-lg px-10 py-7 h-auto bg-accent hover:bg-accent/90 text-secondary shadow-2xl" />
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 h-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary transition-all shadow-lg"
              asChild
            >
              <Link
                href="https://wa.me/263710706054?text=Hi%2010%20On%20Pauling%2C%20I%27d%20like%20to%20chat%20about%20a%20booking."
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bed, Coffee, Wind, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Bed, text: "Luxury Suites" },
  { icon: Coffee, text: "Premium Linen" },
  { icon: Wind, text: "Private Terraces" },
  { icon: Sparkles, text: "Garden Views" },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about/about-hotel.jpg"
              alt="10 On Pauling Hotel Exterior - Luxury boutique hotel in Bulawayo with elegant architecture and pool"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary">
              About 10 On Pauling
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nestled in tranquil Bulawayo, 10 On Pauling offers an intimate escape where luxury meets authentic Zimbabwean hospitality. Our boutique hotel combines elegant design with warm, personalized service.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-xl font-heading font-semibold text-secondary mb-2 italic">
                "Serenity, Elegance, Discretion"
              </p>
              <p className="text-muted-foreground mb-6">
                Experience the perfect blend of comfort and sophistication in the heart of Zimbabwe's second-largest city.
              </p>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/accommodation">
                View Accommodation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


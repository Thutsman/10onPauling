"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Plane, Car, Navigation, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless transportation to and from Joshua Mqabuko Nkomo International Airport",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    icon: Car,
    title: "Car Hire",
    description: "Premium vehicles for your self-drive adventures across Zimbabwe",
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    icon: Navigation,
    title: "Chauffeur Service",
    description: "Professional drivers for your comfort and convenience",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    icon: Bell,
    title: "Butler Service",
    description: "Personalized attention to make your stay truly exceptional",
    color: "bg-earth/10 text-earth border-earth/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

function ConciergeSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            Concierge Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium services available around the clock to enhance your stay
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={cn(
                "relative p-6 rounded-xl border-2 bg-card hover:shadow-lg transition-all duration-300",
                service.color
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-white/50">
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  24/7
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ConciergeSection;

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Waves, Trees, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    name: "Victoria Falls",
    tagline: "One of the Seven Natural Wonders of the World",
    description: "Experience the thunderous roar of the world's largest waterfall. From bungee jumping to sunset cruises, adventure awaits at every turn.",
    link: "/tours",
    linkText: "Learn More",
    icon: Waves,
    image: "/images/destinations/victoria-falls.jpg",
    color: "from-primary/60",
  },
  {
    id: 2,
    name: "Hwange National Park",
    tagline: "Home to Africa's largest elephant populations",
    description: "Witness majestic elephants, big cats, and over 400 bird species in their natural habitat. A true wildlife paradise.",
    link: "/tours",
    linkText: "Plan Your Safari",
    icon: Trees,
    image: "/images/destinations/hwange-national-park.jpeg",
    color: "from-safari/60",
  },
  {
    id: 3,
    name: "Matobo Hills",
    tagline: "UNESCO World Heritage Site",
    description: "Discover ancient rock art, track rhinos on foot, and explore unique flora. A journey through history and nature.",
    link: "/tours",
    linkText: "Explore Matobo",
    icon: Mountain,
    image: "/images/destinations/matobo-hills.jpeg",
    color: "from-earth/60",
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
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

export default function DiscoverZimbabwe() {
  return (
    <section className="py-24 bg-sandstone/20 relative overflow-hidden">
      {/* African Pattern Divider */}
      <div className="absolute top-0 left-0 right-0 h-2 opacity-10">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <pattern id="divider-pattern" x="0" y="0" width="40" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 8 L20 0 L40 8" fill="var(--primary)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#divider-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">
            Discover Zimbabwe
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the breathtaking destinations that make Zimbabwe a world-class travel experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={cardVariants}
              className="group relative h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Parallax Image Container */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name} - ${destination.tagline}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={destination.id === 1}
                  quality={90}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${destination.color} via-black/40 to-transparent`} />
                {/* Additional dark overlay at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white z-10">
                <div className="mb-4">
                  <destination.icon className="w-8 h-8 mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  {destination.name}
                </h3>
                <p className="text-sm md:text-base font-semibold mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {destination.tagline}
                </p>
                <p className="text-sm text-white mb-6 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                  {destination.description}
                </p>
                <Button
                  variant="outline"
                  className="bg-white/20 backdrop-blur-md border-white/50 text-white font-semibold shadow-lg hover:bg-white hover:text-secondary w-fit transition-all"
                  asChild
                >
                  <Link href={destination.link}>
                    {destination.linkText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


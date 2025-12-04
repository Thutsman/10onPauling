"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Placeholder images until user provides real assets
// In a real scenario, these would be paths to images in public/images/hero/
const SLIDES = [
  {
    id: 2,
    heading: "Bulawayo's #1 Boutique Hotel",
    subheading: "Voted by ZimCEO Network 2025",
    ctaText: "View Our Suites",
    ctaLink: "/accommodation",
    image: "/images/hero/hero-2.jpeg",
    overlayColor: "from-primary/40 via-transparent to-transparent", // Terracotta hint
    alt: "Elegant hotel interior",
  },
  {
    id: 1,
    heading: "Zimbabwe - The World's #1 Destination to Visit in 2025",
    subheading: "According to Forbes Travel Guide",
    ctaText: "Discover Why",
    ctaLink: "#zimbabwe-features",
    image: "/images/hero/hero-1.jpg",
    overlayColor: "from-black/60 via-transparent to-transparent",
    alt: "Majestic Victoria Falls landscape",
  },
  {
    id: 3,
    heading: "Make a Difference in Zimbabwe",
    subheading: "Transformative Conservation & Community Experiences",
    ctaText: "Explore Opportunities",
    ctaLink: "/volunteer-experience",
    image: "/images/hero/hero-3.jpeg",
    overlayColor: "from-earth/50 via-transparent to-transparent", // Earth tone hint
    alt: "Volunteers working in conservation",
  },
];

const AUTOPLAY_DELAY = 6000; // 6 seconds

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const controls = useAnimation();
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Reset timer on slide change
  const resetTimer = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const startTimer = React.useCallback(() => {
    resetTimer();
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
      }, AUTOPLAY_DELAY);
    }
  }, [isHovered, resetTimer]);

  React.useEffect(() => {
    startTimer();
    return () => resetTimer();
  }, [currentIndex, isHovered, startTimer, resetTimer]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigate(-1);
      } else if (e.key === "ArrowRight") {
        navigate(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigate = (direction: number) => {
    resetTimer();
    setCurrentIndex((prev) => {
      let nextIndex = prev + direction;
      if (nextIndex < 0) nextIndex = SLIDES.length - 1;
      if (nextIndex >= SLIDES.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const handleDotClick = (index: number) => {
    resetTimer();
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Ken Burns Effect Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="relative h-full w-full"
          >
            <Image
              src={SLIDES[currentIndex].image}
              alt={SLIDES[currentIndex].alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            
            {/* Overlay Gradient */}
            <div className={cn("absolute inset-0 bg-gradient-to-t", SLIDES[currentIndex].overlayColor)} />
            <div className="absolute inset-0 bg-black/20" /> {/* General darkening for text readability */}
          </motion.div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-xl mb-4 leading-tight"
              >
                {SLIDES[currentIndex].heading}
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-2xl text-white/90 font-light mb-8 drop-shadow-md"
              >
                {SLIDES[currentIndex].subheading}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <Link href={SLIDES[currentIndex].ctaLink}>
                    {SLIDES[currentIndex].ctaText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Hidden on mobile */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none md:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto text-white/70 hover:text-white hover:bg-black/20 rounded-full h-12 w-12 hidden md:flex"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-8 w-8" />
          <span className="sr-only">Previous Slide</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="pointer-events-auto text-white/70 hover:text-white hover:bg-black/20 rounded-full h-12 w-12 hidden md:flex"
          onClick={() => navigate(1)}
        >
          <ChevronRight className="h-8 w-8" />
          <span className="sr-only">Next Slide</span>
        </Button>
      </div>

      {/* Progress Bar & Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-4">
        {/* Dot Indicators */}
        <div className="flex gap-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Timer Progress Bar (Active Slide Only) */}
        <div className="h-1 w-64 bg-white/20 rounded-full overflow-hidden hidden md:block">
          {!isHovered && (
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
              className="h-full bg-white/80"
            />
          )}
        </div>
      </div>
    </div>
  );
}


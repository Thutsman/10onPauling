"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    quote: "My time volunteering with the ILife Stream was truly transformative. Connecting with the local children and seeing their eagerness to learn changed my perspective on life completely.",
    rating: 5,
    program: "ILife Stream"
  },
  {
    id: 2,
    name: "David Chen",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    quote: "As a photographer, capturing the raw beauty of Zimbabwe's wildlife was a dream come true. The mentorship I received helped me build a professional portfolio I'm proud of.",
    rating: 5,
    program: "Photography Stream"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    quote: "The conservation work is hands-on and impactful. Tracking rhinos on foot and contributing to anti-poaching data was an adrenaline rush with a purpose.",
    rating: 5,
    program: "Conservation Stream"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="testimonial-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Volunteer Stories
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Hear from those who have walked this path before you and left their mark.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="shrink-0 relative">
                   <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                     <Image 
                       src={testimonials[currentIndex].image} 
                       alt={testimonials[currentIndex].name} 
                       fill 
                       className="object-cover"
                     />
                   </div>
                   <div className="absolute -bottom-3 -right-3 bg-accent text-secondary p-2 rounded-full shadow-lg">
                     <Quote className="w-5 h-5" />
                   </div>
                </div>
                
                <div className="text-center md:text-left flex-grow">
                  <div className="flex justify-center md:justify-start gap-1 mb-4 text-accent">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl font-light italic text-white/90 mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-white/60 uppercase tracking-wider">{testimonials[currentIndex].country} • {testimonials[currentIndex].program}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-white/20 text-white hover:bg-white hover:text-secondary bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-white/20 text-white hover:bg-white hover:text-secondary bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

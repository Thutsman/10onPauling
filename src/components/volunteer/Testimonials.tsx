"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Thalia",
    country: "USA",
    image: "/images/volunteer/testimonials/sarah-jenkins.jpeg",
    quote: "Volunteering in Zimbabwe was life-changing. From witnessing the Big Five in Hwange to experiencing the majesty of Victoria Falls, every moment was unforgettable. Murarabungu made Africa feel like home.",
    rating: 5,
    program: ""
  },
  {
    id: 2,
    name: "Grant",
    country: "USA",
    image: "/images/volunteer/testimonials/david-chen.jpeg",
    quote: "10 on Pauling was pure serenity. My stay became unforgettable when I was able to film wild rhino up close — a humbling, once-in-a-lifetime experience. Absolutely exceptional hospitality.",
    rating: 5,
    program: "Photography Stream"
  },
  {
    id: 3,
    name: "Autralian team",
    country: "Australia",
    image: "/images/volunteer/testimonials/elena-rodriguez.jpeg",
    quote: "Working with the ILife Stream was deeply rewarding. Supporting local families, helping with youth programs, and seeing communities thrive made every day meaningful. It was purpose-driven travel at its best.",
    rating: 5,
    program: "ILife Stream"
  }
];

export default function Testimonials() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-accent text-secondary p-2 rounded-full shadow-lg">
                <Quote className="w-4 h-4" />
              </div>

              <div className="flex flex-col items-center text-center gap-6">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border-4 border-white/10 shadow-xl">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="flex justify-center gap-1 text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-base md:text-lg font-light italic text-white/90 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div>
                  <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/60 uppercase tracking-wider">
                    {testimonial.country}
                    {testimonial.program ? ` • ${testimonial.program}` : ""}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

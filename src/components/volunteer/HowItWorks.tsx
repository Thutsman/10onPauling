"use client";

import * as React from "react";
import { ClipboardCheck, Handshake, Backpack, Heart } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Choose Your Program",
    description: "Select the stream that aligns with your passion and skills."
  },
  {
    icon: Handshake,
    title: "Apply & Get Matched",
    description: "Submit your application and we'll match you with the perfect project."
  },
  {
    icon: Backpack,
    title: "Prepare for Journey",
    description: "Receive your welcome pack and comprehensive pre-departure guide."
  },
  {
    icon: Heart,
    title: "Make an Impact",
    description: "Arrive in Zimbabwe and start your transformative experience."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-sandstone/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your journey to making a difference is simple and supported every step of the way.
          </p>
        </div>

        <div className="relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
             {steps.map((step, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.2 }}
                 className="flex flex-col items-center text-center"
               >
                 <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center mb-6 shadow-lg">
                   <step.icon className="w-8 h-8 text-primary" />
                 </div>
                 <h3 className="font-heading text-xl font-bold text-secondary mb-2">{step.title}</h3>
                 <p className="text-sm text-muted-foreground">{step.description}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}


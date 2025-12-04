"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Clock, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const highlights = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Wines",
  "Cocktails",
  "Craft Beverages",
];

export default function BowerySection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/restaurant/bowery-restaurant.jpg"
          alt="The Bowery Restaurant - Elegant dining space at 10 On Pauling with modern interior design"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.7 }}
            className="bg-background/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-primary/20"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Award-Winning Restaurant
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6">
              The Bowery Restaurant
            </h2>

            <div className="flex items-center gap-2 mb-6 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span className="font-medium">7am - 9pm Daily</span>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A celebration of creativity, flavor and atmosphere. Experience culinary excellence in an elegant setting.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  View Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <DialogHeader className="px-6 pt-6 pb-4 border-b">
                  <DialogTitle className="text-2xl font-heading">
                    The Bowery Restaurant Menu
                  </DialogTitle>
                </DialogHeader>
                <div className="relative w-full h-[75vh] overflow-hidden">
                  <iframe
                    src="/menu/bowery-menu.pdf"
                    className="w-full h-full border-0"
                    title="The Bowery Restaurant Menu"
                  />
                </div>
                <div className="px-6 pb-6 pt-4 border-t flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2"
                  >
                    <a
                      href="/menu/bowery-menu.pdf"
                      download="bowery-restaurant-menu.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" />
                      Download Menu
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


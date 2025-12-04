"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wifi,
  Car,
  Utensils,
  Clock,
  Sparkles,
  Wind,
  Coffee,
  Tv,
  Bath,
  Trees,
  ShieldCheck,
  ConciergeBell,
  Star,
  Briefcase,
  Heart,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import SuiteCard from "@/components/accommodation/SuiteCard";

export default function AccommodationPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Experience Refined Luxury"
        description="Thoughtfully curated suites for the discerning traveler, blending modern comfort with African elegance."
      />

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-3 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Accommodation</span>
        </div>
      </div>

      {/* Suites Section */}
      <section className="container mx-auto px-4 py-16 space-y-8">
        <SuiteCard
          title="Presidential Suite"
          description="The pinnacle of elegance and space. Designed for those who demand the very best, offering unparalleled privacy and luxury."
          price="From $350/night"
          badge="Most Popular"
          badgeColor="bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md"
          images={[
            "/images/accommodation/presidential/presidential-suite-1.jpeg",
            "/images/accommodation/presidential/presidential-suite-2.jpeg",
            "/images/accommodation/presidential/presidential-suite-3.jpeg",
            "/images/accommodation/presidential/presidential-suite-4.jpeg",
          ]}
          amenities={[
            { icon: Star, text: "Dedicated Butler" },
            { icon: Bath, text: "Marble Bathroom" },
            { icon: Wind, text: "Private Lounge" },
            { icon: Wifi, text: "High-Speed Wi-Fi" },
          ]}
          features={[
            "Spacious king bedroom with premium linens",
            "Separate living and dining area",
            "Private terrace with panoramic views",
            "Complimentary mini-bar and Nespresso machine",
            "Ideal for: VIPs, Executives, Honeymooners"
          ]}
        />

        <SuiteCard
          title="Executive Suite"
          description="Perfectly balanced for business or leisure. A sophisticated sanctuary featuring modern amenities and a dedicated workspace."
          price="From $250/night"
          badge="Business Choice"
          badgeColor="bg-secondary text-secondary-foreground"
          isReversed
          images={[
            "/images/accommodation/executive/executive-suite-1.jpeg",
            "/images/accommodation/executive/executive-suite-2.jpeg",
            "/images/accommodation/executive/executive-suite-3.jpeg",
          ]}
          amenities={[
            { icon: Briefcase, text: "Work Station" },
            { icon: Coffee, text: "Coffee Station" },
            { icon: Bath, text: "Walk-in Shower" },
            { icon: Trees, text: "Garden Views" },
          ]}
          features={[
            "Premium king-size bed",
            "Ergonomic workspace with connectivity hub",
            "Smart TV with international channels",
            "Soundproof windows for deep rest",
            "Access to executive lounge"
          ]}
        />

        <SuiteCard
          title="Deluxe Suite"
          description="Stylish and peaceful. An inviting space designed for comfort, making it the perfect base for your Bulawayo adventures."
          price="From $185/night"
          badge="Great Value"
          badgeColor="bg-primary/10 text-primary border border-primary/20"
          images={[
            "/images/accommodation/deluxe/deluxe-suite-1.jpeg",
            "/images/accommodation/deluxe/deluxe-suite-2.jpeg",
          ]}
          amenities={[
            { icon: User, text: "Queen Bedding" },
            { icon: Tv, text: "Smart TV" },
            { icon: Wind, text: "Air Conditioning" },
            { icon: Sparkles, text: "Daily Housekeeping" },
          ]}
          features={[
            "Comfortable queen-size bed",
            "En-suite bathroom with luxury toiletries",
            "Cozy seating area",
            "Complimentary tea and coffee",
            "Perfect for: Solo travelers, Couples"
          ]}
        />
      </section>

      {/* General Amenities Section */}
      <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
         {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="amenities-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#amenities-pattern)" />
            </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Hotel Amenities
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
              Every stay at 10 On Pauling includes access to our premium facilities and services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Wifi, label: "Free High-Speed Wi-Fi" },
              { icon: Car, label: "Secure Parking" },
              { icon: ConciergeBell, label: "24/7 Concierge" },
              { icon: Utensils, label: "Room Service" },
              { icon: Trees, label: "Lush Gardens" },
              { icon: ShieldCheck, label: "24h Security" },
              { icon: Sparkles, label: "Laundry Service" },
              { icon: Heart, label: "Wellness Treatments" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-8 h-8 mb-4 text-accent" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary mb-6">
                Important Information
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                   <div className="p-2 bg-background rounded-full h-fit border border-border">
                     <Clock className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-foreground">Check-in / Check-out</h4>
                     <p className="text-muted-foreground text-sm mt-1">
                       Check-in: 14:00 PM - 22:00 PM <br/>
                       Check-out: 10:00 AM
                     </p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="p-2 bg-background rounded-full h-fit border border-border">
                     <ShieldCheck className="w-5 h-5 text-primary" />
                   </div>
                   <div>
                     <h4 className="font-semibold text-foreground">Cancellation Policy</h4>
                     <p className="text-muted-foreground text-sm mt-1">
                       Free cancellation up to 48 hours before arrival. Late cancellations charged at 50% of first night.
                     </p>
                   </div>
                </li>
              </ul>
            </div>

            <div>
               <h3 className="font-heading text-2xl font-bold text-secondary mb-6">
                Ready to Book?
              </h3>
              <p className="text-muted-foreground mb-8">
                Have special requirements or need assistance planning your stay? Our team is here to help you create the perfect itinerary.
              </p>
              <div className="flex flex-col gap-4">
                 <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white text-lg h-12">
                    Check Availability
                 </Button>
                 <Button variant="outline" size="lg" className="w-full md:w-auto h-12" asChild>
                   <Link href="/contact">Special Request</Link>
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

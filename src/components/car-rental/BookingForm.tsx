"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

export default function BookingForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5 }}
      className="bg-card border rounded-2xl p-6 shadow-lg"
    >
      <h3 className="font-heading text-xl font-bold text-secondary mb-6">Quick Booking Inquiry</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Pick-up Date</label>
            <div className="relative">
              <Input type="date" className="pl-10" />
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
             <label className="text-sm font-medium text-muted-foreground">Return Date</label>
             <div className="relative">
               <Input type="date" className="pl-10" />
               <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
             </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Vehicle Type</label>
          <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
            <option>Executive SUV (Land Cruiser)</option>
            <option>Standard SUV (Fortuner)</option>
            <option>Safari 4x4</option>
            <option>Urban Sedan</option>
          </select>
        </div>

        <div className="space-y-2">
           <label className="text-sm font-medium text-muted-foreground">Add-ons</label>
           <div className="grid grid-cols-2 gap-2">
             <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer border rounded p-2 hover:bg-muted/50">
               <input type="checkbox" className="rounded text-primary focus:ring-primary" />
               Chauffeur
             </label>
             <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer border rounded p-2 hover:bg-muted/50">
               <input type="checkbox" className="rounded text-primary focus:ring-primary" />
               GPS Navigation
             </label>
             <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer border rounded p-2 hover:bg-muted/50">
               <input type="checkbox" className="rounded text-primary focus:ring-primary" />
               Child Seat
             </label>
             <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer border rounded p-2 hover:bg-muted/50">
               <input type="checkbox" className="rounded text-primary focus:ring-primary" />
               Camping Gear
             </label>
           </div>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
          Check Availability
        </Button>
      </form>
    </motion.div>
  );
}


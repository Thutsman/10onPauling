"use client";

import * as React from "react";
import Image from "next/image";
import { Check, Fuel, Settings, Users, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface VehicleCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  specs: {
    seats: number;
    transmission: string;
    fuel: string;
  };
  features: string[];
  idealFor: string;
}

export default function VehicleCard({
  name,
  category,
  price,
  image,
  specs,
  features,
  idealFor,
}: VehicleCardProps) {
  return (
    <div className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      <div className="relative h-56 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading text-2xl font-bold text-secondary">{name}</h3>
          <div className="text-right">
            <span className="block text-lg font-bold text-primary">{price}</span>
            <span className="text-xs text-muted-foreground">per day</span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 py-4 mb-4 border-b border-border/50">
          <div className="flex flex-col items-center text-center px-2">
            <Users className="w-4 h-4 text-muted-foreground mb-1" />
            <span className="text-xs font-medium">{specs.seats} Seats</span>
          </div>
          <div className="flex flex-col items-center text-center px-2 border-l border-border/50">
            <Settings className="w-4 h-4 text-muted-foreground mb-1" />
            <span className="text-xs font-medium">{specs.transmission}</span>
          </div>
          <div className="flex flex-col items-center text-center px-2 border-l border-border/50">
            <Fuel className="w-4 h-4 text-muted-foreground mb-1" />
            <span className="text-xs font-medium">{specs.fuel}</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
             <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Key Features</p>
             <ul className="grid grid-cols-2 gap-2">
               {features.map((feature, idx) => (
                 <li key={idx} className="flex items-center gap-1.5 text-xs text-foreground/80">
                   <Check className="w-3 h-3 text-green-600 shrink-0" />
                   {feature}
                 </li>
               ))}
             </ul>
          </div>
          
          <div className="bg-muted/40 p-3 rounded-lg flex gap-2 items-start">
             <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
             <p className="text-xs text-muted-foreground">
               <span className="font-semibold text-foreground">Ideal for: </span>
               {idealFor}
             </p>
          </div>
        </div>

        <div className="mt-auto space-y-3">
          <Button className="w-full bg-primary text-white hover:bg-primary/90">
            Check Availability
          </Button>
          <div className="flex items-center justify-center gap-2">
             <input type="checkbox" id={`chauffeur-${name}`} className="rounded border-muted-foreground text-primary focus:ring-primary" />
             <label htmlFor={`chauffeur-${name}`} className="text-sm text-muted-foreground cursor-pointer select-none">Add Chauffeur (+$50/day)</label>
          </div>
        </div>
      </div>
    </div>
  );
}


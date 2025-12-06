"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ImageGallery from "./ImageGallery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BookingForm from "@/components/shared/BookingForm";

interface Amenity {
  icon: LucideIcon;
  text: string;
}

interface SuiteCardProps {
  title: string;
  description: string;
  price: string;
  images: string[];
  amenities: Amenity[];
  features: string[];
  isReversed?: boolean;
  badge?: string;
  badgeColor?: string;
}

export default function SuiteCard({
  title,
  description,
  price,
  images,
  amenities,
  features,
  isReversed = false,
  badge,
  badgeColor = "bg-primary text-primary-foreground",
}: SuiteCardProps) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const roomTypeSlug = React.useMemo(() => {
    const map: Record<string, string> = {
      "Presidential Suite": "presidential",
      "Executive Suite": "executive",
      "Deluxe Suite": "deluxe",
    };
    return map[title] ?? "";
  }, [title]);

  return (
    <div className={cn(
      "flex flex-col gap-8 lg:gap-16 py-12 border-b border-border/40 last:border-0",
      isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
    )}>
      {/* Image Gallery Column */}
      <div className="w-full lg:w-1/2">
        <ImageGallery images={images} alt={title} />
      </div>

      {/* Content Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-center justify-between mb-4">
          {badge ? (
            <span className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider", badgeColor)}>
              {badge}
            </span>
          ) : <div></div>}
          <span className="font-heading font-bold text-xl text-primary">
            {price}
          </span>
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
          {title}
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          {description}
        </p>

        {/* Key Amenities Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {amenities.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-foreground/80">
              <div className="p-2 bg-muted rounded-full">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Detailed Features List */}
        <ul className="space-y-2 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => setIsDialogOpen(true)}
          >
            Reserve This Suite
          </Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">Book Your Stay</DialogTitle>
            <DialogDescription>
              Fill out the form below to request a reservation. We&apos;ll confirm your booking within 24 hours.
              Selected suite: <span className="font-semibold text-secondary">{title}</span>
            </DialogDescription>
          </DialogHeader>
          <BookingForm
            initialRoomType={roomTypeSlug}
            onSuccess={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}


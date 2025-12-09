"use client";

import * as React from "react";
import Image from "next/image";
import { Images } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ImageGallery from "@/components/accommodation/ImageGallery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type GalleryCategory = {
  title: string;
  description: string;
  images: string[];
};

const galleryCategories: GalleryCategory[] = [
  {
    title: "Cafe",
    description: "Cozy cafe corners, latte art, and relaxed seating to wind down after a day of exploring Bulawayo.",
    images: [
      "/images/gallery/cafe/cafe-1.jpg",
      "/images/gallery/cafe/cafe-2.jpg",
      "/images/gallery/cafe/cafe-3.jpg",
      "/images/gallery/cafe/cafe-4.jpg",
    ],
  },
  {
    title: "Exterior & Grounds",
    description: "Entrance views, garden pathways, and the surrounding Suburbs neighborhood scenery.",
    images: [
      "/images/gallery/exterior/exterior-1.jpeg",
      "/images/gallery/exterior/exterior-2.jpeg",
      "/images/gallery/exterior/exterior-3.jpeg",
      "/images/gallery/exterior/exterior-4.jpeg",
    ],
  },
  {
    title: "Food & Dining",
    description: "Chef specials, breakfast spreads, and plated dishes from our restaurant partners.",
    images: [
      "/images/gallery/food/food-1.jpeg",
      "/images/gallery/food/food-2.jpeg",
      "/images/gallery/food/food-3.jpeg",
      "/images/gallery/food/food-4.jpeg",
    ],
  },
  {
    title: "Reception & Common Areas",
    description: "Warm welcomes, lounge spaces, and the communal spots guests love to gather.",
    images: [
      "/images/gallery/reception/reception-1.jpeg",
      "/images/gallery/reception/reception-2.jpeg",
      "/images/gallery/reception/reception-3.jpeg",
      "/images/gallery/reception/reception-4.jpeg",
    ],
  },
  {
    title: "Rooms & Suites",
    description: "Bright, comfortable rooms featuring premium linens, modern finishes, and thoughtful amenities.",
    images: [
      "/images/gallery/rooms/rooms-1.jpeg",
      "/images/gallery/rooms/rooms-2.jpeg",
      "/images/gallery/rooms/rooms-3.jpeg",
      "/images/gallery/rooms/rooms-4.jpeg",
    ],
  },
  {
    title: "Team & Moments",
    description: "Our friendly staff, behind-the-scenes moments, and the community that makes 10 On Pauling special.",
    images: [
      "/images/gallery/staff/team-1.jpg",
      "/images/gallery/staff/team-2.jpeg",
      "/images/gallery/staff/team-3.jpeg",
      "/images/gallery/staff/team-4.jpeg",
    ],
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = React.useState<GalleryCategory | null>(null);

  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Gallery"
        description="Take a visual walk through 10 On Pauling — from the cafe and rooms to the spaces where guests gather."
      />

      <SectionWrapper id="gallery" background="muted" pattern>
        <div className="flex flex-col gap-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {galleryCategories.map((category, idx) => {
              const coverImage = category.images[0] || "/images/hero/hero-1.jpg";
              return (
                <motion.button
                  key={category.title}
                  onClick={() => setActiveCategory(category)}
                  className="group overflow-hidden rounded-2xl border border-border bg-white text-left shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ translateY: -6 }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={coverImage}
                      alt={`${category.title} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      priority={idx < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute left-4 bottom-4 flex items-center gap-2 text-white drop-shadow">
                      <Images className="h-5 w-5" />
                      <span className="text-sm font-semibold">{category.images.length} photos</span>
                    </div>
                  </div>

                  <div className="space-y-2 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading text-lg font-semibold text-foreground">{category.title}</h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        View album
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <Dialog
        open={Boolean(activeCategory)}
        onOpenChange={(open) => {
          if (!open) setActiveCategory(null);
        }}
      >
        <DialogContent className="w-[95vw] h-[95vh] max-w-[1800px] p-0 md:p-2">
          {activeCategory && (
            <>
              <DialogHeader className="pb-2">
                <DialogTitle>{activeCategory.title}</DialogTitle>
                <DialogDescription>{activeCategory.description}</DialogDescription>
              </DialogHeader>
              <ImageGallery images={activeCategory.images} alt={`${activeCategory.title} gallery`} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}


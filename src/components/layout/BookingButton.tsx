"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import BookingForm from "@/components/shared/BookingForm";

interface BookingButtonProps {
  className?: string;
  mode?: "navbar" | "floating" | "inline";
}

export default function BookingButton({ className, mode = "inline" }: BookingButtonProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  // Logic to hide floating button when footer is reached could be added here
  // For now, we just implement the styles

  if (mode === "floating") {
    return (
      <>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(210, 105, 30, 0.4)",
                    "0 0 0 10px rgba(210, 105, 30, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="rounded-full"
              >
                <Button
                  size="lg"
                  onClick={() => setIsDialogOpen(true)}
                  className={cn(
                    "rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-6 border-2 border-primary/20",
                    className
                  )}
                >
                  <CalendarCheck className="h-5 w-5 md:mr-2" />
                  <span className="hidden md:inline font-semibold">Book Your Stay</span>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading">Book Your Stay</DialogTitle>
              <DialogDescription>
                Fill out the form below to request a reservation. We'll confirm your booking within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <BookingForm 
              onSuccess={() => {
                setIsDialogOpen(false);
              }}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className={cn(
          "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105",
          className
        )}
        size="lg"
      >
        <CalendarCheck className="mr-2 h-4 w-4" />
        Book Your Stay
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">Book Your Stay</DialogTitle>
            <DialogDescription>
              Fill out the form below to request a reservation. We'll confirm your booking within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <BookingForm 
            onSuccess={() => {
              setIsDialogOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

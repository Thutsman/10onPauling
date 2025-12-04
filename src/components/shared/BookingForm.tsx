"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { validateEmail, validatePhone, validateRequired } from "@/lib/validation";
import { motion, AnimatePresence } from "framer-motion";

interface BookingFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function BookingForm({ onSuccess, className }: BookingFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+263",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "1",
    specialRequests: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!validateRequired(formData.name)) newErrors.name = "Name is required";
    if (!validateEmail(formData.email)) newErrors.email = "Valid email is required";
    if (!validatePhone(formData.phone)) newErrors.phone = "Valid phone number is required";
    if (!validateRequired(formData.checkIn)) newErrors.checkIn = "Check-in date is required";
    if (!validateRequired(formData.checkOut)) newErrors.checkOut = "Check-out date is required";
    if (!validateRequired(formData.roomType)) newErrors.roomType = "Please select a room type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - Replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    onSuccess?.();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={className}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={errors.name ? "border-destructive" : ""}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <div className="flex gap-2">
              <Select value={formData.countryCode} onValueChange={(value) => handleChange("countryCode", value)}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+263">+263 (ZW)</SelectItem>
                  <SelectItem value="+1">+1 (US)</SelectItem>
                  <SelectItem value="+44">+44 (UK)</SelectItem>
                  <SelectItem value="+27">+27 (ZA)</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={errors.phone ? "border-destructive flex-1" : "flex-1"}
                autoComplete="tel"
                placeholder="123 456 7890"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
            </div>
            {errors.phone && (
              <p id="phone-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="checkIn" className="block text-sm font-medium mb-2">
                Check-in Date <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Input
                  id="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleChange("checkIn", e.target.value)}
                  className={errors.checkIn ? "border-destructive" : ""}
                  min={new Date().toISOString().split("T")[0]}
                  aria-invalid={!!errors.checkIn}
                  aria-describedby={errors.checkIn ? "checkin-error" : undefined}
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              {errors.checkIn && (
                <p id="checkin-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.checkIn}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="checkOut" className="block text-sm font-medium mb-2">
                Check-out Date <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Input
                  id="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleChange("checkOut", e.target.value)}
                  className={errors.checkOut ? "border-destructive" : ""}
                  min={formData.checkIn || new Date().toISOString().split("T")[0]}
                  aria-invalid={!!errors.checkOut}
                  aria-describedby={errors.checkOut ? "checkout-error" : undefined}
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              {errors.checkOut && (
                <p id="checkout-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.checkOut}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="roomType" className="block text-sm font-medium mb-2">
                Room Type <span className="text-destructive">*</span>
              </label>
              <Select value={formData.roomType} onValueChange={(value) => handleChange("roomType", value)}>
                <SelectTrigger className={errors.roomType ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="presidential">Presidential Suite</SelectItem>
                  <SelectItem value="executive">Executive Suite</SelectItem>
                  <SelectItem value="deluxe">Deluxe Suite</SelectItem>
                </SelectContent>
              </Select>
              {errors.roomType && (
                <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.roomType}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium mb-2">
                Number of Guests
              </label>
              <Select value={formData.guests} onValueChange={(value) => handleChange("guests", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
              Special Requests
            </label>
            <Textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => handleChange("specialRequests", e.target.value)}
              rows={4}
              placeholder="Any special requests or requirements..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Booking Request"
            )}
          </Button>
        </div>
      </form>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
            >
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </motion.div>
            <DialogTitle className="text-center">Booking Request Submitted!</DialogTitle>
            <DialogDescription className="text-center">
              Thank you for your interest. We'll contact you within 24 hours to confirm your reservation.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}


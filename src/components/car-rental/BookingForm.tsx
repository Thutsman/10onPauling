"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Loader2, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/lib/supabase";

interface BookingFormProps {
  initialVehicleType?: string;
  onSuccess?: () => void;
}

export default function BookingForm({ initialVehicleType, onSuccess }: BookingFormProps) {
  const [pickupDate, setPickupDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [vehicleType, setVehicleType] = React.useState(initialVehicleType || "Executive SUV (Land Cruiser)");
  
  // Update vehicle type when initialVehicleType prop changes
  React.useEffect(() => {
    if (initialVehicleType) {
      setVehicleType(initialVehicleType);
    }
  }, [initialVehicleType]);
  const [addOns, setAddOns] = React.useState<string[]>([]);
  const [isChecking, setIsChecking] = React.useState(false);
  const [isBooking, setIsBooking] = React.useState(false);
  const [showBookingForm, setShowBookingForm] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [availabilityResult, setAvailabilityResult] = React.useState<{
    available: boolean;
    message: string;
  } | null>(null);
  const [error, setError] = React.useState<string>("");
  
  // Customer information for booking
  const [customerName, setCustomerName] = React.useState("");
  const [customerEmail, setCustomerEmail] = React.useState("");
  const [customerPhone, setCustomerPhone] = React.useState("");

  const addOnOptions = ["Chauffeur", "GPS Navigation", "Child Seat", "Camping Gear"];

  const handleAddOnChange = (addOn: string, checked: boolean) => {
    if (checked) {
      setAddOns([...addOns, addOn]);
    } else {
      setAddOns(addOns.filter((item) => item !== addOn));
    }
  };

  const validateForm = () => {
    if (!pickupDate) {
      setError("Please select a pick-up date");
      return false;
    }
    if (!returnDate) {
      setError("Please select a return date");
      return false;
    }
    if (new Date(returnDate) < new Date(pickupDate)) {
      setError("Return date must be on or after pick-up date");
      return false;
    }
    if (new Date(pickupDate) < new Date().toISOString().split("T")[0]) {
      setError("Pick-up date cannot be in the past");
      return false;
    }
    setError("");
    return true;
  };

  const checkAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsChecking(true);
    setAvailabilityResult(null);
    setError("");

    try {
      // Query for overlapping bookings
      // An overlap occurs when:
      // - The requested pickup_date is between an existing booking's pickup_date and return_date, OR
      // - The requested return_date is between an existing booking's pickup_date and return_date, OR
      // - The requested dates completely encompass an existing booking
      // This can be simplified to: pickup_date <= return_date AND return_date >= pickup_date
      
      const { data, error: queryError } = await supabase
        .from('car_rental_requests')
        .select('id, pickup_date, return_date, vehicle_type, status')
        .eq('vehicle_type', vehicleType)
        .gte('return_date', pickupDate)
        .lte('pickup_date', returnDate);

      if (queryError) {
        throw queryError;
      }

      // Filter out cancelled/rejected bookings if needed (only check active/pending bookings)
      const activeBookings = data?.filter(
        (booking) => booking.status === 'pending' || booking.status === 'confirmed'
      ) || [];

      if (activeBookings.length > 0) {
        setAvailabilityResult({
          available: false,
          message: `Sorry, this vehicle is not available for the selected dates. There ${activeBookings.length === 1 ? 'is' : 'are'} ${activeBookings.length} existing booking${activeBookings.length === 1 ? '' : 's'} that overlap with your requested dates.`,
        });
      } else {
        setAvailabilityResult({
          available: true,
          message: `Great! This vehicle is available for your selected dates (${new Date(pickupDate).toLocaleDateString()} - ${new Date(returnDate).toLocaleDateString()}).`,
        });
        setShowBookingForm(true);
      }
    } catch (err: any) {
      console.error('Error checking availability:', err);
      setError(err.message || "Failed to check availability. Please try again.");
    } finally {
      setIsChecking(false);
    }
  };

  const validateBookingForm = () => {
    if (!customerName.trim()) {
      setError("Please enter your name");
      return false;
    }
    if (!customerEmail.trim()) {
      setError("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!customerPhone.trim()) {
      setError("Please enter your phone number");
      return false;
    }
    setError("");
    return true;
  };

  const submitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateBookingForm()) {
      return;
    }

    setIsBooking(true);
    setError("");

    try {
      const bookingData = {
        pickup_date: pickupDate,
        return_date: returnDate,
        vehicle_type: vehicleType,
        add_ons: addOns.length > 0 ? addOns : [],
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
      };

      const { error: bookingError } = await supabase
        .from('car_rental_requests')
        .insert([bookingData]);

      if (bookingError) {
        throw bookingError;
      }

      // Show success dialog
      setShowSuccess(true);
      setShowBookingForm(false);
      
      // Reset form
      setPickupDate("");
      setReturnDate("");
      setVehicleType(initialVehicleType || "Executive SUV (Land Cruiser)");
      setAddOns([]);
      setCustomerName("");
      setCustomerEmail("");
      setCustomerPhone("");
      setAvailabilityResult(null);
      
      // Call onSuccess callback if provided
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err: any) {
      console.error('Error submitting booking:', err);
      setError(err.message || "Failed to submit booking. Please try again.");
    } finally {
      setIsBooking(false);
    }
  };

  const formContent = (
    <div className="bg-card border rounded-2xl p-6 shadow-lg">
      <h3 className="font-heading text-xl font-bold text-secondary mb-6">Quick Booking Inquiry</h3>
      <form className="space-y-4" onSubmit={checkAvailability}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Pick-up Date</label>
            <div className="relative">
              <Input 
                type="date" 
                className="pl-10" 
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div className="space-y-2">
             <label className="text-sm font-medium text-muted-foreground">Return Date</label>
             <div className="relative">
               <Input 
                 type="date" 
                 className="pl-10" 
                 value={returnDate}
                 onChange={(e) => setReturnDate(e.target.value)}
                 min={pickupDate || new Date().toISOString().split("T")[0]}
                 required
               />
               <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
             </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Vehicle Type</label>
          <select 
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option>Executive SUV (Land Cruiser)</option>
            <option>Standard SUV (Fortuner)</option>
            <option>Urban Sedan</option>
          </select>
        </div>

        <div className="space-y-2">
           <label className="text-sm font-medium text-muted-foreground">Add-ons</label>
           <div className="grid grid-cols-2 gap-2">
             {addOnOptions.map((addOn) => (
               <label 
                 key={addOn}
                 className="flex items-center gap-2 text-sm text-foreground cursor-pointer border rounded p-2 hover:bg-muted/50"
               >
                 <input 
                   type="checkbox" 
                   className="rounded text-primary focus:ring-primary"
                   checked={addOns.includes(addOn)}
                   onChange={(e) => handleAddOnChange(addOn, e.target.checked)}
                 />
                 {addOn}
               </label>
             ))}
           </div>
        </div>

        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
            <p className="text-sm text-destructive flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {error}
            </p>
          </div>
        )}

        {availabilityResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-md border ${
              availabilityResult.available
                ? "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800"
                : "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800"
            }`}
          >
            <div className="flex items-start gap-3">
              {availabilityResult.available ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
              )}
              <p className={`text-sm ${
                availabilityResult.available
                  ? "text-green-800 dark:text-green-200"
                  : "text-orange-800 dark:text-orange-200"
              }`}>
                {availabilityResult.message}
              </p>
            </div>
          </motion.div>
        )}

        {showBookingForm && availabilityResult?.available && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-4 pt-4 border-t"
          >
            <h4 className="font-heading font-semibold text-secondary">Complete Your Booking</h4>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Phone Number <span className="text-destructive">*</span>
              </label>
              <Input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="+263 123 456 789"
                required
              />
            </div>

            <Button
              type="button"
              onClick={submitBooking}
              className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
              disabled={isBooking}
            >
              {isBooking ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Booking...
                </>
              ) : (
                "Book Now"
              )}
            </Button>
          </motion.div>
        )}

        {!showBookingForm && (
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
            disabled={isChecking}
          >
            {isChecking ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Checking Availability...
              </>
            ) : (
              "Check Availability"
            )}
          </Button>
        )}
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
              Thank you for your booking request. We'll contact you within 24 hours to confirm your car rental reservation.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );

  // If used in a dialog, return just the form content without the motion wrapper
  if (onSuccess) {
    return formContent;
  }

  // Otherwise, return with motion wrapper for inline use
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5 }}
    >
      {formContent}
    </motion.div>
  );
}


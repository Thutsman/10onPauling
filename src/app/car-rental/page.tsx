"use client";

import * as React from "react";
import { ShieldCheck, Wrench, MapPin, UserCheck } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import VehicleCard from "@/components/car-rental/VehicleCard";
import BookingForm from "@/components/car-rental/BookingForm";
import FadeIn from "@/components/animations/FadeIn";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Map vehicle names to vehicle type values used in the booking form
const getVehicleType = (vehicleName: string): string => {
  const mapping: Record<string, string> = {
    "Toyota Land Cruiser": "Executive SUV (Land Cruiser)",
    "Toyota Fortuner": "Standard SUV (Fortuner)",
    "Toyota Corolla Cross": "Urban Sedan",
  };
  return mapping[vehicleName] || "Executive SUV (Land Cruiser)";
};

export default function CarRentalPage() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [selectedVehicleType, setSelectedVehicleType] = React.useState<string | undefined>(undefined);

  const handleCheckAvailability = React.useCallback((vehicleName: string) => {
    const vehicleType = getVehicleType(vehicleName);
    setSelectedVehicleType(vehicleType);
    setIsDialogOpen(true);
  }, []);

  const handleDialogClose = React.useCallback(() => {
    setIsDialogOpen(false);
    // Reset vehicle type after a delay to allow dialog to close
    setTimeout(() => {
      setSelectedVehicleType(undefined);
    }, 300);
  }, []);
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Travel with Freedom & Comfort"
        description="Premium vehicle rental service tailored for your Zimbabwe adventure. From city cruising to rugged safaris."
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Vehicle Listings Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Executive SUVs */}
            <section>
               <FadeIn fullWidth className="flex items-center gap-2 mb-6">
                 <h2 className="font-heading text-2xl font-bold text-secondary">
                   Executive SUVs
                 </h2>
                 <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded-md">Premium Comfort</span>
               </FadeIn>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <VehicleCard
                   name="Toyota Land Cruiser"
                   category="Executive"
                   price="$120"
                   image="/images/car-rental/toyota-land-cruiser.jpeg"
                   specs={{ seats: 7, transmission: "Auto", fuel: "Diesel" }}
                   features={["4WD Capability", "Leather Interior", "Climate Control", "Safari Ready"]}
                   idealFor="Safari trips, family travel, Victoria Falls transfers"
                   onCheckAvailability={handleCheckAvailability}
                 />
                 <VehicleCard
                   name="Toyota Fortuner"
                   category="Standard SUV"
                   price="$100"
                   image="/images/car-rental/toyota-fortuner.jpeg"
                   specs={{ seats: 7, transmission: "Auto", fuel: "Diesel" }}
                   features={["4WD Capability", "Modern Tech", "High Clearance", "Spacious Boot"]}
                   idealFor="Road trips, comfortable touring, mixed terrain"
                   onCheckAvailability={handleCheckAvailability}
                 />
               </div>
            </section>

            {/* Urban */}
            <section>
               <FadeIn fullWidth className="flex items-center gap-2 mb-6">
                 <h2 className="font-heading text-2xl font-bold text-secondary">
                   Urban Touring
                 </h2>
                 <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded-md">City Comfort</span>
               </FadeIn>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <VehicleCard
                   name="Toyota Corolla Cross"
                   category="Urban"
                   price="$60"
                   image="/images/car-rental/toyota-corolla-cross.jpeg"
                   specs={{ seats: 5, transmission: "Auto", fuel: "Petrol" }}
                   features={["Fuel Efficient", "Easy Parking", "CarPlay/Android Auto", "Comfortable"]}
                   idealFor="Bulawayo city driving, short day trips"
                   onCheckAvailability={handleCheckAvailability}
                 />
               </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Booking Form Sticky */}
            <FadeIn fullWidth className="sticky top-24">
               <BookingForm />

               {/* Info Cards */}
               <div className="mt-8 space-y-6">
                 <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/10">
                   <h4 className="font-heading font-bold text-secondary mb-4">Why Rent With Us?</h4>
                   <ul className="space-y-4">
                     <li className="flex gap-3">
                       <div className="p-2 bg-background rounded-full shadow-sm text-primary">
                         <ShieldCheck className="w-4 h-4" />
                       </div>
                       <div className="text-sm">
                         <strong className="block text-foreground">Comprehensive Insurance</strong>
                         <span className="text-muted-foreground">Drive with peace of mind.</span>
                       </div>
                     </li>
                     <li className="flex gap-3">
                       <div className="p-2 bg-background rounded-full shadow-sm text-primary">
                         <Wrench className="w-4 h-4" />
                       </div>
                       <div className="text-sm">
                         <strong className="block text-foreground">24/7 Roadside Support</strong>
                         <span className="text-muted-foreground">Help is just a call away.</span>
                       </div>
                     </li>
                     <li className="flex gap-3">
                       <div className="p-2 bg-background rounded-full shadow-sm text-primary">
                         <MapPin className="w-4 h-4" />
                       </div>
                       <div className="text-sm">
                         <strong className="block text-foreground">GPS & Navigation</strong>
                         <span className="text-muted-foreground">Never get lost on your journey.</span>
                       </div>
                     </li>
                     <li className="flex gap-3">
                       <div className="p-2 bg-background rounded-full shadow-sm text-primary">
                         <UserCheck className="w-4 h-4" />
                       </div>
                       <div className="text-sm">
                         <strong className="block text-foreground">Chauffeur Option</strong>
                         <span className="text-muted-foreground">Relax and let us drive.</span>
                       </div>
                     </li>
                   </ul>
                 </div>

                 <div className="bg-muted p-6 rounded-xl">
                   <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-foreground">Rental Requirements</h4>
                   <ul className="list-disc list-inside text-sm space-y-2 text-foreground">
                     <li>Valid Driver's License (English)</li>
                     <li>Minimum age: 23 years</li>
                     <li>Credit Card for security deposit</li>
                     <li>Passport / ID</li>
                   </ul>
                 </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Booking Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">Car Rental Booking</DialogTitle>
            <DialogDescription>
              Check availability and book your vehicle. We'll confirm your booking within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <BookingForm 
            initialVehicleType={selectedVehicleType}
            onSuccess={handleDialogClose}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

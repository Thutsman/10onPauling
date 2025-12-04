"use client";

import * as React from "react";
import { ShieldCheck, Wrench, MapPin, UserCheck } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import VehicleCard from "@/components/car-rental/VehicleCard";
import BookingForm from "@/components/car-rental/BookingForm";

export default function CarRentalPage() {
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
               <h2 className="font-heading text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                 Executive SUVs
                 <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded-md">Premium Comfort</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <VehicleCard
                   name="Toyota Land Cruiser"
                   category="Executive"
                   price="$120"
                   image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop"
                   specs={{ seats: 7, transmission: "Auto", fuel: "Diesel" }}
                   features={["4WD Capability", "Leather Interior", "Climate Control", "Safari Ready"]}
                   idealFor="Safari trips, family travel, Victoria Falls transfers"
                 />
                 <VehicleCard
                   name="Toyota Fortuner"
                   category="Standard SUV"
                   price="$100"
                   image="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=2072&auto=format&fit=crop"
                   specs={{ seats: 7, transmission: "Auto", fuel: "Diesel" }}
                   features={["4WD Capability", "Modern Tech", "High Clearance", "Spacious Boot"]}
                   idealFor="Road trips, comfortable touring, mixed terrain"
                 />
               </div>
            </section>

            {/* Safari Vehicles */}
            <section>
               <h2 className="font-heading text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                 Safari & Adventure
                 <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded-md">Off-Road Ready</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <VehicleCard
                   name="Ford Ranger 4x4"
                   category="Adventure"
                   price="$110"
                   image="https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2070&auto=format&fit=crop"
                   specs={{ seats: 5, transmission: "Auto", fuel: "Diesel" }}
                   features={["Heavy Duty 4WD", "Roof Rack", "All-Terrain Tires", "Long Range Tank"]}
                   idealFor="Hwange, Matobo, self-drive safaris"
                 />
               </div>
            </section>

            {/* Urban */}
            <section>
               <h2 className="font-heading text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                 Urban Touring
                 <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded-md">City Comfort</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <VehicleCard
                   name="Toyota Corolla Cross"
                   category="Urban"
                   price="$60"
                   image="https://images.unsplash.com/photo-1623869675781-80aa31012a5a?q=80&w=2070&auto=format&fit=crop"
                   specs={{ seats: 5, transmission: "Auto", fuel: "Petrol" }}
                   features={["Fuel Efficient", "Easy Parking", "CarPlay/Android Auto", "Comfortable"]}
                   idealFor="Bulawayo city driving, short day trips"
                 />
               </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Booking Form Sticky */}
            <div className="sticky top-24">
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
                   <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-muted-foreground">Rental Requirements</h4>
                   <ul className="list-disc list-inside text-sm space-y-2 text-secondary-foreground/80">
                     <li>Valid Driver's License (English)</li>
                     <li>Minimum age: 23 years</li>
                     <li>Credit Card for security deposit</li>
                     <li>Passport / ID</li>
                   </ul>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

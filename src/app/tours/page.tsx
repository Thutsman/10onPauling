"use client";

import * as React from "react";
import { Calendar as CalendarIcon, Info, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import TourCard from "@/components/tours/TourCard";
import FadeIn from "@/components/animations/FadeIn";

export default function ToursPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Discover the Magic of Zimbabwe"
        description="Exclusive guided tours to extraordinary destinations, from the thunder of Victoria Falls to the silence of Matobo Hills."
      />

      {/* Tour Categories */}
      <section className="container mx-auto px-4 py-16 space-y-16">
        
        {/* Victoria Falls */}
        <FadeIn fullWidth>
          <TourCard
            destination="Victoria Falls"
            tagline="One of the Seven Natural Wonders"
            description="Experience the sheer power and beauty of the world's largest sheet of falling water. Known locally as 'Mosi-oa-Tunya' (The Smoke That Thunders), this UNESCO World Heritage site offers heart-pounding adventure and breathtaking scenery."
            image="/images/tours/victoria-falls.jpg"
            features={{
              duration: "1 - 3 Days",
              groupSize: "Small Groups & Private",
              difficulty: "Easy to Moderate",
              bestTime: "Feb - May (High Water)"
            }}
            options={[
              {
                title: "Guided Tour of the Falls",
                duration: "2.5 Hours",
                price: "From $30 pp",
                description: "A guided walking tour through the rainforest with spectacular viewpoints of the Main Falls, Horseshoe Falls, and Devil's Cataract.",
                includes: ["Professional Guide", "Raincoats", "Mineral Water", "Transfers"]
              },
              {
                title: "Flight of Angels Helicopter",
                duration: "12 - 15 Minutes",
                price: "From $150 pp",
                description: "Experience the Falls from above. The best way to appreciate the true magnitude of this natural wonder.",
                includes: ["Hotel Pick-up", "Flight", "Park Fees"]
              },
              {
                title: "Zambezi Sunset Cruise",
                duration: "2 Hours",
                price: "From $50 pp",
                description: "Relax on the upper deck of a luxury boat while watching wildlife and a spectacular African sunset.",
                includes: ["Snacks & Drinks", "River Cruise", "Transfers"]
              }
            ]}
          />
        </FadeIn>

        {/* Hwange National Park */}
        <FadeIn fullWidth delay={0.05}>
          <TourCard
            destination="Hwange National Park"
            tagline="Africa's Largest Elephant Population"
            description="Zimbabwe's largest game reserve is a wildlife haven, home to over 100 mammal species and 400 bird species. It is particularly famous for its massive herds of elephants and buffalo."
            image="/images/tours/hwange-national-park.jpg"
            features={{
              duration: "Full Day / Overnight",
              groupSize: "Max 6 per vehicle",
              difficulty: "Easy",
              bestTime: "July - Oct (Dry Season)"
            }}
            options={[
              {
                title: "Full Day Safari Game Drive",
                duration: "10 Hours",
                price: "From $180 pp",
                description: "An immersive day trip into Hwange. Explore diverse landscapes and spot the Big Five with our expert guides.",
                includes: ["Park Fees", "Lunch & Drinks", "Guide", "4x4 Vehicle"]
              },
              {
                title: "The Elephant Experience",
                duration: "Half Day",
                price: "From $120 pp",
                description: "Get up close with these majestic giants at a dedicated sanctuary or popular waterhole hide.",
                includes: ["Transfers", "Guide", "Refreshments"]
              }
            ]}
          />
        </FadeIn>

        {/* Matobo Hills */}
        <FadeIn fullWidth delay={0.1}>
          <TourCard
            destination="Matobo Hills"
            tagline="UNESCO World Heritage Site"
            description="A landscape of balancing granite rocks and ancient history. Matobo holds great spiritual significance and offers a unique combination of history, nature, and wildlife."
            image="/images/tours/matobo-hills.jpeg"
            features={{
              duration: "Half / Full Day",
              groupSize: "Private Available",
              difficulty: "Moderate (Hiking)",
              bestTime: "Year-round"
            }}
            options={[
              {
                title: "Rhino Tracking on Foot",
                duration: "4 Hours",
                price: "From $90 pp",
                description: "An exhilarating experience tracking white rhino on foot with armed rangers. A rare opportunity to see these endangered animals up close.",
                includes: ["Park Fees", "Ranger Guide", "Water", "Transfers"]
              },
              {
                title: "World's View & Rhodes Grave",
                duration: "3 Hours",
                price: "From $40 pp",
                description: "Visit the summit of Malindidzimu, known as 'View of the World', offering 360-degree panoramas of the Matobo landscape.",
                includes: ["Entry Fees", "Guide", "Refreshments"]
              },
              {
                title: "Ancient Rock Art Tour",
                duration: "Half Day",
                price: "From $50 pp",
                description: "Explore caves adorned with San bushman paintings dating back thousands of years.",
                includes: ["Cave Entry", "Guide", "Transfers"]
              }
            ]}
          />
        </FadeIn>

        {/* Bulawayo City */}
        <FadeIn fullWidth delay={0.15}>
          <TourCard
            destination="Bulawayo Experiences"
            tagline="Discover the City of Kings"
            description="Immerse yourself in the rich history and culture of Zimbabwe's second-largest city. From colonial architecture to vibrant township life."
            image="/images/tours/bulawayo-city.jpg"
            features={{
              duration: "2 - 5 Hours",
              groupSize: "Small Groups",
              difficulty: "Easy Walking",
              bestTime: "Year-round"
            }}
            options={[
              {
                title: "Half-Day City Heritage Tour",
                duration: "4 Hours",
                price: "From $40 pp",
                description: "Visit the Natural History Museum, Railway Museum, and admire the historic architecture of the city center.",
                includes: ["Museum Fees", "Guide", "Transfers"]
              },
              {
                title: "Township Cultural Experience",
                duration: "3 Hours",
                price: "From $35 pp",
                description: "Visit the vibrant western suburbs, meet local artists at the art center, and experience authentic daily life.",
                includes: ["Local Guide", "Transfers", "Donation to Community"]
              }
            ]}
          />
        </FadeIn>
      </section>

      {/* Booking Info Banner */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <FadeIn fullWidth>
            <h2 className="font-heading text-3xl font-bold mb-6 text-primary-foreground">Plan Your Adventure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                 <Info className="w-8 h-8 mx-auto mb-4 text-accent" />
                 <h3 className="font-bold mb-2">Custom Itineraries</h3>
                 <p className="text-sm opacity-80">We can tailor any tour to your specific interests and schedule.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                 <Users className="w-8 h-8 mx-auto mb-4 text-accent" />
                 <h3 className="font-bold mb-2">Group Discounts</h3>
                 <p className="text-sm opacity-80">Traveling with family or friends? Ask about our special group rates.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                 <CalendarIcon className="w-8 h-8 mx-auto mb-4 text-accent" />
                 <h3 className="font-bold mb-2">Combo Packages</h3>
                 <p className="text-sm opacity-80">Combine accommodation, car rental, and tours for the best value.</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Contact Reservations
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

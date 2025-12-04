"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Camera, Globe, CheckCircle2, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import ProgramCard from "@/components/volunteer/ProgramCard";
import Testimonials from "@/components/volunteer/Testimonials";
import ImpactMetrics from "@/components/volunteer/ImpactMetrics";
import HowItWorks from "@/components/volunteer/HowItWorks";
import VolunteerFAQ from "@/components/volunteer/FAQ";

export default function VolunteerPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
            className="object-cover w-full h-full"
          >
            <source src="/videos/volunteer-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container relative z-10 text-center px-4 text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 text-sm font-semibold tracking-wider uppercase"
          >
            Measurable Impact • Meaningful Experiences
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg"
          >
            Transform Lives, <br/> Transform Yourself
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/90 font-light drop-shadow-md"
          >
            Partner with leading conservation and community organizations in the heart of Zimbabwe.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
             <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg w-full sm:w-auto" asChild>
                <Link href="#programs">
                  Explore Programs
                </Link>
             </Button>

             <Dialog>
               <DialogTrigger asChild>
                 <Button 
                   variant="outline" 
                   size="lg" 
                   className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto rounded-full shadow-lg gap-3 w-full sm:w-auto"
                 >
                   <Play className="w-5 h-5 fill-current" />
                   Watch Video
                 </Button>
               </DialogTrigger>
               <DialogContent className="max-w-6xl p-0 bg-black border-none overflow-hidden">
                 <DialogTitle className="sr-only">Volunteer Experience Video</DialogTitle>
                 <div className="aspect-video w-full">
                   <video
                     controls
                     autoPlay
                     className="w-full h-full"
                   >
                     <source src="/videos/volunteer-hero.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                   </video>
                 </div>
               </DialogContent>
             </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactMetrics />

      {/* Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
               Why Volunteer with 10 On Pauling?
             </h2>
             <p className="text-lg text-muted-foreground leading-relaxed mb-12">
               We believe that travel should be transformative. By connecting you with authentic, grassroots initiatives, we ensure your skills and passion are directed where they are needed most. Whether you're teaching a child to read or tracking endangered wildlife, every moment counts.
             </p>
           </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-muted/30" id="programs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">Our Volunteer Streams</h2>
            <p className="text-muted-foreground">Choose the path that speaks to your heart.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="ILife Stream"
              price="$1,000/week"
              description="Empower the next generation through education and community support initiatives."
              image="/images/volunteer/programs/ilife-stream.jpg"
              icon={Heart}
              focusAreas={["Community Upliftment", "Youth Empowerment", "Education Support", "Nutrition"]}
              whatYoullDo={[
                "Assist in local classrooms",
                "Facilitate after-school sports",
                "Support community garden projects",
                "Help with nutritional programs"
              ]}
              whoShouldApply="Ideal for students, teachers, and anyone with a passion for people and community development."
              color="border-earth/20"
              accentColor="text-earth"
            />

            <ProgramCard
              title="Photography Stream"
              price="$1,000/week"
              description="Capture the untold stories of Zimbabwe's wildlife and people while building your portfolio."
              image="/images/volunteer/programs/photography-stream.jpeg"
              icon={Camera}
              focusAreas={["Wildlife Photography", "Conservation Storytelling", "Media Documentation", "Portfolio Building"]}
              whatYoullDo={[
                "Document wildlife behavior",
                "Create visual content for NGOs",
                "Receive professional mentorship",
                "Edit and curate your portfolio"
              ]}
              whoShouldApply="Perfect for aspiring photographers, content creators, and visual storytellers."
              color="border-primary/20"
              accentColor="text-primary"
            />

            <ProgramCard
              title="Conservation Stream"
              price="$1,000/week"
              description="Join the frontline of wildlife protection and ecological sustainability efforts."
              image="/images/volunteer/programs/conservation-stream.jpeg"
              icon={Globe}
              focusAreas={["Wildlife Monitoring", "Anti-Poaching Support", "Ecological Surveys", "Sustainability"]}
              whatYoullDo={[
                "Track key species in the field",
                "Assist with snare sweeps",
                "Conduct biodiversity surveys",
                "Maintain park infrastructure"
              ]}
              whoShouldApply="Suited for nature lovers, biology students, and those wanting hands-on conservation experience."
              color="border-safari/20"
              accentColor="text-safari"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* What's Included */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-white/10">
                <Image
                  src="/images/volunteer/volunteer-accommodation.jpeg"
                  alt="Luxury accommodation at 10 On Pauling - Your home away from home during your volunteer experience"
                  fill
                  className="object-cover"
                />
             </div>
             <div>
               <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                 Your Home Away From Home
               </h2>
               <p className="text-white/80 mb-8 leading-relaxed">
                 Unlike typical volunteer programs, we don't believe you need to rough it to make a difference. Return each day to the comfort and serenity of 10 On Pauling.
               </p>
               
               <h3 className="font-bold text-xl text-white mb-4">What's Included:</h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   "Luxury Accommodation",
                   "Airport Transfers",
                   "All Project Transport",
                   "Program Coordination",
                   "24/7 Local Support",
                   "Certificate of Completion",
                   "Orientation & Training",
                   "Wi-Fi & Amenities"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-white/90">
                     <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <VolunteerFAQ />

      {/* Final CTA */}
      <section className="py-32 bg-accent text-secondary text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <Image src="/images/hero/hero-1.jpg" alt="Background" fill className="object-cover" />
         </div>
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Join us in Bulawayo for an experience that will change your life and the lives of others.
            </p>
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-lg px-10 py-8 h-auto shadow-xl" asChild>
              <a href="mailto:volunteer@10onpauling.com">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="mt-6 text-sm font-semibold opacity-70">
              Questions? Email us at volunteer@10onpauling.com
            </p>
         </div>
      </section>
    </div>
  );
}

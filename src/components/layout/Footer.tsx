"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Award } from "lucide-react";
import NewsletterSignup from "@/components/shared/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden pt-20 pb-10">
      {/* African Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="african-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
               <path d="M0 30 L30 0 L60 30 L30 60 Z M15 30 L30 15 L45 30 L30 45 Z" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#african-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* About Section */}
          <div className="space-y-6">
            <div className="mb-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/white-logo.svg"
                  alt="10 On Pauling Logo"
                  width={800}
                  height={280}
                  className="h-48 w-auto"
                  priority
                />
              </Link>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md font-light">
              Experience luxury accommodation, wildlife tours, and volunteer experiences in Zimbabwe's Southern region. Your gateway to authentic African hospitality.
            </p>
            <div className="flex items-center gap-4 pt-2">
               <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm shadow-sm">
                 <Award className="w-4 h-4 text-accent" />
                 <span className="text-xs font-medium text-white/90">TripAdvisor Choice</span>
               </div>
               <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm shadow-sm">
                 <Award className="w-4 h-4 text-accent" />
                 <span className="text-xs font-medium text-white/90">Superhost</span>
               </div>
            </div>
          </div>
          
          {/* Quick Links & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
                <h4 className="font-heading text-lg font-semibold mb-6 text-accent">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                {[
                    { label: "Accommodation", href: "/accommodation" },
                    { label: "Tours & Safaris", href: "/tours" },
                    { label: "Volunteer", href: "/volunteer-experience" },
                    { label: "Car Rental", href: "/car-rental" },
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms of Service", href: "/terms" },
                ].map((link) => (
                    <li key={link.label}>
                    <Link href={link.href} className="text-white/80 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                        <span className="h-px w-0 bg-accent group-hover:w-3 transition-all duration-300" />
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-heading text-lg font-semibold mb-6 text-accent">Contact Us</h4>
                <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3 group">
                    <MapPin className="w-5 h-5 text-accent shrink-0 group-hover:text-white transition-colors" />
                    <span>10 Pauling Road, Suburbs<br />Bulawayo, Zimbabwe</span>
                </li>
                <li className="flex items-center gap-3 group">
                    <Phone className="w-5 h-5 text-accent shrink-0 group-hover:text-white transition-colors" />
                    <span>+263 12 345 6789</span>
                </li>
                <li className="flex items-center gap-3 group">
                    <Mail className="w-5 h-5 text-accent shrink-0 group-hover:text-white transition-colors" />
                    <a href="mailto:info@10onpauling.com" className="hover:text-accent transition-colors">info@10onpauling.com</a>
                </li>
                </ul>
                
                <div className="flex gap-4 mt-6">
                {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Twitter, label: "Twitter" },
                ].map((social) => (
                    <a 
                    key={social.label}
                    href="#" 
                    className="bg-accent text-secondary p-2 rounded-full hover:bg-white hover:text-accent transition-all duration-300 shadow-md" 
                    aria-label={social.label}
                    >
                    <social.icon className="w-5 h-5" />
                    </a>
                ))}
                </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl">
            <h4 className="font-heading text-xl font-semibold mb-2 text-accent">Join Our Newsletter</h4>
            <p className="text-sm text-white/70 mb-4">Get the latest updates and exclusive offers from Zimbabwe.</p>
            <NewsletterSignup variant="inline" theme="dark" />
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} 10 On Pauling. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500 animate-pulse">❤️</span> in Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  );
}

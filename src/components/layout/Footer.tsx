"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone, Award } from "lucide-react";
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
                    <span>+263 71 070 6054</span>
                </li>
                <li className="flex items-center gap-3 group">
                    <Mail className="w-5 h-5 text-accent shrink-0 group-hover:text-white transition-colors" />
                    <a href="mailto:info@10onpaulinghotel.com" className="hover:text-accent transition-colors">info@10onpaulinghotel.com</a>
                </li>
                </ul>
                
                <div className="flex gap-4 mt-6">
                <a
                  href="https://www.facebook.com/share/17PhKoGTiX/"
                  className="p-2 rounded-full transition-all duration-300 shadow-md"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: "#1877F2" }}
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full transition-all duration-300 shadow-md"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://wa.me/263710706054?text=Hi%2010%20On%20Pauling%2C%20I%27d%20like%20to%20chat%20about%20a%20booking."
                  className="p-2 rounded-full transition-all duration-300 shadow-md"
                  aria-label="WhatsApp"
                  style={{ backgroundColor: "#25D366" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="inline-block"
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundImage:
                        "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22><path fill=%22white%22 d=%22M16 0C7.164 0 0 6.99 0 15.614c0 3.051 1.023 5.883 2.77 8.176L0 32l8.427-2.635c2.242 1.23 4.82 1.917 7.573 1.917 8.836 0 16-6.99 16-15.614C32 6.99 24.836 0 16 0zm0 28.864c-2.477 0-4.778-.66-6.76-1.804l-.484-.287-4.99 1.561 1.62-4.73-.316-.494C3.397 21.224 2.63 18.97 2.63 16.386 2.63 8.86 8.527 2.75 16 2.75c7.474 0 13.37 6.11 13.37 13.636 0 7.526-5.896 13.636-13.37 13.636zm7.36-9.924c-.405-.202-2.393-1.18-2.765-1.314-.371-.135-.643-.202-.914.202-.27.404-1.049 1.314-1.287 1.584-.238.27-.475.303-.88.101-.405-.202-1.708-.624-3.253-1.99-1.202-1.07-2.013-2.39-2.251-2.794-.238-.404-.025-.623.18-.825.185-.185.405-.48.607-.72.202-.238.27-.404.405-.673.135-.27.068-.506-.034-.708-.101-.202-.914-2.2-1.25-3.013-.33-.79-.667-.682-.914-.695-.238-.012-.512-.015-.784-.015-.27 0-.708.101-1.08.506-.371.404-1.416 1.383-1.416 3.37 0 1.986 1.45 3.903 1.65 4.173.202.27 2.842 4.342 6.888 6.098.963.416 1.716.664 2.304.85.967.308 1.847.265 2.543.161.776-.116 2.393-.977 2.73-1.92.338-.943.338-1.75.236-1.92-.101-.169-.37-.27-.776-.472z%22/></svg>')",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </a>
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

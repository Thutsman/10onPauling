"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import BookingButton from "./BookingButton";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Accommodation", href: "/accommodation" },
  { name: "Volunteer", href: "/volunteer-experience" },
  { name: "Tours", href: "/tours" },
  { name: "Car Rental", href: "/car-rental" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  // Hide navbar on admin pages
  if (pathname.startsWith("/admin")) {
    return null;
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 w-full transition-all duration-500",
          "pt-[max(0.75rem,env(safe-area-inset-top))]",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md pb-2 md:pb-1"
            : "bg-transparent pb-3 md:pb-2"
        )}
      >
        <div
          className={cn(
            "container mx-auto flex items-center justify-between gap-3 px-4 md:px-8",
            "pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]",
            "min-h-[64px]"
          )}
        >
          <Link href="/" className="relative z-50 flex items-center group shrink-0">
            {/* Mobile logo (no padded container) */}
            <div className="md:hidden">
              <Image
                src="/images/logo/logo.svg"
                alt="10 On Pauling Logo"
                width={720}
                height={240}
                className="h-20 w-auto transition-opacity duration-300"
                priority
              />
            </div>
            {/* Desktop logo (no padded container) */}
            <div className="hidden md:block transition-all duration-300">
              <Image
                src="/images/logo/logo.svg"
                alt="10 On Pauling Logo"
                width={720}
                height={240}
                className={cn(
                  "h-24 lg:h-36 w-auto transition-opacity duration-300",
                  isScrolled ? "opacity-100" : "opacity-100 drop-shadow-md"
                )}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group py-1"
              >
                <span className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  pathname === item.href 
                    ? "text-accent" 
                    : isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-accent drop-shadow-sm"
                )}>
                  {item.name}
                </span>
                {pathname === item.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent"
                  />
                )}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
            <BookingButton mode="navbar" className={isScrolled ? "" : "bg-accent text-accent-foreground hover:bg-accent/90 border-none shadow-lg"} />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50 shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={cn("transition-colors", isScrolled ? "text-foreground" : "text-white")}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* African Pattern Border Bottom (Only when scrolled) */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-1.5 overflow-hidden transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )}>
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <pattern id="nav-pattern" x="0" y="0" width="20" height="6" patternUnits="userSpaceOnUse">
              <path d="M0 6 L10 0 L20 6 Z" fill="var(--primary)" opacity="0.8" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#nav-pattern)" />
          </svg>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-30 bg-background/98 backdrop-blur-xl md:hidden flex flex-col justify-center px-8"
          >
            {/* Background Pattern for Menu */}
            <div className="absolute inset-0 opacity-5 pointer-events-none z-[-1]">
               <svg width="100%" height="100%">
                 <pattern id="mobile-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                   <circle cx="20" cy="20" r="2" fill="currentColor" />
                   <path d="M0 20 L40 20 M20 0 L20 40" stroke="currentColor" strokeWidth="0.5" />
                 </pattern>
                 <rect width="100%" height="100%" fill="url(#mobile-pattern)" />
               </svg>
            </div>

            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block text-3xl font-heading font-bold tracking-tight transition-colors",
                      pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-8">
                <BookingButton mode="inline" className="w-full text-lg py-6" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { validateEmail } from "@/lib/validation";
import { motion, AnimatePresence } from "framer-motion";

interface NewsletterSignupProps {
  className?: string;
  variant?: "inline" | "modal";
  theme?: "light" | "dark";
}

export default function NewsletterSignup({ className, variant = "inline", theme = "light" }: NewsletterSignupProps) {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Styles based on theme
  const inputStyles = theme === "dark" 
    ? "bg-white text-black border-transparent placeholder:text-gray-500 focus-visible:ring-accent" 
    : "";
    
  const buttonStyles = theme === "dark"
    ? "bg-accent hover:bg-accent/90 text-secondary font-semibold"
    : "bg-primary hover:bg-primary/90 text-white";

  const errorColor = theme === "dark" ? "text-red-300" : "text-destructive";
  const successColor = theme === "dark" ? "text-green-400" : "text-green-600";
  const disclaimerColor = theme === "dark" ? "text-white/60" : "text-muted-foreground";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - Replace with actual newsletter API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (variant === "modal" && isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
      >
        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
        <p className="text-sm text-green-800">Thank you for subscribing!</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-3">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className={`${error ? "border-red-400 ring-1 ring-red-400" : ""} ${inputStyles}`}
            autoComplete="email"
            aria-label="Email address for newsletter"
            aria-invalid={!!error}
            aria-describedby={error ? "newsletter-error" : undefined}
            disabled={isSubmitting || isSuccess}
          />
          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={`${buttonStyles} shrink-0`}
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : isSuccess ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              id="newsletter-error"
              className={`text-sm ${errorColor} flex items-center gap-1`}
            >
              <AlertCircle className="w-3 h-3" /> {error}
            </motion.p>
          )}
          {isSuccess && variant === "inline" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-sm ${successColor} flex items-center gap-1`}
            >
              <CheckCircle2 className="w-3 h-3" /> Successfully subscribed!
            </motion.p>
          )}
        </AnimatePresence>

        <p className={`text-xs ${disclaimerColor}`}>
          By subscribing, you agree to our privacy policy. Unsubscribe at any time.
        </p>
      </div>
    </form>
  );
}


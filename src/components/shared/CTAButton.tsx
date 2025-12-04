"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ComponentProps<typeof Button> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function CTAButton({
  children,
  className,
  isLoading,
  leftIcon,
  rightIcon,
  variant = "default",
  ...props
}: CTAButtonProps) {
  return (
    <Button
      className={cn(
        "transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg",
        isLoading && "opacity-70 cursor-not-allowed",
        className
      )}
      disabled={isLoading || props.disabled}
      variant={variant}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </Button>
  );
}


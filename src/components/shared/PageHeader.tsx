import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-secondary text-secondary-foreground py-24 px-4 text-center relative overflow-hidden", className)}>
      {/* Abstract Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="header-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
               <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#header-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
          {title}
        </h1>
        {description && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}


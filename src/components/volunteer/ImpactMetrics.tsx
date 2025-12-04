"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Users, TreePine, Heart, Globe2 } from "lucide-react";

const metrics = [
  {
    id: 1,
    label: "Volunteers Hosted",
    value: 500,
    suffix: "+",
    icon: Users,
    color: "text-primary"
  },
  {
    id: 2,
    label: "Communities Supported",
    value: 12,
    suffix: "",
    icon: Heart,
    color: "text-red-500"
  },
  {
    id: 3,
    label: "Trees Planted",
    value: 2500,
    suffix: "+",
    icon: TreePine,
    color: "text-green-600"
  },
  {
    id: 4,
    label: "Nationalities",
    value: 35,
    suffix: "+",
    icon: Globe2,
    color: "text-blue-500"
  }
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function ImpactMetrics() {
  return (
    <section className="py-16 bg-background border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-muted rounded-full">
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

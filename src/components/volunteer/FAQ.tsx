"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a visa to volunteer in Zimbabwe?",
    answer: "Yes, most international volunteers require a visa. We assist with the necessary documentation for a Volunteer Visa or Business Visa upon acceptance into the program."
  },
  {
    question: "Is it safe for solo travelers?",
    answer: "Absolutely. Bulawayo is known for its safety and friendly community. 10 On Pauling provides secure accommodation and 24/7 support throughout your stay."
  },
  {
    question: "What is included in the program fee?",
    answer: "The fee covers your luxury accommodation, airport transfers, daily transport to project sites, program coordination, and 24/7 in-country support. Flights and personal insurance are not included."
  },
  {
    question: "Do I need specific qualifications?",
    answer: "Most programs are open to all. However, the Photography Stream is best suited for those with basic camera knowledge, and some community projects may benefit from specific skills (teaching, medical, etc.)."
  },
  {
    question: "What should I pack?",
    answer: "We provide a detailed packing list upon confirmation. Generally, comfortable neutral-colored clothing for field work, sun protection, and a good pair of walking shoes are essential."
  }
];

export default function VolunteerFAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before you go.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-heading font-semibold text-lg text-secondary hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}


"use client";

import FadeIn from "@/components/animations/FadeIn";
import PageHeader from "@/components/shared/PageHeader";

const sections = [
  {
    title: "Stays & Bookings",
    items: [
      "Reservations are confirmed once payment or deposit terms shared in your quote are met.",
      "Check-in 2:00pm • Check-out 10:00am. Early/late options are subject to availability and may incur a fee.",
      "Please share special requests (dietary, accessibility, celebrations) in advance so we can prepare.",
    ],
  },
  {
    title: "Payments & Cancellation",
    items: [
      "Rates are quoted in USD unless stated otherwise and may include local taxes/levies where applicable.",
      "Cancellations or date changes are subject to the policy shared at booking. No-shows may forfeit deposits.",
      "Third-party experiences (tours, activities, transfers) may carry their own cancellation rules.",
    ],
  },
  {
    title: "Guest Conduct & Safety",
    items: [
      "Respect quiet enjoyment for all guests; smoking is only permitted in designated outdoor areas.",
      "No hazardous materials, illegal substances, or disruptive behaviour on property.",
      "Please follow safety guidance from our team and licensed partners on tours, safaris, and activities.",
    ],
  },
  {
    title: "Tours & Experiences",
    items: [
      "Wildlife and outdoor activities involve inherent risks; you participate at your own discretion.",
      "Weather, park regulations, or operational requirements may require itinerary adjustments. We will offer suitable alternatives where possible.",
      "Park fees, permits, or third-party charges may be payable directly and are subject to change by authorities.",
    ],
  },
  {
    title: "Car Rental & Transfers",
    items: [
      "Valid licence and identification are required. Age and security deposit rules may apply per vehicle category.",
      "The renter is responsible for traffic fines, damage not covered by insurance, and safe operation of the vehicle.",
      "Return the vehicle with the agreed fuel level; refuelling differences may be charged.",
    ],
  },
  {
    title: "Liability",
    items: [
      "Personal belongings remain your responsibility; please use in-room safes where provided.",
      "To the extent permitted by law, 10 On Pauling is not liable for loss, injury, or delays arising from events beyond our reasonable control (e.g., weather, third-party interruptions, regulatory changes).",
      "Nothing in these terms limits rights you may have under applicable consumer protection laws.",
    ],
  },
  {
    title: "Privacy",
    items: [
      "We handle your information according to our Privacy Policy at /privacy.",
      "By booking or submitting an enquiry, you consent to us using your details to manage your stay and related services.",
    ],
  },
  {
    title: "Contact",
    items: [
      "Questions about these terms? Email info@10onpaulinghotel.com or call +263 71 070 6054.",
      "Address: 10 Pauling Road, Suburbs, Bulawayo, Zimbabwe.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Terms of Service"
        description="House rules, bookings, and experience guidelines for 10 On Pauling."
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <FadeIn key={section.title} delay={index * 0.05} fullWidth>
              <div className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="font-heading text-2xl font-bold mb-4 text-secondary">
                  {section.title}
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn fullWidth delay={0.25} className="mt-12">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold text-secondary mb-3">
              Updates to these terms
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We may update these terms to reflect changes in our services, rates, or legal
              requirements. The most current version will be posted here. Continued use of our
              services after updates means you accept the revised terms.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}


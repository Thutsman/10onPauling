"use client";

import FadeIn from "@/components/animations/FadeIn";
import PageHeader from "@/components/shared/PageHeader";

const sections = [
  {
    title: "What We Collect",
    items: [
      "Contact details you share when enquiring or booking (name, email, phone).",
      "Stay details such as dates, room type, special requests, and dietary preferences.",
      "Payment and billing information processed securely by our trusted providers.",
      "Website analytics (pages visited, device type, approximate location) to improve your experience.",
      "Communication records when you call, email, or message us.",
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      "To confirm reservations, tours, car rentals, and restaurant bookings.",
      "To personalise your stay with welcome notes, amenities, and dietary considerations.",
      "To send essential updates about your booking or on-site services.",
      "To share news and offers when you opt in (you can unsubscribe anytime).",
      "To maintain safety, comply with legal requirements, and protect our guests and property.",
    ],
  },
  {
    title: "Sharing & Storage",
    items: [
      "We share only what is necessary with payment processors, tour partners, or service vendors who support your booking.",
      "We do not sell your data.",
      "Data is stored securely with access restricted to authorised staff and partners.",
      "We retain information only as long as needed for bookings, legal obligations, and legitimate business purposes.",
    ],
  },
  {
    title: "Your Choices",
    items: [
      "Access or correct your information by contacting us.",
      "Opt out of marketing at any time via the unsubscribe link or by emailing us.",
      "Manage cookies through your browser settings; essential cookies keep the site running.",
    ],
  },
  {
    title: "Contact Us",
    items: [
      "Have questions or requests? Reach us at info@10onpauling.com or +263 12 345 6789.",
      "10 Pauling Road, Suburbs, Bulawayo, Zimbabwe.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Privacy Policy"
        description="How 10 On Pauling collects, uses, and protects your information."
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
              Updates to this policy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy to reflect changes in our services or legal requirements.
              The latest version will always be available on this page. If updates significantly
              change how we handle your information, we will let you know using the contact
              details on your booking.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}


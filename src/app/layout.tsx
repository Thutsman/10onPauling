import type { Metadata, Viewport } from "next";
import { Monda } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingButton from "@/components/layout/BookingButton";
import SkipToContent from "@/components/shared/SkipToContent";
import { generateHotelStructuredData, generateLocalBusinessStructuredData } from "@/lib/structured-data";

const monda = Monda({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Use the same Monda font for body text to keep the site consistent.
const bodyFont = Monda({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D2691E",
};

export const metadata: Metadata = {
  title: "10 On Pauling Hotel - Bulawayo's #1 Boutique Hotel | Zimbabwe",
  description: "Award-winning luxury accommodation in Bulawayo. Experience Zimbabwe's best with Victoria Falls tours, Hwange safaris, volunteer programs, and premium car rental.",
  keywords: [
    "Zimbabwe hotel",
    "Bulawayo accommodation",
    "Victoria Falls tours",
    "Hwange safari",
    "boutique hotel Zimbabwe",
    "volunteer Zimbabwe",
    "car rental Zimbabwe",
  ],
  authors: [{ name: "10 On Pauling Hotel" }],
  creator: "10 On Pauling Hotel",
  openGraph: {
    title: "10 On Pauling Hotel - Bulawayo's #1 Boutique Hotel",
    description: "Experience luxury, adventure, and impact in Zimbabwe",
    url: "https://10onpauling.com",
    siteName: "10 On Pauling Hotel",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "10 On Pauling Hotel - Boutique Hotel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "10 On Pauling Hotel - Bulawayo's #1 Boutique Hotel",
    description: "Award-winning luxury accommodation in Zimbabwe",
    images: ["/images/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/logo/logo.svg", type: "image/svg+xml" },
      { url: "/images/logo/logo.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: "/images/logo/logo.svg",
    shortcut: "/images/logo/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hotelData = generateHotelStructuredData();
  const businessData = generateLocalBusinessStructuredData();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
        />
      </head>
      <body
        className={`${bodyFont.variable} ${monda.variable} antialiased font-sans bg-background text-foreground flex flex-col min-h-screen`}
      >
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <BookingButton mode="floating" />
      </body>
    </html>
  );
}

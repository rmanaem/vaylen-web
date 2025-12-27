import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { COPY } from "./config/copy";
import ThemeFavicon from "./components/ThemeFavicon";

export const metadata: Metadata = {
  // SEO STRATEGY: Combine Brand (Precision) with Function (Tracker)
  title: {
    template: "%s | Vaylen",
    default: "Vaylen | Precision Nutrition & Training Tracker",
  },

  // SEO STRATEGY: Keep the poetic description, but ensure "Free" is the last thing they read.
  description: `${COPY.hero.subheadline} The core instrument is free.`,

  // Keywords: Mix of "High Volume" (Free Tracker) and "High Intent" (Autoregulated)
  keywords: [
    "free workout tracker",
    "free macro logger",
    "body composition tracking",
    "hypertrophy training log",
    "TDEE calculator",
    "adaptive nutrition",
    "autoregulated training",
    "industrial design fitness app"
  ],

  icons: {
    icon: '/favicon-silver.ico',
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Vaylen | Precision Without Friction",
    description: "The minimalist instrument for body composition. The core instrument is free.",
    url: "https://vaylen.app",
    siteName: "Vaylen",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Vaylen Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vaylen | Precision Without Friction",
    description: "The minimalist instrument for body composition. The core instrument is free.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // THE SECRET WEAPON: Structured Data (JSON-LD)
  // This tells Google: "This is a Software Application, and the Price is 0."
  // TODO: Update this when pricing is finalized with lowPrice: 0 and highPrice: 19.99
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Vaylen',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'The Essential Standard version is free forever.'
    },
    featureList: 'Macro Tracking, Workout Logging, Trend Weight Algorithms',
    description: COPY.hero.subheadline
  };

  return (
    <html lang="en">
      <body className="antialiased bg-bg text-ink">
        <ThemeFavicon />
        {/* Inject JSON-LD invisible to user, visible to bots */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          src="https://cdn.cookie-script.com/s/ac712d3b6f78bbd302a93dc152937174.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
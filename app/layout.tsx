import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { COPY } from "./config/copy";

export const metadata: Metadata = {
  // Base Metadata
  title: {
    template: "%s | Vaylen",
    default: "VAYLEN - Precision Without Friction",
  },
  description: COPY.hero.subheadline,

  // Keywords for SEO
  keywords: [
    "body composition tracking",
    "nutrition tracking",
    "workout logging",
    "TDEE calculator",
    "macro tracking",
    "training program",
    "adaptive nutrition",
    "autoregulated training",
    "metabolism tracking",
    "fitness tracker"
  ],

  // Dynamic Favicons
  icons: {
    icon: [
      // 1. Light Mode Override: Shows Onyx (Dark) icon so it stands out on white tabs
      { url: '/favicon-onyx.ico', media: '(prefers-color-scheme: light)' },

      // 2. Default Fallback: Shows Silver (Light) icon
      { url: '/favicon-silver.ico' },
    ],
    apple: "/apple-icon.png",
  },

  // Social Sharing
  openGraph: {
    title: "VAYLEN - Precision Without Friction",
    description: COPY.hero.subheadline,
    url: "https://vaylen.app",
    siteName: "Vaylen",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Vaylen - The minimalist instrument for body composition.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VAYLEN - Precision Without Friction",
    description: COPY.hero.subheadline,
    images: ["/opengraph-image.png"],
  },

  // Additional SEO
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

  // Verification
  verification: {
    // google: 'your-google-verification-code', // Add when available
    // yandex: 'your-yandex-verification-code', // Add when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg text-ink">
        {/* 2. Add the CookieScript here. 
            strategy="afterInteractive" ensures it loads immediately 
            after the page is usable. 
        */}
        <Script
          src="https://cdn.cookie-script.com/s/ac712d3b6f78bbd302a93dc152937174.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
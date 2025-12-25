import type { Metadata } from "next";
import Script from "next/script"; // 1. Import the Script component
import "./globals.css";
import { COPY } from "./config/copy";
// TODO: Update metadata

export const metadata: Metadata = {
  // Base Metadata
  title: {
    template: "%s | Vaylen",
    default: "VAYLEN - Log Fast. Train Smart.",
  },
  description: COPY.hero.subheadline,

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
    title: "VAYLEN - Log Fast. Train Smart.",
    description: COPY.hero.subheadline,
    url: "https://vaylen.app",
    siteName: "Vaylen",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Vaylen - The precision instrument for body composition.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "VAYLEN - Log Fast. Train Smart.",
    description: COPY.hero.subheadline,
    images: ["/opengraph-image.png"],
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
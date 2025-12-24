import type { Metadata } from "next";
import "./globals.css";
import { COPY } from "./config/copy"; // Import centralized copy

// We remove the Geist font imports to strictly use the "System" font stack
// defined in your globals.css (Inter / Apple System) for that premium app feel.
// TODO: Update metadata

export const metadata: Metadata = {
  // Base Metadata
  title: {
    template: "%s | Vaylen",
    default: "VAYLEN - Log Fast. Train Smart.",
  },
  description: COPY.hero.subheadline,

  // Dynamic Favicons
  // Dynamic Favicons
  icons: {
    icon: [
      // 1. Light Mode Override: Shows Onyx (Dark) icon so it stands out on white tabs
      { url: '/favicon-onyx.ico', media: '(prefers-color-scheme: light)' },

      // 2. Default Fallback: Shows Silver (Light) icon
      // This covers Dark Mode, browsers with no preference, and older browsers.
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
      {/* We add 'bg-bg' and 'text-ink' here to prevent 
        any white flashes before the content loads.
      */}
      <body className="antialiased bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
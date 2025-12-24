"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppLogoReveal from "./components/AppLogoReveal";
import { VARIANTS } from "./design-system/animations";

export default function Home() {
  // Single state to track splash status: null (not mounted), true (show splash), false (skip splash)
  // This avoids SSR/client hydration mismatch and eliminates redundant sessionStorage checks
  const [shouldShowSplash, setShouldShowSplash] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has already seen the splash this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    setShouldShowSplash(!hasSeenSplash);
  }, []);

  const handleSplashComplete = () => {
    setShouldShowSplash(false);
    sessionStorage.setItem("hasSeenSplash", "true");
  };

  return (
    <main className="min-h-screen bg-obsidian text-ink selection:bg-steel-active selection:text-obsidian">

      {/* 1. SPLASH SCREEN - Only render after mount to avoid SSR/hydration mismatch */}
      <AnimatePresence mode="wait">
        {shouldShowSplash === true && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian"
          >
            <AppLogoReveal onComplete={handleSplashComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT */}
      <motion.div
        initial="hidden"
        animate={shouldShowSplash === false ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              // Only delay if we showed the splash screen (first visit)
              // Skip delay on repeat visits for instant content
              delayChildren: shouldShowSplash === false ? 0 : 0.8,
              staggerChildren: 0.1
            }
          }
        }}
      >
        <Navbar />
        <Hero />

        <motion.div variants={VARIANTS.fadeInUp}>
          <BentoGrid />
        </motion.div>

        <motion.div variants={VARIANTS.fadeInUp}>
          <Pricing />
        </motion.div>

        <Footer />
      </motion.div>
    </main>
  );
}
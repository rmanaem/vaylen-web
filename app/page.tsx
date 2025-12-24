// app/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import AppLogoReveal from "./components/AppLogoReveal";
import { VARIANTS } from "./design-system/animations"; // Import system

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-obsidian text-ink selection:bg-steel-active selection:text-obsidian">

      {/* 1. SPLASH SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            // We can define a one-off variant for the loader or keep it simple here
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian"
          >
            <AppLogoReveal onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT */}
      {/* The `animate` prop controls the state. When !isLoading, it switches to "visible" */}
      <motion.div
        initial="hidden"
        animate={!isLoading ? "visible" : "hidden"}
        variants={VARIANTS.container}
      >
        <Hero />

        {/* You can wrap these in variants too if you want them to cascade in */}
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
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppLogoReveal from "./components/AppLogoReveal";
import { VARIANTS } from "./design-system/animations";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-obsidian text-ink selection:bg-steel-active selection:text-obsidian">

      {/* 1. SPLASH SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian"
          >
            <AppLogoReveal onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT */}
      <motion.div
        initial="hidden"
        animate={!isLoading ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              // DELAY INCREASED: 0.8s ensures no overlap with the fading splash
              delayChildren: 0.8,
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
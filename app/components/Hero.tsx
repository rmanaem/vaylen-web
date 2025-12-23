// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white pt-20">

            {/* BACKGROUND GLOW (The "Interstellar" Vibe) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                {/* 1. THE HOOK */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-medium tracking-wide text-blue-200">
                        INTELLIGENT BODY COMPOSITION
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                >
                    Stop Guessing.<br /> Start Sculpting.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
                >
                    The only app that automates your nutrition and training adjustments based on real-time fatigue and weight data.
                </motion.p>

                {/* 2. THE CTA (Input + Button) */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-20"
                    onSubmit={(e) => e.preventDefault()} // Connect to backend later
                >
                    <input
                        type="email"
                        placeholder="Enter your email for early access"
                        className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                    />
                    <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                        Join Waitlist <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.form>

                {/* 3. THE MOCKUP (Placeholder for your Dart Screenshots) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-full max-w-4xl aspect-video rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        {/* Replace this div with your <img /> or <video /> tag later */}
                        <p>App Interface / 15s Loop Video Placeholder</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
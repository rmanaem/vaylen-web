"use client";

import { motion } from "framer-motion";
import { VARIANTS } from "../design-system/animations";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center pt-32 pb-0 text-center overflow-hidden z-10">

            {/* 1. THE TECH PILL BADGE */}
            <motion.div variants={VARIANTS.fadeInUp} className="mb-8">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    {/* Lightning Icon */}
                    <svg
                        className="w-3 h-3 mr-2 text-steel-active"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                    </svg>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-steel-light">
                        SYSTEM V1.0 // EARLY ACCESS
                    </span>
                </div>
            </motion.div>

            {/* 2. HEADLINES */}
            <motion.h1
                variants={VARIANTS.fadeInUp}
                className="text-6xl font-black uppercase tracking-tighter md:text-8xl lg:text-9xl text-ink leading-[0.9]"
            >
                <span className="block text-ink">Log Fast.</span>
                <span className="block text-steel-active/50">Train Smart.</span>
            </motion.h1>

            {/* 3. SUBTEXT */}
            <motion.p
                variants={VARIANTS.fadeInUp}
                className="max-w-xl mt-8 text-lg font-medium text-steel-dark px-4"
            >
                The precision instrument for body composition. Automated macro adjustments based on real-time fatigue and weight data.
            </motion.p>

            {/* 4. INPUT & BUTTON */}
            <motion.div
                variants={VARIANTS.fadeInUp}
                className="flex items-center w-full max-w-sm mt-10 space-x-2 px-4 md:px-0"
            >
                <input
                    type="email"
                    placeholder="Enter email..."
                    className="w-full px-4 py-3 text-sm font-medium transition-colors border rounded-lg bg-obsidian-light border-white/10 focus:border-steel-active focus:outline-none placeholder:text-steel-dark/50 text-ink"
                />
                <button className="whitespace-nowrap px-8 py-3 text-sm font-bold tracking-wide uppercase rounded-lg bg-white text-black hover:bg-steel-active transition-colors">
                    Join
                </button>
            </motion.div>

            {/* 5. APP OVERVIEW & PHONE MOCKUP */}
            <motion.div
                variants={VARIANTS.fadeInUp}
                className="relative mt-24 w-full max-w-5xl mx-auto flex flex-col items-center"
            >
                <span className="mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-steel-dark/70">
                    App Overview
                </span>

                {/* Phone Container */}
                <div className="relative w-full px-4 flex justify-center">
                    {/* The Device Frame/Glow */}
                    <div className="relative rounded-t-[2.5rem] border-t border-x border-white/10 bg-obsidian-light/50 p-2 backdrop-blur-sm shadow-2xl shadow-steel-active/5">
                        <img
                            src="/app-screenshot.png"
                            alt="App Overview screen showing macro tracking"
                            className="w-[300px] md:w-[380px] h-auto rounded-t-[2rem] mx-auto opacity-90"
                        />
                    </div>

                    {/* Gradient Fade to blend into next section */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent z-10" />
                </div>
            </motion.div>

        </section>
    );
}
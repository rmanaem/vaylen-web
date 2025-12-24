"use client";

import { motion } from "framer-motion";
import { VARIANTS } from "../design-system/animations";
import EmailForm from "./EmailForm";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center pt-32 pb-0 text-center overflow-hidden z-10">

            {/* 0. MOBILE LOGO (Hidden on Desktop) */}
            {/* Matches the native app welcome screen layout */}
            <motion.div
                variants={VARIANTS.fadeInUp}
                className="block md:hidden mb-12 w-32 h-32 text-white"
            >
                <svg
                    viewBox="517.85 517.85 964.3 964.3"
                    className="w-full h-full fill-current"
                >
                    <path transform="matrix(1,0,0,-1,0,2000)" d="M1179.9,877.645L1314.43,1146.72L1314.39,1146.81L1314.48,1146.81L1482.15,1482.15L1053.55,1482.15L1221.22,1146.81L1221.31,1146.81L1133.31,970.814L1179.9,877.645ZM1188.39,1398.82L1347.31,1398.82L1267.85,1239.89L1188.39,1398.82Z" />
                    <path d="M1060.06,1028.99L1143.32,1195.51L1000,1482.15L517.851,517.851L804.489,517.851L1013.52,935.913L1101.51,760.004L1148.12,853.218L1060.06,1028.99ZM960.38,1015.97L752.986,601.184L652.687,601.184L1000,1295.81L1050.15,1195.51L960.38,1015.97Z" />
                </svg>
            </motion.div>

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
                className="flex items-center justify-center w-full mt-10 px-4 md:px-0"
            >
                <EmailForm id="hero-input" />
            </motion.div>

            {/* 5. APP OVERVIEW & PHONE MOCKUP */}
            {/* // TODO: Update image */}
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
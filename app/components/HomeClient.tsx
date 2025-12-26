"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import BentoGrid from "./BentoGrid";
import PremiumModules from "./PremiumModules";
import Nexus from "./Nexus";
import Pricing from "./Pricing";
import Navbar from "./Navbar";
import AppLogoReveal from "./AppLogoReveal";
import { VARIANTS } from "../design-system/animations";
import AppShowcase from "./AppShowcase";

// 1. Define Props Interface
interface HomeClientProps {
    showJournal: boolean;
}

export default function HomeClient({ showJournal }: HomeClientProps) {
    const [shouldShowSplash, setShouldShowSplash] = useState<boolean | null>(null);

    useEffect(() => {
        const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
        setShouldShowSplash(!hasSeenSplash);
    }, []);

    const handleSplashComplete = () => {
        setShouldShowSplash(false);
        sessionStorage.setItem("hasSeenSplash", "true");
    };

    return (
        <>
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

            <motion.div
                initial="hidden"
                animate={shouldShowSplash === false ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            delayChildren: shouldShowSplash === false ? 0 : 0.8,
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {/* 2. Pass the prop to Navbar */}
                <Navbar showJournal={showJournal} />

                <Hero />

                <motion.div variants={VARIANTS.fadeInUp}>
                    <BentoGrid />
                </motion.div>

                <motion.div variants={VARIANTS.fadeInUp}>
                    <PremiumModules />
                </motion.div>

                <motion.div variants={VARIANTS.fadeInUp}>
                    <Nexus />
                </motion.div>

                <AppShowcase />

                <motion.div variants={VARIANTS.fadeInUp}>
                    <Pricing />
                </motion.div>
            </motion.div>
        </>
    );
}
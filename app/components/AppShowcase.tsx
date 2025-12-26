"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DS } from "../design-system/tokens";
import { VARIANTS } from "../design-system/animations";
import { COPY } from "../config/copy"; // Import centralized copy

// Define interface to handle strict type checking
interface Feature {
    id: string;
    title: string;
    description: string;
    video?: string;
    image: string;
}

export default function AppShowcase() {
    const [activeTab, setActiveTab] = useState(0);
    const features = COPY.showcase.tabs as unknown as Feature[]; // Proper cast

    return (
        <section className={`${DS.surfaces.section} overflow-hidden`}>
            <div className={DS.layout.container}>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: TEXT CONTROLS */}
                    <motion.div
                        variants={VARIANTS.container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="mb-8">
                            <motion.h2 variants={VARIANTS.fadeInUp} className={DS.typography.headline}>
                                {COPY.showcase.headline}
                            </motion.h2>
                            <motion.p variants={VARIANTS.fadeInUp} className={DS.typography.subheadline}>
                                {COPY.showcase.subheadline}
                            </motion.p>
                        </div>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className="relative" // Relative for the absolute background
                                >
                                    {/* The "Magic" Background Highlight */}
                                    {activeTab === index && (
                                        <motion.div
                                            layoutId="feature-highlight"
                                            className="absolute inset-0 bg-surface-highlight border border-steel-active rounded"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    {/* The Button Content */}
                                    <button
                                        onClick={() => setActiveTab(index)}
                                        className="relative z-10 w-full text-left p-6 rounded transition-colors duration-300"
                                    >
                                        <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${activeTab === index ? "text-white" : "text-ink-subtle"}`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`text-sm transition-opacity duration-300 ${activeTab === index ? "text-ink opacity-100" : "text-ink-subtle opacity-60"}`}>
                                            {feature.description}
                                        </p>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT: PHONE MOCKUP SWAPPER */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full flex items-center justify-center"
                    >


                        <div className="relative w-[300px] h-[600px] bg-black border-2 border-steel-active rounded-[2.5rem] overflow-hidden z-10">
                            <AnimatePresence mode="wait">
                                {features[activeTab].video ? (
                                    <motion.video
                                        key={features[activeTab].id}
                                        src={features[activeTab].video}
                                        initial={{ opacity: 0, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, filter: "blur(2px)" }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                ) : (
                                    <motion.img
                                        key={features[activeTab].id}
                                        src={features[activeTab].image}
                                        alt={features[activeTab].title}
                                        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: -10, filter: "blur(2px)" }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
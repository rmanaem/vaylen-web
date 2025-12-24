"use client";

import { motion } from "framer-motion";
import { Activity, Brain, TrendingUp } from "lucide-react";
import { VARIANTS } from "../design-system/animations";

// Keeping content local since it's not in COPY yet
const items = [
    {
        title: "The Problem",
        description: "Manual tracking is broken. Spreadsheets don't account for fatigue, stress, or daily weight fluctuations.",
        icon: Activity,
        color: "text-red-400",
        // Subtle gradient for the icon background
        iconBg: "bg-red-500/10",
    },
    {
        title: "The Vaylen Brain",
        description: "Our algorithm analyzes your metabolic rate in real-time. If you stall, we adjust your macros automatically.",
        icon: Brain,
        color: "text-blue-400",
        iconBg: "bg-blue-500/10",
        // Spans 2 cols for emphasis
        className: "md:col-span-2",
    },
    {
        title: "Auto-Regulation",
        description: "Training too hard? Vaylen detects fatigue and prescribes deloads before you burn out.",
        icon: TrendingUp,
        color: "text-green-400",
        iconBg: "bg-green-500/10",
    },
];

export default function BentoGrid() {
    return (
        <section className="py-32 bg-bg relative overflow-hidden">
            <div className="container mx-auto px-4">

                <motion.div
                    variants={VARIANTS.container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={VARIANTS.fadeInUp}
                            whileHover={{ y: -5 }} // Subtle lift
                            className={`group relative p-8 rounded-3xl border border-steel-idle bg-surface backdrop-blur-sm transition-colors hover:border-steel-active/50 hover:bg-surface-highlight ${item.className || ""}`}
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <motion.div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${item.iconBg} ${item.color}`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <item.icon className="w-6 h-6" />
                                </motion.div>

                                <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
                                <p className="text-ink-subtle leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
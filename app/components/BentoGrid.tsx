// app/components/BentoGrid.tsx
"use client";

import { motion } from "framer-motion";
import { Activity, Brain, TrendingUp } from "lucide-react";

const items = [
    {
        title: "The Problem",
        description: "Manual tracking is broken. Spreadsheets don't account for fatigue, stress, or daily weight fluctuations.",
        icon: Activity,
        color: "text-red-400",
        delay: 0.1,
    },
    {
        title: "The Vaylen Brain",
        description: "Our algorithm analyzes your metabolic rate in real-time. If you stall, we adjust your macros automatically.",
        icon: Brain,
        color: "text-blue-400",
        delay: 0.2,
        // Making this one span 2 columns on larger screens for emphasis
        className: "md:col-span-2 bg-gradient-to-br from-white/5 to-blue-500/10",
    },
    {
        title: "Auto-Regulation",
        description: "Training too hard? Vaylen detects fatigue and prescribes deloads before you burn out.",
        icon: TrendingUp,
        color: "text-green-400",
        delay: 0.3,
    },
];

export default function BentoGrid() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            className={`p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors ${item.className || ""}`}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/5 mb-6 ${item.color}`}>
                                <item.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
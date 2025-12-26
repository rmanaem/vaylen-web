"use client";

import { motion } from "framer-motion";
import { Zap, FileCode, TrendingUp, Target } from "lucide-react";
import { VARIANTS } from "../design-system/animations";
import { COPY } from "../config/copy";

// Map icon names to components
const iconMap = {
    "Frictionless Entry": Zap,
    "Session Schematics": FileCode,
    "Trend Visualization": TrendingUp,
    "Consistency Index": Target,
};

export default function BentoGrid() {
    return (
        <section id="features" className="py-32 bg-bg relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-ink mb-8 text-center"
                    style={{ letterSpacing: '-0.03em' }}
                >
                    {COPY.pillars.title}
                </motion.h2>

                {/* Section Body */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-base text-ink-subtle text-center max-w-3xl mx-auto mb-16"
                >
                    {COPY.pillars.body}
                </motion.p>

                <motion.div
                    variants={VARIANTS.container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
                >
                    {COPY.pillars.items.map((pillar, i) => {
                        const Icon = iconMap[pillar.title as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={i}
                                variants={VARIANTS.fadeInUp}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 rounded border border-steel-idle bg-surface backdrop-blur-sm transition-all hover:border-steel-active"
                            >
                                <div className="relative z-10">
                                    <motion.div
                                        className="w-12 h-12 rounded border border-steel-idle flex items-center justify-center mb-6 text-steel-active"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-ink mb-3">{pillar.title}</h3>
                                    <p className="text-ink-subtle leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}
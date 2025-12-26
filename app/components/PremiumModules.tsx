"use client";

import { motion } from "framer-motion";
import { Zap, Activity } from "lucide-react";
import { VARIANTS } from "../design-system/animations";
import { COPY } from "../config/copy";

export default function PremiumModules() {
    const modules = [
        {
            id: "adaptive",
            title: COPY.modules.adaptive.title,
            description: COPY.modules.adaptive.description,
            icon: Zap,
        },
        {
            id: "autoregulated",
            title: COPY.modules.autoregulated.title,
            description: COPY.modules.autoregulated.description,
            icon: Activity,
        },
    ];

    return (
        <section className="py-32 bg-bg relative overflow-hidden border-t border-steel-idle">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={VARIANTS.container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {modules.map((module, i) => (
                        <motion.div
                            key={module.id}
                            variants={VARIANTS.fadeInUp}
                            whileHover={{ y: -5 }}
                            className="group relative p-10 rounded border border-steel-idle bg-surface backdrop-blur-sm transition-all hover:border-steel-active"
                        >
                            <div className="relative z-10">
                                {/* Icon */}
                                <motion.div
                                    className="w-12 h-12 rounded border border-steel-idle flex items-center justify-center mb-6 text-steel-active"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <module.icon className="w-6 h-6" strokeWidth={1.5} />
                                </motion.div>

                                {/* Title */}
                                <h3
                                    className="text-2xl font-bold uppercase tracking-tight text-ink mb-4"
                                    style={{ letterSpacing: '-0.03em' }}
                                >
                                    {module.title}
                                </h3>

                                {/* Description */}
                                <p className="text-ink-subtle leading-relaxed">
                                    {module.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

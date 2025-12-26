"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { DS } from "../design-system/tokens";
import { VARIANTS } from "../design-system/animations";

export default function Roadmap() {
    const items = [
        "ADAPTIVE NUTRITION ENGINE",
        "AUTOREGULATED TRAINING LOGIC",
        "THE NEXUS FEEDBACK LOOP"
    ];

    return (
        <section className="py-24 bg-bg border-t border-steel-idle/30">
            <div className={DS.layout.container}>
                <div className="max-w-3xl mx-auto text-center">

                    {/* Headline */}
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-mono text-sm md:text-base text-ink-tertiary mb-12 tracking-widest uppercase"
                    >
                        SYSTEM EXPANSION // Q1 2025
                    </motion.h3>

                    {/* List */}
                    <motion.div
                        variants={VARIANTS.container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={VARIANTS.fadeInUp}
                                className="flex items-center justify-center gap-4 text-ink-subtle hover:text-steel-active transition-colors duration-300"
                            >
                                <span className="font-mono text-ink-subtle text-sm" style={{ fontFamily: 'monospace' }}>[ LOCKED ]</span>
                                <span className="font-bold uppercase tracking-wide text-lg md:text-xl relative text-white" style={{ letterSpacing: '0.05em', fontWeight: 700 }}>
                                    {item}
                                    {/* Scanline effect overlay optional */}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

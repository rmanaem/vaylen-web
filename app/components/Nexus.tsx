"use client";

import { motion } from "framer-motion";
import { VARIANTS } from "../design-system/animations";
import { COPY } from "../config/copy";

export default function Nexus() {
    return (
        <section className="py-32 bg-bg relative overflow-hidden border-t border-steel-idle">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Main Title */}
                    <h2
                        className="text-5xl md:text-6xl font-bold uppercase tracking-tight text-ink mb-6"
                        style={{ letterSpacing: '-0.03em' }}
                    >
                        {COPY.nexus.title}
                    </h2>

                    {/* Subtitle */}
                    <h3
                        className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-steel-active mb-8"
                        style={{ letterSpacing: '-0.03em' }}
                    >
                        {COPY.nexus.subtitle}
                    </h3>

                    {/* Body */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-ink-subtle leading-relaxed max-w-3xl mx-auto"
                    >
                        {COPY.nexus.body}
                    </motion.p>

                    {/* Optional: Connection graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 relative"
                    >
                        <div className="flex items-center justify-center gap-8">
                            {/* Left: Nutrition */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded border-2 border-steel-active flex items-center justify-center mb-3">
                                    <span className="text-xs font-mono font-bold text-steel-active">FUEL</span>
                                </div>
                                <span className="text-xs font-mono text-ink-tertiary">Nutrition</span>
                            </div>

                            {/* Center: Bidirectional arrows */}
                            <div className="flex flex-col items-center gap-2">
                                <svg className="w-24 h-6 text-steel-active" viewBox="0 0 100 24" fill="none">
                                    <path d="M5 12 L95 12" stroke="currentColor" strokeWidth="2" />
                                    <path d="M85 6 L95 12 L85 18" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M15 18 L5 12 L15 6" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                                <span className="text-[10px] font-mono text-steel-active">FEEDBACK LOOP</span>
                            </div>

                            {/* Right: Training */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded border-2 border-steel-active flex items-center justify-center mb-3">
                                    <span className="text-xs font-mono font-bold text-steel-active">LOAD</span>
                                </div>
                                <span className="text-xs font-mono text-ink-tertiary">Training</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

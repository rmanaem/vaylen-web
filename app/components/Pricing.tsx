"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { COPY } from "../config/copy";
import { DS } from "../design-system/tokens";
import { VARIANTS } from "../design-system/animations";

export default function Pricing() {
    return (
        <section className={DS.surfaces.section}>

            <div className={DS.layout.container}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={VARIANTS.container}
                    className="text-center mb-20"
                >
                    <motion.h2
                        variants={VARIANTS.fade}
                        className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-ink text-center mb-4"
                        style={{ letterSpacing: '-0.03em' }}
                    >
                        {COPY.pricing.title}
                    </motion.h2>
                    <motion.p variants={VARIANTS.fadeInUp} className={`${DS.typography.subheadline} max-w-2xl mx-auto`}>
                        {COPY.pricing.subtitle}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={VARIANTS.container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className={DS.layout.grid2}
                >

                    {/* Plan 1: Essential Standard */}
                    <motion.div
                        variants={VARIANTS.fadeInUp}
                        whileHover={{ y: -8 }}
                        className="relative p-10 rounded flex flex-col h-full bg-bg border border-steel-idle transition-all duration-300 hover:border-steel-active group"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-ink mb-2" style={{ letterSpacing: '-0.03em' }}>{COPY.pricing.plans.free.name}</h3>
                            <p className="text-sm text-ink-subtle mb-4">{COPY.pricing.plans.free.description}</p>
                            <div className="text-3xl font-bold text-steel-active mb-1">{COPY.pricing.plans.free.price}</div>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {COPY.pricing.plans.free.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="font-mono text-steel-active flex-shrink-0">[+]</span>
                                    <span className="text-[13px] font-mono text-steel-light">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto">
                            <button className={`${DS.controls.btnCardSecondary} w-full transition-colors group-hover:bg-steel-idle group-hover:text-white`}>
                                {COPY.pricing.plans.free.cta}
                            </button>
                        </div>
                    </motion.div>

                    {/* Plan 2: Nexus System */}
                    <motion.div
                        variants={VARIANTS.fadeInUp}
                        whileHover={{ y: -8 }}
                        className="relative p-10 rounded flex flex-col h-full bg-bg border-2 border-steel-active transition-all duration-300 hover:border-white group"
                    >
                        {/* Recommended Badge */}
                        <div className="absolute top-0 right-0 p-px rounded-bl-md rounded-tr-lg bg-gradient-to-bl from-steel-active to-transparent overflow-hidden">
                            <div className="bg-bg px-4 py-1.5 rounded-bl rounded-tr-md">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-steel-active">
                                    Recommended
                                </span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-ink mb-2" style={{ letterSpacing: '-0.03em' }}>{COPY.pricing.plans.pro.name}</h3>
                            <p className="text-sm text-ink-subtle mb-4">{COPY.pricing.plans.pro.description}</p>
                            <div className="text-2xl font-bold font-mono text-white mb-1">{COPY.pricing.plans.pro.price}</div>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {COPY.pricing.plans.pro.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="font-mono text-white flex-shrink-0">[+]</span>
                                    <span className="text-[13px] font-mono text-steel-light">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto">
                            <button className={`${DS.controls.btnCardPrimary} w-full transition-transform group-hover:scale-[1.02]`}>
                                {COPY.pricing.plans.pro.cta}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
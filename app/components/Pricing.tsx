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
                    <motion.h2 variants={VARIANTS.fadeInUp} className={`${DS.typography.headline} mb-6`}>
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

                    {/* Plan 1: Free */}
                    <motion.div
                        variants={VARIANTS.fadeInUp}
                        whileHover={{ y: -8 }}
                        className={`${DS.surfaces.card} group transition-all duration-300 hover:border-steel-active/30`}
                    >
                        <div className="mb-8">
                            <h3 className={`${DS.typography.title} mb-2`}>{COPY.pricing.plans.free.name}</h3>
                            <p className="text-ink-subtle text-sm h-5">{COPY.pricing.plans.free.description}</p>
                        </div>

                        <div className="mb-10 pt-6 border-t border-steel-idle/50">
                            <ul className="space-y-4">
                                {COPY.pricing.plans.free.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-ink-subtle mt-1 shrink-0" />
                                        <span className={DS.typography.label}>{feature}</span>
                                    </li>
                                ))}
                                {COPY.pricing.plans.free.missing.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 opacity-40">
                                        <X className="w-4 h-4 text-ink-tertiary mt-1 shrink-0" />
                                        <span className="text-ink-tertiary text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto">
                            <button className={`${DS.controls.btnCardSecondary} w-full transition-colors group-hover:bg-steel-idle group-hover:text-white`}>
                                {COPY.pricing.plans.free.cta}
                            </button>
                            <p className={`text-center mt-4 ${DS.typography.caption}`}>
                                {COPY.pricing.plans.free.price}
                            </p>
                        </div>
                    </motion.div>

                    {/* Plan 2: Pro */}
                    <motion.div
                        variants={VARIANTS.fadeInUp}
                        whileHover={{ y: -8 }}
                        className={`${DS.surfaces.cardHighlight} group relative transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(229,229,234,0.1)]`}
                    >
                        {/* Recommended Badge */}
                        <div className="absolute top-0 right-0 p-px rounded-bl-2xl rounded-tr-[31px] bg-gradient-to-bl from-steel-active to-transparent overflow-hidden">
                            <div className="bg-bg px-4 py-1.5 rounded-bl-[15px] rounded-tr-[30px]">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-steel-active">
                                    Recommended
                                </span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className={`${DS.typography.title} mb-2`}>{COPY.pricing.plans.pro.name}</h3>
                            <p className="text-ink-subtle text-sm h-5">{COPY.pricing.plans.pro.description}</p>
                        </div>

                        <div className="mb-10 pt-6 border-t border-white/10">
                            <ul className="space-y-4">
                                {COPY.pricing.plans.pro.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-0.5 p-0.5 rounded-full bg-steel-active text-bg">
                                            <Check className="w-3 h-3" strokeWidth={3} />
                                        </div>
                                        <span className="text-ink text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto">
                            <button className={`${DS.controls.btnCardPrimary} w-full transition-transform group-hover:scale-[1.02]`}>
                                {COPY.pricing.plans.pro.cta}
                            </button>
                            <p className={`text-center mt-4 text-ink-subtle ${DS.typography.caption}`}>
                                {COPY.pricing.plans.pro.price}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
// components/Footer.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { DS } from '../design-system/tokens';
import { VARIANTS } from '../design-system/animations';
import { COPY } from '../config/copy';
import EmailForm from './EmailForm';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            variants={VARIANTS.fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full py-16 border-t border-steel-idle/20 bg-bg text-ink-subtle"
        >
            <div className={`${DS.layout.container} grid grid-cols-1 md:grid-cols-2 gap-12 items-end`}>

                {/* LEFT: BRAND & LEGAL */}
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold text-ink mb-2 tracking-tight">VAYLEN</h3>
                        <p className={`${DS.typography.caption} max-w-xs mx-auto md:mx-0`}>
                            The precision instrument for physical mastery.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm font-medium">
                        <Link href="/terms" className="hover:text-ink transition-colors">
                            Terms
                        </Link>
                        <Link href="/privacy" className="hover:text-ink transition-colors">
                            Privacy
                        </Link>
                        <Link href="/health-privacy" className="hover:text-ink transition-colors">
                            Consumer Health Privacy
                        </Link>
                        <Link href="/disclaimer" className="hover:text-ink transition-colors">
                            Disclaimer
                        </Link>
                        {/* Hidden until store launch
                        <Link href="/refund" className="hover:text-ink transition-colors">
                            Returns
                        </Link> 
                        */}
                    </div>

                    <div className="space-y-1">
                        <p className="text-xs font-mono tracking-wider uppercase text-ink-tertiary">
                            © {currentYear} <span className="text-ink">{COPY.footer.copyright}</span>
                        </p>
                        <p className="text-[10px] font-mono text-ink-tertiary">
                            {COPY.footer.trading}
                        </p>
                        <p className="text-[10px] font-mono text-steel-active mt-2">
                            {COPY.footer.status}
                        </p>
                    </div>
                </div>

                {/* RIGHT: NEWSLETTER / WAITLIST */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <h3 className="text-lg font-bold uppercase tracking-tight text-ink" style={{ letterSpacing: '-0.03em' }}>
                        {COPY.footer.headline}
                    </h3>
                    <p className="text-sm text-ink-subtle text-center md:text-right max-w-md">
                        {COPY.footer.description}
                    </p>
                    <EmailForm id="footer-email" />
                </div>

            </div>
        </motion.footer>
    );
}
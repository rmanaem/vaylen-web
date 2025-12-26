"use client";

import Link from "next/link"; // Required for the logo and journal link
import { motion } from "framer-motion";
import { VARIANTS } from "../design-system/animations";

interface NavbarProps {
    showJournal?: boolean;
}

export default function Navbar({ showJournal = false }: NavbarProps) {
    return (
        <motion.nav
            variants={VARIANTS.fadeInUp}
            className="fixed top-0 left-0 z-40 w-full px-6 py-6 md:px-12 pointer-events-none"
        // ^ pointer-events-none ensures clicks pass through the empty parts of the navbar
        >
            <div className="flex items-center justify-between pointer-events-auto">
                {/* ^ pointer-events-auto re-enables clicking on the actual content */}

                {/* Logo Mark */}
                <div className="w-10 h-10 hidden md:block">
                    <Link href="/">
                        <svg
                            viewBox="517.85 517.85 964.3 964.3"
                            className="w-full h-full text-steel-active fill-current hover:text-white transition-colors"
                        >
                            <path transform="matrix(1,0,0,-1,0,2000)" d="M1179.9,877.645L1314.43,1146.72L1314.39,1146.81L1314.48,1146.81L1482.15,1482.15L1053.55,1482.15L1221.22,1146.81L1221.31,1146.81L1133.31,970.814L1179.9,877.645ZM1188.39,1398.82L1347.31,1398.82L1267.85,1239.89L1188.39,1398.82Z" />
                            <path d="M1060.06,1028.99L1143.32,1195.51L1000,1482.15L517.851,517.851L804.489,517.851L1013.52,935.913L1101.51,760.004L1148.12,853.218L1060.06,1028.99ZM960.38,1015.97L752.986,601.184L652.687,601.184L1000,1295.81L1050.15,1195.51L960.38,1015.97Z" />
                        </svg>
                    </Link>
                </div>

                {/* Right Side Links */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Conditionally render Journal Link */}
                    {showJournal && (
                        <Link
                            href="/journal"
                            className="text-xs font-bold tracking-widest text-steel-dark uppercase hover:text-white transition-colors"
                        >
                            Journal
                        </Link>
                    )}
                    <Link href="/">
                        <span className="text-xs font-bold tracking-widest text-steel-dark uppercase">
                            Vaylen
                        </span>
                    </Link>
                </div>
            </div>
        </motion.nav >
    );
}
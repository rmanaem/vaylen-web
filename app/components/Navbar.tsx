"use client";

import { motion } from "framer-motion";
import { VARIANTS } from "../design-system/animations";

export default function Navbar() {
    return (
        <motion.nav
            variants={VARIANTS.fadeInUp} // Uses same timing as Hero
            className="fixed top-0 left-0 z-40 w-full px-6 py-6 md:px-12"
        >
            <div className="flex items-center justify-between">
                {/* Logo Mark - Hidden on mobile because it's in the Hero there */}
                <div className="w-10 h-10 hidden md:block">
                    <svg
                        viewBox="517.85 517.85 964.3 964.3"
                        className="w-full h-full text-white fill-current"
                    >
                        <path transform="matrix(1,0,0,-1,0,2000)" d="M1179.9,877.645L1314.43,1146.72L1314.39,1146.81L1314.48,1146.81L1482.15,1482.15L1053.55,1482.15L1221.22,1146.81L1221.31,1146.81L1133.31,970.814L1179.9,877.645ZM1188.39,1398.82L1347.31,1398.82L1267.85,1239.89L1188.39,1398.82Z" />
                        <path d="M1060.06,1028.99L1143.32,1195.51L1000,1482.15L517.851,517.851L804.489,517.851L1013.52,935.913L1101.51,760.004L1148.12,853.218L1060.06,1028.99ZM960.38,1015.97L752.986,601.184L652.687,601.184L1000,1295.81L1050.15,1195.51L960.38,1015.97Z" />
                    </svg>
                </div>

                {/* Optional: Right side link (Login, etc.) */}
                <div className="hidden md:block">
                    <span className="text-xs font-bold tracking-widest text-steel-dark uppercase">
                        Vaylen Inc.
                    </span>
                </div>
            </div>
        </motion.nav>
    );
}
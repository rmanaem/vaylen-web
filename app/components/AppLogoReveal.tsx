"use client";

import { motion } from "framer-motion";

export default function AppLogoReveal({
    onComplete,
}: {
    onComplete?: () => void;
}) {
    // The ViewBox from your inner SVG to ensure correct scaling
    const viewBox = "517.85 517.85 964.3 964.3";

    // Configuration for the paths
    const logoPaths = [
        {
            // The Right-hand Triangle/Chevron (Requires the flip transform)
            d: "M1179.9,877.645L1314.43,1146.72L1314.39,1146.81L1314.48,1146.81L1482.15,1482.15L1053.55,1482.15L1221.22,1146.81L1221.31,1146.81L1133.31,970.814L1179.9,877.645ZM1188.39,1398.82L1347.31,1398.82L1267.85,1239.89L1188.39,1398.82Z",
            transform: "matrix(1,0,0,-1,0,2000)"
        },
        {
            // The Main Left-hand "V" Structure
            d: "M1060.06,1028.99L1143.32,1195.51L1000,1482.15L517.851,517.851L804.489,517.851L1013.52,935.913L1101.51,760.004L1148.12,853.218L1060.06,1028.99ZM960.38,1015.97L752.986,601.184L652.687,601.184L1000,1295.81L1050.15,1195.51L960.38,1015.97Z",
            transform: "" // No transform needed for this one
        }
    ];

    return (
        <div className="flex items-center justify-center w-full h-full">
            <svg
                // Responsive sizing: w-32 (128px) on mobile, w-48 (192px) on desktop
                className="w-32 h-32 md:w-48 md:h-48"
                viewBox={viewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {logoPaths.map((pathData, index) => (
                    <motion.path
                        key={index}
                        d={pathData.d}
                        transform={pathData.transform} // Apply the specific transform (flip)

                        // Visual Styles
                        stroke="#E5E5EA"
                        strokeWidth="15" // Thicker stroke because the viewBox coordinates are very large (500-1500 range)
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="#E5E5EA"

                        // 1. Initial State
                        initial={{
                            pathLength: 0,
                            fillOpacity: 0,
                            strokeOpacity: 1
                        }}

                        // 2. Animation Sequence
                        animate={{
                            pathLength: 1,
                            fillOpacity: 1,
                            strokeOpacity: 0 // Optional: fade out the outline as the fill fades in for a cleaner look
                        }}

                        // 3. Timing
                        transition={{
                            pathLength: {
                                duration: 2.0,
                                ease: [0.23, 1, 0.32, 1], // EaseOutQuint
                            },
                            fillOpacity: {
                                delay: 1.5, // Start filling near the end of the drawing
                                duration: 0.8,
                                ease: "easeOut"
                            },
                            strokeOpacity: {
                                delay: 1.8,
                                duration: 0.4
                            }
                        }}

                        // Trigger completion only on the last path
                        onAnimationComplete={index === logoPaths.length - 1 ? onComplete : undefined}
                    />
                ))}
            </svg>
        </div>
    );
}
"use client";

import { motion } from "framer-motion";

export default function AppLogoReveal({
    onComplete,
}: {
    onComplete?: () => void;
}) {
    const viewBox = "517.85 517.85 964.3 964.3";

    const logoPaths = [
        {
            // The Right-hand Triangle (Flipped)
            d: "M1179.9,877.645L1314.43,1146.72L1314.39,1146.81L1314.48,1146.81L1482.15,1482.15L1053.55,1482.15L1221.22,1146.81L1221.31,1146.81L1133.31,970.814L1179.9,877.645ZM1188.39,1398.82L1347.31,1398.82L1267.85,1239.89L1188.39,1398.82Z",
            transform: "matrix(1,0,0,-1,0,2000)"
        },
        {
            // The Main Left-hand "V"
            d: "M1060.06,1028.99L1143.32,1195.51L1000,1482.15L517.851,517.851L804.489,517.851L1013.52,935.913L1101.51,760.004L1148.12,853.218L1060.06,1028.99ZM960.38,1015.97L752.986,601.184L652.687,601.184L1000,1295.81L1050.15,1195.51L960.38,1015.97Z",
            transform: ""
        }
    ];

    return (
        <div className="flex items-center justify-center w-full h-full">
            <svg
                className="w-32 h-32 md:w-48 md:h-48"
                viewBox={viewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {logoPaths.map((pathData, index) => (
                    <motion.path
                        key={index}
                        d={pathData.d}
                        transform={pathData.transform}

                        stroke="#E5E5EA"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="#E5E5EA"

                        initial={{ pathLength: 0, fillOpacity: 0, strokeOpacity: 1 }}
                        animate={{ pathLength: 1, fillOpacity: 1, strokeOpacity: 0 }}

                        transition={{
                            pathLength: {
                                duration: 3.0, // Slightly faster draw (was 3.5)
                                ease: [0.23, 1, 0.32, 1],
                            },
                            fillOpacity: {
                                delay: 1, // Start filling sooner
                                duration: 1, // SNAP: Quick fill (was 1.0)
                                ease: "easeOut"
                            },
                            strokeOpacity: {
                                delay: 2.4,
                                duration: 0.4
                            }
                        }}

                        // Trigger complete immediately after visual sequence ends
                        onAnimationComplete={index === logoPaths.length - 1 ? onComplete : undefined}
                    />
                ))}
            </svg>
        </div>
    );
}
// app/styles/animations.ts

// 1. Physics & Timing
export const EASE = [0.23, 1, 0.32, 1] as const; // "EaseOutQuint" - Snappy but smooth
export const DURATION = {
    fast: 0.4,
    medium: 0.8,
    slow: 1.2,
};

// 2. Reusable Motion Variants
export const VARIANTS = {
    // Parent container: Staggers its children (they animate one by one)
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Delay between each child
                delayChildren: 0.2,    // Wait a tiny bit before starting
            },
        },
        exit: { opacity: 0 },
    },

    // Child item: Slides up and fades in
    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: DURATION.medium,
                ease: EASE,
            },
        },
    },

    // Simple Fade (for less important items)
    fade: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: DURATION.medium, ease: EASE },
        },
    },
};
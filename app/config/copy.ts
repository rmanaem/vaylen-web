export const COPY = {
    brand: {
        version: "System V0.1 // Beta Access",
    },
    hero: {
        headline: "PRECISION",
        headlineHighlight: "WITHOUT FRICTION.",
        subheadline: "The minimalist instrument for body composition. Seamless nutrition intake, versatile training protocols, and data-driven insights—unified into one system.",
        cta: "JOIN",
        success: "You're on the list.",
        placeholder: "Enter email...",
    },
    pillars: {
        title: "THE ESSENTIAL STANDARD.",
        body: "Your data belongs to you. A distraction-free environment, stripped of noise and designed for absolute focus. No ads. Just the tools requisite for lifelong consistency.",
        items: [
            {
                title: "Frictionless Entry",
                description: "Log nutrition in seconds. A distraction-free interface designed for rapid data capture, stripped of gamification.",
            },
            {
                title: "Session Schematics",
                description: "Build complex training programs or freestyle your session. Track reps, RPE, and tempo with absolute precision.",
            },
            {
                title: "Trend Visualization",
                description: "Visualize your metabolism. Noise-filtered algorithms separate true weight trends from daily fluctuation.",
            },
            {
                title: "Consistency Index",
                description: "Build momentum. Track adherence streaks and compliance targets without the noise of badges or confetti.",
            }
        ]
    },
    modules: {
        adaptive: {
            title: "ADAPTIVE NUTRITION",
            description: "Expenditure tracking that calibrates to your metabolism."
        },
        autoregulated: {
            title: "AUTOREGULATED TRAINING",
            description: "Reactive logic that adjusts volume to your performance."
        }
    },
    nexus: {
        title: "THE NEXUS.",
        subtitle: "Synchronized Intelligence.",
        body: "A cohesive system integrating nutrition and training data into a single feedback loop. Balancing physiological load by calibrating fuel against fatigue to ensure neither outpaces the other."
    },
    pricing: {
        title: "CHOOSE YOUR PATH.",
        subtitle: "Use Vaylen as a powerful tracker, or upgrade to the full intelligence system.",
        plans: {
            free: {
                name: "THE ESSENTIAL STANDARD",
                description: "For those who demand total control.",
                price: "FREE",
                cta: "Download App",
                features: [
                    "Manual Macro Tracking",
                    "Workout Logging (RPE/RIR)",
                    "Unlimited History",
                    "Trend Weight Algorithms",
                    "Custom Routine Builder",
                ],
                missing: []
            },
            pro: {
                name: "THE NEXUS SYSTEM",
                description: "Automated insights. Zero headaches.",
                price: "STATUS: WAITLIST",
                cta: "REQUEST ACCESS",
                features: [
                    "Everything in Standard",
                    "Adaptive Nutrition: TDEE-based targets",
                    "Autoregulated Training: Fatigue-based adjustments",
                    "The Nexus: Bi-directional stall diagnosis",
                    "Recovery Sync: Dynamic deload protocols",
                ]
            }
        }
    },
    footer: {
        headline: "INITIALIZE CALIBRATION.",
        description: "The Nexus requires a baseline. Join the calibration cohort to establish your metabolic profile before the system goes live.",
        placeholder: "> enter_email_address",
        cta: "BEGIN",
        copyright: "La Compagnie Vaylen Inc.",
        rights: "All rights reserved.",
        trading: "Vaylen is a trading name of La Compagnie Vaylen Inc.",
    }
} as const;
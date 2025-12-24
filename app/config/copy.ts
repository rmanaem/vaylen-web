export const COPY = {
    brand: {
        version: "System V1.0 // Early Access",
    },
    hero: {
        headline: "LOG FAST.",
        headlineHighlight: "TRAIN SMART.",
        subheadline: "The precision instrument for body composition. Automated macro adjustments based on real-time fatigue and weight data.",
        cta: "JOIN",
        success: "You're on the list.",
        placeholder: "Enter email...",
    },
    pricing: {
        title: "Choose Your Path",
        subtitle: "Use Vaylen as a powerful tracker, or let it become your intelligent coach.",
        plans: {
            free: {
                name: "The Tool",
                description: "For those who want total control.",
                price: "Free",
                cta: "Download App",
                features: [
                    "Manual Macro Logging",
                    "Workout Tracking",
                    "Custom Routine Builder",
                    "Basic Analytics",
                ],
                missing: ["Auto-Regulation", "Fatigue Management", "Weekly Adjustments"]
            },
            pro: {
                name: "The Coach",
                description: "Automated insights. Zero headaches.",
                price: "Join Waitlist",
                cta: "Get Early Access",
                features: [
                    "Everything in Free",
                    "Real-time Metabolism Tracking",
                    "Auto-Regulation & Deloads",
                    "Fatigue Flagging",
                    "Weekly Macro Adjustments",
                ]
            }
        }
    },
    footer: {
        copyright: "La Compagnie Vaylen Inc.",
        rights: "All rights reserved.",
        trading: "Vaylen is a trading name of La Compagnie Vaylen Inc."
    }
} as const;
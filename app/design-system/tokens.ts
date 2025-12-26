/**
 * THE ATOMIC REGISTRY (Unified)
 * Single Source of Truth for Vaylen Web.
 */

export const DS = {
    // --- ATOMS: TYPOGRAPHY (Web Tailwind Classes) ---
    typography: {
        hero: "text-5xl md:text-8xl font-hero leading-[0.9] text-ink",
        headline: "text-3xl md:text-5xl font-display text-ink",
        subheadline: "text-lg md:text-xl font-body text-ink-subtle leading-relaxed",
        title: "text-2xl font-bold text-ink",
        body: "text-base font-body text-ink-subtle leading-relaxed",
        caption: "text-xs font-mono tracking-widest uppercase text-ink-tertiary",
        label: "text-sm font-medium text-ink-subtle",
        data: "font-data text-ink",
        dataMuted: "font-data text-ink-subtle",
        mono: "font-mono text-ink-subtle",
    },

    // --- ATOMS: SURFACES (Web Tailwind Classes) ---
    surfaces: {
        section: "py-32 relative overflow-hidden bg-bg border-t border-steel-idle",
        card: "relative p-10 rounded flex flex-col h-full bg-surface border border-steel-idle transition-colors",
        cardHighlight: "relative p-10 rounded flex flex-col h-full bg-surface-highlight border-2 border-steel-active",
        badge: "bg-surface/50 border border-steel-idle backdrop-blur-sm",
        input: "bg-surface border border-steel-idle focus:outline-none focus:border-steel-active transition-colors",
    },

    // --- MOLECULES: INTERACTIVE (Web Tailwind Classes) ---
    controls: {
        btnHero: "px-8 py-4 rounded bg-accent text-bg font-button tracking-wide hover:bg-white transition-all disabled:opacity-50 flex items-center justify-center gap-2",
        btnCardPrimary: "w-full py-4 rounded font-bold tracking-wide bg-steel-active text-bg hover:bg-white transition-all",
        btnCardSecondary: "w-full py-4 rounded font-bold tracking-wide border border-steel-idle text-ink hover:bg-steel-idle/20 transition-all",
        inputField: "w-full px-6 py-4 rounded font-mono text-ink placeholder:text-ink-tertiary bg-surface",
    },

    // --- ORGANISMS: LAYOUT (Web Tailwind Classes) ---
    layout: {
        container: "container mx-auto px-6 relative z-10",
        grid2: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto",
    },

    // --- UTILS: STATUS (Web Tailwind Classes) ---
    status: {
        success: "bg-success/10 border border-success/30 text-success",
        error: "text-danger font-medium",
    },

    // --- EMAIL SPECIFIC (Raw Hex/String Values) ---
    // These mirror the web tokens but in a format React Email accepts (Inline Styles)
    email: {
        colors: {
            bg: "#050505",           // Matches --color-bg
            surface: "#1C1C1E",      // Matches --color-surface
            surfaceHighlight: "#2C2C2E",
            steelIdle: "#3A3A3C",
            steelActive: "#E5E5EA",
            ink: "#FFFFFF",
            inkSubtle: "#A1A1AA",
            inkTertiary: "#525252",
        },
        typography: {
            // System Stack for maximum compatibility + speed
            sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            // Mono Stack for that "Industrial" feel
            mono: '"JetBrains Mono", "SF Mono", "Courier New", monospace',

            // Sizes
            sizeDisplay: "32px",
            sizeTitle: "20px",
            sizeBody: "14px",
            sizeCaption: "10px",
        },
        spacing: {
            xs: "4px",
            sm: "8px",
            md: "16px",
            lg: "24px",
            xl: "32px",
            xxl: "48px",
        }
    }
} as const;
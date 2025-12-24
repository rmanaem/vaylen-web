/**
 * THE ATOMIC REGISTRY (Unified)
 * Single Source of Truth for Vaylen Web.
 */

export const DS = {
    // --- ATOMS: TYPOGRAPHY ---
    typography: {
        hero: "text-5xl md:text-8xl font-hero tracking-tighter leading-[0.9] text-ink",
        headline: "text-3xl md:text-5xl font-display tracking-tight text-ink",
        subheadline: "text-lg md:text-xl font-body text-ink-subtle leading-relaxed",
        title: "text-2xl font-bold text-ink",
        body: "text-base font-body text-ink-subtle leading-relaxed",
        caption: "text-xs font-mono tracking-widest uppercase text-ink-tertiary",
        label: "text-sm font-medium text-ink-subtle",
    },

    // --- ATOMS: SURFACES ---
    surfaces: {
        // Structural
        section: "py-32 relative overflow-hidden bg-bg border-t border-steel-idle",

        // Cards (Includes Layout props for consistency)
        card: "relative p-10 rounded-[32px] flex flex-col h-full bg-surface border border-steel-idle transition-colors",
        cardHighlight: "relative p-10 rounded-[32px] flex flex-col h-full bg-surface-highlight border border-steel-active ring-1 ring-white/10 shadow-2xl shadow-black/50",

        // UI Elements
        badge: "bg-surface/50 border border-steel-idle backdrop-blur-sm",
        input: "bg-surface border border-steel-idle focus:outline-none focus:border-steel-active transition-colors",
    },

    // --- MOLECULES: INTERACTIVE ---
    controls: {
        // Hero Button (Intrinsic Width)
        btnHero: "px-8 py-4 rounded-xl bg-accent text-bg font-button tracking-wide hover:bg-white transition-all disabled:opacity-50 flex items-center justify-center gap-2",

        // Card Buttons (Full Width)
        btnCardPrimary: "w-full py-4 rounded-xl font-bold tracking-wide bg-steel-active text-bg hover:bg-white hover:scale-[1.02] transition-all shadow-lg shadow-white/5",
        btnCardSecondary: "w-full py-4 rounded-xl font-bold tracking-wide border border-steel-idle text-ink hover:bg-steel-idle/20 transition-all",

        // Inputs
        inputField: "w-full px-6 py-4 rounded-xl text-ink placeholder:text-ink-tertiary font-body",
    },

    // --- ORGANISMS: LAYOUT ---
    layout: {
        container: "container mx-auto px-6 relative z-10",
        grid2: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto",
    },

    // --- UTILS: STATUS ---
    status: {
        success: "bg-success/10 border border-success/30 text-success",
        error: "text-danger font-medium",
    }
} as const;
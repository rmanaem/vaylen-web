"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COPY } from "../config/copy";
import { Loader2, Check } from "lucide-react";
// 1. Import Firestore methods
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// 2. Import your db instance
import { db } from "../firebase";

export default function EmailForm({
    id = "email-form"
}: {
    id?: string
}) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        try {
            // 3. ACTUAL DATABASE WRITE (Existing Logic)
            await addDoc(collection(db, "waitlist"), {
                email: email,
                createdAt: serverTimestamp(),
                source: "vaylen-web-join-waitlist"
            });

            // 4. TRIGGER EMAIL (New Logic)
            // We use fetch to call our Next.js API route securely
            // We don't await this if we want the UI to be snappy, 
            // but awaiting ensures we catch email errors if needed.
            await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            // Success! Show the success UI
            setStatus("success");
            setEmail("");

        } catch (error) {
            console.error("Error adding to waitlist: ", error);
            // If it fails, reset to idle so they can try again
            setStatus("idle");
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="w-full max-w-sm">
            <form onSubmit={handleSubmit} className="relative w-full">
                <AnimatePresence mode="wait">
                    {status === "success" ? (
                        // SUCCESS STATE: Premium "Stealth Glass" Style
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            className="w-full px-4 py-3 text-sm font-bold text-center text-white bg-white/10 border border-white/20 rounded backdrop-blur-md shadow-[0_0_20px_-10px_rgba(255,255,255,0.1)]"
                        >
                            <span className="flex items-center justify-center gap-2 select-none">
                                <Check className="w-5 h-5" strokeWidth={2.5} />
                                <span className="tracking-wide uppercase text-xs">{COPY.hero.success}</span>
                            </span>
                        </motion.div>
                    ) : (
                        // INPUT STATE
                        <motion.div
                            key="input"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center w-full space-x-2"
                        >
                            <input
                                id={id}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={COPY.footer.placeholder}
                                disabled={status === "loading"}
                                className="w-full px-4 py-3 text-sm font-mono transition-colors border rounded bg-surface border-white/10 focus:border-steel-active focus:outline-none placeholder:text-steel-dark/50 text-ink disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="px-6 py-3 text-sm font-bold tracking-wider uppercase transition-colors border rounded bg-steel-active text-bg border-steel-active hover:bg-white hover:text-bg disabled:opacity-50"
                            >
                                {status === "loading" ? "..." : COPY.footer.cta}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
}
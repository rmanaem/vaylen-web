"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface StandardPageProps {
    children: React.ReactNode;
    showJournal?: boolean;
}

export default function StandardPage({ children, showJournal = false }: StandardPageProps) {
    return (
        <>
            <Navbar showJournal={showJournal} />

            {/* Add padding-top so content doesn't hide behind fixed navbar */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="pt-24"
            >
                {children}
            </motion.div>

            <Footer />
        </>
    );
}

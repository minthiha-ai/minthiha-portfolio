"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > SCROLL_THRESHOLD);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    type="button"
                    aria-label="Back to top"
                    className="fixed bottom-8 right-8 z-[4999] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black-200 shadow-lg backdrop-blur-sm transition-colors hover:border-purple/50 hover:bg-black-300 focus:outline-none focus:ring-2 focus:ring-purple/50"
                >
                    <FaArrowUp className="h-5 w-5 text-white" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

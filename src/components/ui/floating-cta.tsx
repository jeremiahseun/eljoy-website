"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when user scrolls down 400px
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
                >
                    <a
                        href="https://wa.me/2348163791889?text=Hi%20EL-Joy%2C%20I%27m%20interested%20in%20building%20a%20project.%20Can%20we%20talk%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 rounded-full transition-all duration-300"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />

                        {/* Tooltip */}
                        <span className="absolute right-full mr-4 px-3 py-2 bg-gray-900 border border-white/10 text-white text-sm whitespace-nowrap rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
                            Chat with us
                        </span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

"use client";

import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { ChevronRight, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
    eyebrow?: string;
    title: string;
    subtitle: string;
    ctaLabel?: string;
    ctaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
}

export function Hero({
    eyebrow = "Software Studio",
    title,
    subtitle,
    ctaLabel = "Book a Free Discovery Call",
    ctaHref = "https://calendar.app.google/TgjKmKvC1bNUrdWE8",
    secondaryCtaLabel = "Chat on WhatsApp",
    secondaryCtaHref = "https://wa.me/2348163791889?text=Hi%20EL-Joy%2C%20I%27m%20interested%20in%20building%20a%20project.%20Can%20we%20talk%3F",
}: HeroProps) {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <section
            id="hero"
            className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
        >
            {/* Spiral Animation Background */}
            <div className="absolute inset-0 z-0">
                <SpiralAnimation />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span
                        className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-300 px-5 py-2
              bg-white/5 backdrop-blur-sm
              border border-white/10
              rounded-full tracking-wide"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Only 3 spots available this month
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-8 text-balance
          bg-gradient-to-br from-white via-white/90 to-white/60
          bg-clip-text py-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          font-bold leading-[1.1] tracking-tighter
          text-transparent max-w-5xl"
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-6 max-w-2xl mx-auto text-balance
          text-base md:text-lg lg:text-xl tracking-tight text-gray-400"
                >
                    {subtitle}
                </motion.p>

                {/* Proof Line */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-4 mb-8 text-sm text-gray-500"
                >
                    Trusted by companies across 15+ countries · SDK powering 27+ banking apps
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 text-base"
                    >
                        <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                            <Calendar className="mr-2 h-4 w-4" />
                            {ctaLabel}
                        </a>
                    </Button>
                    {secondaryCtaLabel && (
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="bg-black/50 border-white/20 text-white hover:bg-black/80 hover:border-green-500/40 px-8 text-base backdrop-blur-sm group"
                        >
                            <a href={secondaryCtaHref} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-4 w-4 text-green-400 group-hover:text-green-300" />
                                {secondaryCtaLabel}
                            </a>
                        </Button>
                    )}
                </motion.div>
            </div>

            {/* Scroll Indicator - positioned at bottom of section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
                </div>
            </motion.div>
        </section>
    );
}

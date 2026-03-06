"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

interface Project {
    title: string;
    category: string;
    description: string;
    tags: string[];
    link?: string;
    image: string;
    metrics?: string[];
}

const projects: Project[] = [
    {
        title: "Peerpay SDK",
        category: "Fintech / SDK",
        description:
            "Enterprise-grade banking SDK powering commercial applications. Engineered for rapid integration and unparalleled reliability.",
        tags: ["Flutter", "Dart", "Security"],
        image: "/images/flashprofit_preview.png", // Reusing image placeholder
        metrics: ["Reduced integration from 24 weeks to 7 days", "Powers 27+ commercial banking apps"],
    },
    {
        title: "Deo",
        category: "AI / Mobile",
        description:
            "AI-powered PWA providing daily outfit suggestions based on weather and personal wardrobe data. Integrated with Gemini 2.0 Flash for intelligent recommendations.",
        tags: ["Node.js", "Flutter", "Gemini AI"],
        image: "/images/deo_preview.png",
        metrics: ["99.9% crash-free sessions", "35% reduced system downtime"],
    },
    {
        title: "FlashProfit",
        category: "DeFi / Web3",
        description:
            "No-code platform democratizing DeFi flash loan arbitrage. Identifies opportunities across DEXs and executes atomic multi-step transactions with one click.",
        tags: ["Solidity", "Web3.js", "Arbitrum", "Uniswap V3"],
        image: "/images/flashprofit_preview.png",
    },
    {
        title: "Preggy",
        category: "Health / AI",
        description:
            "Mobile-first AI nutrition assistant for pregnant women in Africa. RAG-powered by Gemini for region-aware, trimester-specific dietary guidance.",
        tags: ["Flutter", "Gemini AI", "RAG", "Supabase"],
        image: "/images/preggy_preview.png",
    },
    {
        title: "Vendoor",
        category: "Logistics / Mobile",
        description:
            "AI-powered logistics infrastructure for Nigeria's online business ecosystem. Unified platform for delivery management and intelligent order tracking.",
        tags: ["Flutter", "Google Maps", "Location Tracking"],
        image: "/images/vendoor_preview.png",
        metrics: ["60% user adoption in 6 months", "50% improved request response rates"],
    },
    {
        title: "Stakesmart",
        category: "Sports / AI",
        description:
            "AI-powered sports predictions with up to 85% accuracy. Real-time insights, deep match analytics, and personalized betting recommendations.",
        tags: ["Flutter", "Supabase", "PostgreSQL", "OneSignal"],
        link: "https://stakesmartai.com/",
        image: "/images/stakesmart_preview.png",
        metrics: ["Up to 85% prediction accuracy"],
    },
];

function ProjectCard({ project, index, isLastOdd }: { project: Project; index: number; isLastOdd: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
        <motion.div
            ref={cardRef}
            style={{ y, opacity, scale }}
            className={`group ${isLastOdd ? "md:col-span-2" : ""}`}
        >
            <div className="relative h-full rounded-2xl border border-white/10 p-2 bg-black/50 backdrop-blur-sm overflow-hidden">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                />
                <div className="relative h-full flex flex-col rounded-xl p-6 bg-gradient-to-br from-black via-black/95 to-purple-950/20 border border-white/5 min-h-[280px] z-10 transition-colors duration-500">
                    {/* Hover Image Overlay - Top Right */}
                    <div className="absolute right-0 top-0 w-1/2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none z-0 mask-image-gradient">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black z-10" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="relative z-20 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                            <span className="text-xs uppercase tracking-widest text-purple-400 font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                {project.category}
                            </span>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-white transition-colors bg-black/50 p-1.5 rounded-full backdrop-blur-sm"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors drop-shadow-lg">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-1 max-w-[90%] md:max-w-[70%] drop-shadow-md">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10 w-fit">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-2 py-1 rounded-full bg-black/50 text-gray-400 border border-white/10 backdrop-blur-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.metrics && project.metrics.length > 0 && (
                            <div className="mt-4 flex flex-col gap-2">
                                {project.metrics.map((metric, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-md w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                        <span className="text-sm text-purple-200 font-medium">{metric}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isOddCount = projects.length % 2 !== 0;

    return (
        <section id="portfolio" className="py-24 px-4 relative z-10" ref={containerRef}>
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                        Selected Works
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of products we've built that are making an impact.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            isLastOdd={isOddCount && index === projects.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GlareCard } from "@/components/ui/glare-card";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        title: "Discovery",
        description: "We dive deep into your vision, understanding your goals, audience, and market to build a solid foundation.",
        icon: Search,
        color: "from-blue-500 to-purple-500",
    },
    {
        title: "Design",
        description: "Creating intuitive, stunning interfaces that users love. We focus on UX/UI that converts.",
        icon: PenTool,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Development",
        description: "Writing clean, scalable code. We build robust systems that handle growth effortlessly.",
        icon: Code2,
        color: "from-pink-500 to-orange-500",
    },
    {
        title: "Launch",
        description: "Rigorous testing and a smooth deployment. We ensure your product hits the market with impact.",
        icon: Rocket,
        color: "from-orange-500 to-yellow-500",
    },
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax transforms for background elements
    const bgY1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    // Wire progress
    const wireProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

    return (
        <section id="process" className="py-32 px-4 relative z-10 bg-black overflow-hidden" ref={containerRef}>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating gradient orbs that move on scroll */}
                <motion.div
                    style={{ y: bgY1 }}
                    className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"
                />
                <motion.div
                    style={{ y: bgY2 }}
                    className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl"
                />
                <motion.div
                    style={{ y: bgY1, rotate: bgRotate }}
                    className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"
                />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="container mx-auto max-w-5xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20 relative z-10"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                        Our Process
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        From idea to reality in four simple but powerful steps.
                    </p>
                </motion.div>

                {/* Vertical Line with Animated Progress */}
                <div className="absolute left-1/2 top-[200px] bottom-40 w-0.5 bg-white/5 -translate-x-1/2 hidden md:block overflow-hidden">
                    <motion.div
                        style={{ scaleY: wireProgress }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 origin-top"
                    />
                </div>

                <div className="space-y-24 md:space-y-32 relative z-10">
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex-1 text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                            >
                                <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 bg-gradient-to-br ${step.color} shadow-lg`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>

                            {/* Center Node (Desktop Only) */}
                            <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-white/20 relative z-20 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                <div className="w-3 h-3 rounded-full bg-white" />
                            </div>

                            {/* Card Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex-1 w-full flex justify-center"
                            >
                                <GlareCard className="flex flex-col items-center justify-center p-6 text-center">
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-xl absolute`} />
                                    <step.icon className="w-16 h-16 text-white relative z-10 mb-4" strokeWidth={1} />
                                    <p className="text-white font-bold text-xl relative z-10">Step 0{index + 1}</p>
                                </GlareCard>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

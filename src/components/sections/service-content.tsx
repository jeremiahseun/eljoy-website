"use client";

import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/glowing-card"; // Import GlowingCard

interface Technology {
    name: string;
    category: string;
    description: string;
}

interface ServiceTechnologiesProps {
    title?: string;
    description?: string;
    technologies: Technology[];
}

export function ServiceTechnologies({
    title = "Technologies & Tools",
    description = "The stack we use to build world-class products.",
    technologies
}: ServiceTechnologiesProps) {
    return (
        <section className="py-24 px-4 relative z-10 bg-black">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <GlowingCard
                                title={tech.name}
                                description={tech.description}
                                icon={
                                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                                        {tech.category}
                                    </span>
                                }
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function ServiceCTA() {
    return (
        <section className="relative z-10">
            <BackgroundBeamsWithCollision className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-8 max-w-4xl tracking-tight">
                    Ready to transform your vision into reality?
                </h2>
                <Link href="/contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95">
                    Start a Project
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </BackgroundBeamsWithCollision>
        </section>
    );
}

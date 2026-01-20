"use client";

import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/glowing-card"; // Import GlowingCard
import { Shield, MessageCircle, TrendingUp, Users, Zap, Globe } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "100% Delivery Rate",
        description: "We don't just start projects; we finish them. On time, every time.",
    },
    {
        icon: MessageCircle,
        title: "24h Response Time",
        description: "Always in the loop with transparent communication and updates.",
    },
    {
        icon: TrendingUp,
        title: "10x Performance",
        description: "Optimized for speed, scalability, and seamless user experiences.",
    },
    {
        icon: Users,
        title: "World-Class Team",
        description: "Engineers who have shipped products for millions of users.",
    },
    {
        icon: Zap,
        title: "Rapid Iteration",
        description: "From concept to MVP in weeks, not months.",
    },
    {
        icon: Globe,
        title: "Global Standards",
        description: "Building software that competes on the world stage.",
    },
];

export function Features() {
    return (
        <section id="about" className="py-24 px-4 relative z-10 bg-black overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                        The EL-Joy Difference
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        What sets us apart from the rest—and why clients keep coming back.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <GlowingCard
                                title={feature.title}
                                description={feature.description}
                                icon={<feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

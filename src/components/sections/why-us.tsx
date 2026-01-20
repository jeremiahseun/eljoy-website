"use client";

import { motion } from "motion/react";
import { Shield, MessageCircle, TrendingUp } from "lucide-react";

const differentiators = [
    {
        icon: Shield,
        title: "End-to-End Ownership",
        description:
            "From concept to deployment, we handle everything. You focus on your business while we build the technology.",
    },
    {
        icon: MessageCircle,
        title: "Transparent Communication",
        description:
            "Weekly updates, no surprises, always in sync. You'll never wonder about your project's status.",
    },
    {
        icon: TrendingUp,
        title: "Built for Scale",
        description:
            "Architecture designed to grow with your business. Start small, scale infinitely.",
    },
];

export function WhyUs() {
    return (
        <section id="about" className="py-24 px-4 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Why EL-Joy?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We're more than developers—we're partners invested in your success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6">
                                <item.icon className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

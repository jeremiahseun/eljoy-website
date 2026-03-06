"use client";

import { motion } from "framer-motion";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Smartphone, Globe, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const services: BentoItem[] = [
    {
        title: "Mobile Development",
        description:
            "iOS, Android, and cross-platform apps built for scale and performance. From concept to App Store success.",
        icon: <Smartphone className="w-5 h-5 text-purple-400" />,
        image: "/images/services/mobile.png",
        status: "Featured",
        tags: ["iOS", "Android", "Flutter"],
        colSpan: 1,
        hasPersistentHover: true,
        href: "/services/mobile",
    },
    {
        title: "Web Development",
        description:
            "Full-stack web applications, SaaS platforms, and e-commerce solutions that drive business growth. We leverage modern frameworks and cloud infrastructure to deliver high-performance, scalable solutions with enterprise-grade reliability.",
        icon: <Globe className="w-5 h-5 text-blue-400" />,
        image: "/images/services/web.png",
        tags: ["React", "Next.js", "Node.js", "AWS", "GCP", "Docker"],
        colSpan: 1,
        href: "/services/web",
    },
    {
        title: "AI & Automation",
        description:
            "Custom AI models, intelligent automation, and ML-powered features that give you a competitive edge.",
        icon: <Sparkles className="w-5 h-5 text-pink-400" />,
        image: "/images/services/ai.png",
        status: "Trending",
        tags: ["Gemini", "RAG", "Automation"],
        colSpan: 1,
        href: "/services/ai",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 px-4 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                        What We Build
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        End-to-end software solutions across mobile, web, and AI—engineered for excellence.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left column - Mobile and AI stacked */}
                        <div className="flex flex-col gap-4">
                            <ServiceCard item={services[0]} />
                            <ServiceCard item={services[2]} />
                        </div>
                        {/* Right column - Web fills full height */}
                        <div className="h-full">
                            <ServiceCard item={services[1]} fillHeight />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ServiceCard({ item, fillHeight = false }: { item: BentoItem; fillHeight?: boolean }) {
    const CardContent = (
        <div className={`group relative rounded-2xl border border-white/10 p-1 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] ${fillHeight ? "h-full" : ""}`}>
            <div className={`relative flex flex-col rounded-xl overflow-hidden bg-gradient-to-br from-black via-black/95 to-purple-950/10 border border-white/5 ${fillHeight ? "h-full" : ""}`}>
                {/* Image */}
                {item.image && (
                    <div className="relative h-40 overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        {item.status && (
                            <span className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                {item.status}
                            </span>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className={`p-5 flex flex-col ${fillHeight ? "flex-1" : ""}`}>
                    <div className="flex items-center gap-2 mb-3">
                        {item.icon && (
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                                {item.icon}
                            </div>
                        )}
                        <h3 className="font-semibold text-white text-lg group-hover:text-purple-300 transition-colors">{item.title}</h3>
                    </div>
                    <p className={`text-sm text-gray-400 leading-relaxed ${fillHeight ? "flex-1" : ""}`}>
                        {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                        {item.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Learn More CTA */}
                    <div className="mt-4 flex items-center text-sm font-medium text-purple-400 opacity-80 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </div>
    );

    if (item.href) {
        return (
            <Link href={item.href} className={`block ${fillHeight ? "h-full" : ""}`}>
                {CardContent}
            </Link>
        );
    }

    return CardContent;
}

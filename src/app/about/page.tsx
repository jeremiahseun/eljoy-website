"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/ui/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Zap, Users, Globe, Award } from "lucide-react";
import Link from "next/link";
import { GlowingCard } from "@/components/ui/glowing-card"; // Import

const values = [
    {
        icon: <Target className="w-6 h-6" />,
        title: "Excellence First",
        description: "We don't ship average work. Every line of code, every pixel, every interaction is crafted with excellence as the standard.",
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Client Partnership",
        description: "Your success is our success. We're not vendors—we're partners invested in your long-term growth.",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Speed & Quality",
        description: "Enterprise-grade solutions delivered at startup speed. We move fast without breaking things.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Transparent Communication",
        description: "No surprises, no jargon. Clear updates, honest timelines, and open collaboration throughout.",
    },
];

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Countries Served" },
    { value: "24/7", label: "Support Available" },
];

const expertise = [
    { area: "Mobile Development", years: "7+" },
    { area: "Web Development", years: "10+" },
    { area: "Cloud & DevOps", years: "8+" },
    { area: "AI & Automation", years: "4+" },
];

export default function AboutPage() {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden font-sans bg-black">
            <Header />

            <main className="relative pt-24">
                {/* Hero Section */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                Building the Future,{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    One Product at a Time
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                                We&apos;re EL-Joy—a software studio that turns ambitious ideas into
                                world-class digital products. From Lagos to the world.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/20">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Our Story
                                </h2>
                                <div className="space-y-4 text-gray-400">
                                    <p>
                                        EL-Joy started with a simple belief: great software shouldn&apos;t be a luxury
                                        reserved for Fortune 500 companies. Every business, every startup, every
                                        visionary deserves access to world-class development.
                                    </p>
                                    <p>
                                        We&apos;ve spent years mastering our craft—shipping mobile apps that hit the
                                        top charts, building platforms that scale to millions, and creating AI
                                        solutions that transform how businesses operate.
                                    </p>
                                    <p>
                                        Today, we partner with startups and enterprises across 15+ countries,
                                        bringing the same level of excellence to every project—whether it&apos;s a
                                        weekend MVP or a complex enterprise platform.
                                    </p>
                                    <p className="text-white font-medium">
                                        We don&apos;t just build software. We build the tools that help you win.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 p-8 flex items-center justify-center">
                                    <Globe className="w-32 h-32 text-purple-400/50" />
                                </div>
                                {/* Floating stats */}
                                <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                                    <span className="text-2xl font-bold text-white">50+</span>
                                    <p className="text-xs text-gray-400">Projects Shipped</p>
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                                    <span className="text-2xl font-bold text-white">15+</span>
                                    <p className="text-xs text-gray-400">Countries Served</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </span>
                                    <p className="text-gray-400 mt-2">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                What We Stand For
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Our values guide every decision, every interaction, every line of code.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <GlowingCard
                                        title={value.title}
                                        description={value.description}
                                        icon={<div className="text-purple-400">{value.icon}</div>}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expertise Section */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Decades of Combined Experience
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    Our team brings deep expertise across the full technology stack.
                                    We&apos;ve seen it all—and we know what works.
                                </p>
                                <div className="space-y-4">
                                    {expertise.map((item, index) => (
                                        <motion.div
                                            key={item.area}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <GlowingCard className="rounded-xl p-1 md:p-1 md:rounded-xl">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-white font-medium">{item.area}</span>
                                                    <span className="text-purple-400 font-bold">{item.years} years</span>
                                                </div>
                                            </GlowingCard>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 p-8 flex items-center justify-center">
                                    <Award className="w-32 h-32 text-purple-400/50" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Why Companies Choose EL-Joy
                            </h2>
                            <div className="space-y-6 text-left">
                                <GlowingCard
                                    title="🚀 Startup Speed, Enterprise Quality"
                                    description="We move fast—launching MVPs in weeks, not months. But we never compromise on code quality, security, or scalability. You get the best of both worlds."
                                />
                                <GlowingCard
                                    title="🤝 True Partnership"
                                    description="We're not order-takers. We challenge assumptions, suggest improvements, and work alongside you to build the best possible product. Your wins are our wins."
                                />
                                <GlowingCard
                                    title="🔧 Full-Stack Capability"
                                    description="Mobile, web, cloud, AI—we handle it all. One team, one vision, seamless execution. No handoffs, no miscommunication, no surprises."
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Let&apos;s Build Something Amazing
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                Ready to turn your vision into reality? We&apos;d love to hear about your project.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                    <Link href="/contact" className="flex items-center gap-2">
                                        Start a Conversation <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

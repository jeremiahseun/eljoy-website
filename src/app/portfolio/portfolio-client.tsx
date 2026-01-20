"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/ui/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "FinTrack Pro",
        category: "Mobile App",
        description: "A comprehensive personal finance management app with AI-powered insights, budget tracking, and investment portfolio management. Available on iOS and Android.",
        challenge: "Users struggled with fragmented financial data across multiple banks and investment platforms, making it difficult to get a complete picture of their financial health.",
        solution: "We built a unified platform that aggregates all financial accounts, uses AI to categorize transactions, and provides personalized insights and recommendations.",
        results: [
            "100K+ downloads in first 6 months",
            "4.8★ average rating on App Store",
            "45% increase in user savings rate",
        ],
        tags: ["Flutter", "Firebase", "AI/ML", "iOS", "Android"],
        icon: <Smartphone className="w-5 h-5" />,
        color: "from-green-500 to-emerald-600",
        featured: true,
    },
    {
        title: "MediConnect",
        category: "Healthcare Platform",
        description: "Telemedicine platform connecting patients with healthcare providers. Features video consultations, prescription management, and health record storage.",
        challenge: "Patients in remote areas had limited access to quality healthcare, while doctors needed an efficient way to manage virtual consultations.",
        solution: "Created a HIPAA-compliant platform with seamless video calling, integrated scheduling, and secure medical record management.",
        results: [
            "50K+ consultations facilitated",
            "30% reduction in missed appointments",
            "Available in 5 African countries",
        ],
        tags: ["React", "Node.js", "WebRTC", "AWS", "PostgreSQL"],
        icon: <Globe className="w-5 h-5" />,
        color: "from-blue-500 to-cyan-500",
        featured: true,
    },
    {
        title: "SmartInventory AI",
        category: "Enterprise SaaS",
        description: "AI-powered inventory management system for retail chains. Predicts demand, automates reordering, and optimizes warehouse operations.",
        challenge: "Large retailers faced millions in losses due to overstocking, stockouts, and inefficient warehouse operations.",
        solution: "Developed a predictive AI system that analyzes historical data, market trends, and seasonal patterns to optimize inventory levels.",
        results: [
            "25% reduction in inventory costs",
            "40% fewer stockouts",
            "ROI achieved in 4 months",
        ],
        tags: ["Python", "TensorFlow", "React", "GCP", "BigQuery"],
        icon: <Sparkles className="w-5 h-5" />,
        color: "from-purple-500 to-pink-500",
        featured: true,
    },
    {
        title: "EventHub",
        category: "Event Platform",
        description: "End-to-end event management platform with ticketing, attendee management, and real-time analytics for event organizers.",
        challenge: "Event organizers needed a comprehensive solution that handles everything from ticket sales to day-of logistics.",
        solution: "Built a unified platform covering ticket sales, check-in, attendee engagement, and post-event analytics.",
        results: [
            "200+ events hosted",
            "50K+ tickets sold",
            "99.9% uptime during events",
        ],
        tags: ["Next.js", "Stripe", "Supabase", "Tailwind"],
        icon: <Globe className="w-5 h-5" />,
        color: "from-orange-500 to-red-500",
        featured: false,
    },
    {
        title: "FoodDash",
        category: "Mobile App",
        description: "Food delivery app connecting local restaurants with customers. Features real-time tracking, smart recommendations, and loyalty rewards.",
        challenge: "Local restaurants needed a cost-effective way to compete with major food delivery platforms.",
        solution: "Created a white-label solution that restaurants can customize, with lower commission rates and direct customer relationships.",
        results: [
            "150+ restaurant partners",
            "20K+ active users",
            "35% repeat order rate",
        ],
        tags: ["React Native", "Node.js", "MongoDB", "Google Maps"],
        icon: <Smartphone className="w-5 h-5" />,
        color: "from-yellow-500 to-orange-500",
        featured: false,
    },
    {
        title: "LearnSmart",
        category: "EdTech Platform",
        description: "Adaptive learning platform that personalizes educational content based on student performance and learning style.",
        challenge: "Traditional e-learning platforms offered one-size-fits-all content, leading to poor engagement and learning outcomes.",
        solution: "Built an AI-driven system that adapts difficulty, pacing, and content format to each student's needs.",
        results: [
            "40% improvement in test scores",
            "2x increase in course completion",
            "Used by 30+ schools",
        ],
        tags: ["Vue.js", "Python", "OpenAI", "PostgreSQL"],
        icon: <Sparkles className="w-5 h-5" />,
        color: "from-indigo-500 to-purple-500",
        featured: false,
    },
];

export default function PortfolioClient() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

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
                                Our{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    Work
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                                A selection of projects we&apos;re proud of. Each one represents a unique
                                challenge solved with creativity, expertise, and care.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
                        </motion.div>

                        <div className="space-y-8">
                            {featuredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                                >
                                    <div className="grid lg:grid-cols-2 gap-0">
                                        {/* Project Info */}
                                        <div className="p-8 lg:p-10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                                                    {project.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                                    <p className="text-sm text-gray-500">{project.category}</p>
                                                </div>
                                            </div>

                                            <p className="text-gray-400 mb-6">{project.description}</p>

                                            <div className="space-y-4 mb-6">
                                                <div>
                                                    <h4 className="text-sm font-semibold text-purple-400 mb-2">The Challenge</h4>
                                                    <p className="text-sm text-gray-400">{project.challenge}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Our Solution</h4>
                                                    <p className="text-sm text-gray-400">{project.solution}</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Results */}
                                        <div className={`p-8 lg:p-10 bg-gradient-to-br ${project.color} bg-opacity-10`} style={{ background: `linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))` }}>
                                            <h4 className="text-lg font-semibold text-white mb-6">Results</h4>
                                            <div className="space-y-4">
                                                {project.results.map((result, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                                                        <span className="text-white font-medium">{result}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Other Projects Grid */}
                <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-2xl font-bold text-white">More Projects</h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white`}>
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                            <p className="text-xs text-gray-500">{project.category}</p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-white/10">
                                        <ul className="space-y-1">
                                            {project.results.slice(0, 2).map((result, i) => (
                                                <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
                                Let&apos;s Create Your Success Story
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                Ready to join our portfolio of successful projects? Let&apos;s discuss how we can
                                bring your vision to life.
                            </p>
                            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Start Your Project <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

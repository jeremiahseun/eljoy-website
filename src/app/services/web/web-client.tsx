"use client";

import { ExperienceHero } from "@/components/ui/experience-hero";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/ui/footer-section";
import { ServiceTechnologies, ServiceCTA } from "@/components/sections/service-content";

export default function WebServiceClient() {
    return (
        <div className="relative bg-black min-h-screen">
            <Header />

            <main className="w-full">
                <ExperienceHero
                    title={
                        <>
                            WEB <br />{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
                                SOLUTIONS
                            </span>
                        </>
                    }
                    subtitle="High-performance web applications built with Next.js, React, and modern rendering techniques."
                    ctaText="Start Web Project"
                    stats={[
                        {
                            id: "001",
                            title: "FRAMEWORK",
                            val: "Next.js",
                            type: "text",
                        },
                        {
                            id: "002",
                            title: "SEO SCORE",
                            val: "100/100",
                            type: "progress",
                        },
                        {
                            id: "003",
                            title: "DEPLOYMENT",
                            val: "Vercel Edge",
                            type: "text",
                        },
                    ]}
                />

                <ServiceTechnologies
                    title="Modern Web Architecture"
                    description="Scalable, secure, and lightning-fast web applications."
                    technologies={[
                        {
                            name: "Next.js",
                            category: "Meta-Framework",
                            description: "The React framework for the web. Server Components, Edge Runtime, and unparalleled performance."
                        },
                        {
                            name: "React",
                            category: "UI Library",
                            description: "Building interactive user interfaces with the latest features like Actions and optimistic updates."
                        },
                        {
                            name: "Tailwind CSS",
                            category: "Styling",
                            description: "Utility-first CSS framework for rapid UI development and design system consistency."
                        },
                        {
                            name: "Framer Motion",
                            category: "Animation",
                            description: "Production-ready animation library for React to create fluid natural interactions."
                        },
                        {
                            name: "Three.js / R3F",
                            category: "3D Graphics",
                            description: "Bringing the web to life with immersive 3D experiences and WebGL."
                        },
                        {
                            name: "Supabase / Convex",
                            category: "Database",
                            description: "The open source Firebase alternative. Postgres database, Authentication, instant APIs."
                        }
                    ]}
                />

                <ServiceCTA />

                <Footer />
            </main>
        </div>
    );
}

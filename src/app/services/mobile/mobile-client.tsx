"use client";

import { ExperienceHero } from "@/components/ui/experience-hero";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/ui/footer-section";
import { ServiceTechnologies, ServiceCTA } from "@/components/sections/service-content";

export default function MobileServiceClient() {
    return (
        <div className="relative bg-black min-h-screen">
            <Header />

            <main className="w-full">
                <ExperienceHero
                    title={
                        <>
                            MOBILE <br />{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                EXPERIENCE
                            </span>
                        </>
                    }
                    subtitle="We build native mobile applications that feel fluid, responsive, and alive using Flutter and React Native."
                    ctaText="Build Your App"
                    stats={[
                        {
                            id: "001",
                            title: "PLATFORMS",
                            val: "iOS & Android",
                            type: "text",
                        },
                        {
                            id: "002",
                            title: "PERFORMANCE",
                            val: "60 FPS",
                            type: "progress",
                        },
                        {
                            id: "003",
                            title: "TECH STACK",
                            val: "Flutter / RN",
                            type: "text",
                        },
                    ]}
                />

                <ServiceTechnologies
                    title="Mobile Tech Stack"
                    description="We choose the best tools to deliver native performance and cross-platform efficiency."
                    technologies={[
                        {
                            name: "Flutter",
                            category: "Cross-Platform Framework",
                            description: "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."
                        },
                        {
                            name: "React Native",
                            category: "Cross-Platform Framework",
                            description: "The best choice for apps that need to integrate deeply with existing native code or leverage a massive ecosystem of JavaScript libraries."
                        },
                        {
                            name: "Swift",
                            category: "Native iOS",
                            description: "When absolute maximum performance or access to cutting-edge Apple APIs is required, we go native."
                        },
                        {
                            name: "Kotlin",
                            category: "Native Android",
                            description: "Modern, concise, and safe code for robust native Android applications."
                        },
                        {
                            name: "Firebase",
                            category: "Backend as a Service",
                            description: "Instant backend setup with authentication, real-time databases, and scalable cloud functions."
                        },
                        {
                            name: "RevenueCat",
                            category: "In-App Purchases",
                            description: "Simplifying in-app subscriptions and purchase infrastructure for monetization."
                        }
                    ]}
                />

                <ServiceCTA />

                <Footer />
            </main>
        </div>
    );
}

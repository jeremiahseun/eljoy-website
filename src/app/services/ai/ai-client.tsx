"use client";

import { ExperienceHero } from "@/components/ui/experience-hero";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/ui/footer-section";
import { ServiceTechnologies, ServiceCTA } from "@/components/sections/service-content";

export default function AIServiceClient() {
    return (
        <div className="relative bg-black min-h-screen">
            <Header />

            <main className="w-full">
                <ExperienceHero
                    title={
                        <>
                            AI & <br />{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
                                AUTOMATION
                            </span>
                        </>
                    }
                    subtitle="Integrate cutting-edge AI models and automate complex business workflows with precision."
                    ctaText="Automate Now"
                    stats={[
                        {
                            id: "001",
                            title: "MODELS",
                            val: "GPT / Claude",
                            type: "text",
                        },
                        {
                            id: "002",
                            title: "ACCURACY",
                            val: "99.9%",
                            type: "progress",
                        },
                        {
                            id: "003",
                            title: "INTEGRATION",
                            val: "Seamless",
                            type: "text",
                        },
                    ]}
                />

                <ServiceTechnologies
                    title="AI & Automation Stack"
                    description="Leveraging the power of LLMs and autonomous agents to transform your business."
                    technologies={[
                        {
                            name: "Gemini",
                            category: "LLM",
                            description: "The industry standard for natural language understanding and generation."
                        },
                        {
                            name: "Claude",
                            category: "LLM",
                            description: "Anthropic's latest model, excelling in reasoning and coding tasks."
                        },
                        {
                            name: "LangChain",
                            category: "Framework",
                            description: "Building context-aware reasoning applications and chaining AI actions."
                        },
                        {
                            name: "Python",
                            category: "Language",
                            description: "The lingua franca of AI, Machine Learning, and Data Science."
                        },
                        {
                            name: "Pinecone",
                            category: "Vector Database",
                            description: "Long-term memory for AI to store and retrieve high-dimensional vector embeddings."
                        },
                        {
                            name: "n8n / Zapier",
                            category: "Automation",
                            description: "Workflow automation tools to connect your apps and services."
                        }
                    ]}
                />

                <ServiceCTA />

                <Footer />
            </main>
        </div>
    );
}

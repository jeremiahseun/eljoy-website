import { Metadata } from "next";
import AIServiceClient from "./ai-client";

export const metadata: Metadata = {
    title: "AI & Automation Solutions",
    description: "Integrate cutting-edge AI models and automate complex business workflows. Expert implementation of LLMs, Agents, and RAG systems.",
    alternates: {
        canonical: "https://eljoy.tech/services/ai",
    },
};

export default function AIServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI & Automation Solutions",
        "provider": {
            "@type": "Organization",
            "name": "EL-Joy"
        },
        "areaServed": "Worldwide",
        "description": "Integrate cutting-edge AI models, LLMs, and autonomous agents into business workflows."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AIServiceClient />
        </>
    );
}

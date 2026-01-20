import { Metadata } from "next";
import WebServiceClient from "./web-client";

export const metadata: Metadata = {
    title: "Web Development Services",
    description: "High-performance web applications built with Next.js, React, and modern rendering techniques. Scalable, secure, and SEO-optimized.",
    alternates: {
        canonical: "https://eljoy.tech/services/web",
    },
};

export default function WebServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Development",
        "provider": {
            "@type": "Organization",
            "name": "EL-Joy"
        },
        "areaServed": "Worldwide",
        "description": "High-performance web applications built with Next.js, React, and modern rendering techniques."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <WebServiceClient />
        </>
    );
}

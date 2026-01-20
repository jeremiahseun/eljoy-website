import { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
    // Root layout handles the default title and description
    // We can add structured data here later if needed
    alternates: {
        canonical: "https://eljoy.tech",
    },
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "EL-Joy",
        "url": "https://eljoy.tech",
        "logo": "https://eljoy.tech/icon.png",
        "sameAs": [
            "https://twitter.com/eljoy_tech",
            "https://linkedin.com/company/eljoy"
        ],
        "description": "Enterprise-Grade Software Studio building world-class mobile, web, and AI solutions."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HomeClient />
        </>
    );
}

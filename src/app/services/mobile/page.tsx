import { Metadata } from "next";
import MobileServiceClient from "./mobile-client";

export const metadata: Metadata = {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps using Flutter and React Native. iOS and Android solutions that feel fluid and responsive.",
    alternates: {
        canonical: "https://eljoy.tech/services/mobile",
    },
};

export default function MobileServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Mobile App Development",
        "provider": {
            "@type": "Organization",
            "name": "EL-Joy"
        },
        "areaServed": "Worldwide",
        "description": "Native and cross-platform mobile apps using Flutter and React Native."
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MobileServiceClient />
        </>
    );
}

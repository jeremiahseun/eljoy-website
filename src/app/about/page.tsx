import { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
    title: "About Us",
    description: "EL-Joy is a premier software studio delivering enterprise-grade mobile, web, and AI solutions. Discover our story, our values, and why top companies choose us.",
    alternates: {
        canonical: "https://eljoy.tech/about",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}

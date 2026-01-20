import { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
    title: "Our Work",
    description: "Explore our portfolio of successful mobile, web, and AI projects. From Fintech to Healthtech, see how EL-Joy transforms ideas into reality.",
    alternates: {
        canonical: "https://eljoy.tech/portfolio",
    },
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}

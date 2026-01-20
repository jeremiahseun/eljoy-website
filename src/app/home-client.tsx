"use client";

import { Suspense, lazy } from "react";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/ui/hero-1";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Services } from "@/components/sections/services";
import { Footer } from "@/components/ui/footer-section";

// Lazy load heavy sections for better initial performance
const Portfolio = lazy(() => import("@/components/sections/portfolio").then(m => ({ default: m.Portfolio })));
const Features = lazy(() => import("@/components/sections/features").then(m => ({ default: m.Features })));
const Process = lazy(() => import("@/components/sections/process").then(m => ({ default: m.Process })));
const Contact = lazy(() => import("@/components/sections/contact").then(m => ({ default: m.Contact })));
const InteractiveNebulaShader = lazy(() => import("@/components/ui/liquid-shader").then(m => ({ default: m.InteractiveNebulaShader })));

// Minimal loading placeholder
const SectionLoader = () => (
    <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
);

export default function HomeClient() {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden font-sans bg-black">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="relative">
                {/* Hero with Spiral Animation */}
                <Hero
                    eyebrow="Software Studio"
                    title="Enterprise-Grade Solutions. Startup Speed."
                    subtitle="We build world-class mobile, web, and AI solutions that transform businesses. From concept to deployment, we're your technology partner."
                    ctaLabel="Explore Our Work"
                    ctaHref="#portfolio"
                    secondaryCtaLabel="Schedule a Call"
                    secondaryCtaHref="#contact"
                />

                {/* Trusted By */}
                <div className="relative z-10 bg-black">
                    <TrustedBy />
                </div>

                {/* Services with Bento Grid */}
                <div className="relative z-10 bg-black">
                    <Services />
                </div>

                {/* Portfolio with Nebula Shader Background */}
                <Suspense fallback={<SectionLoader />}>
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <InteractiveNebulaShader disableCenterDimming />
                        </div>
                        <div className="relative z-10">
                            <Portfolio />
                        </div>
                    </div>
                </Suspense>

                {/* Features (Why EL-Joy) */}
                <Suspense fallback={<SectionLoader />}>
                    <div className="relative z-10 bg-black">
                        <Features />
                    </div>
                </Suspense>

                {/* Process with Glare Cards */}
                <Suspense fallback={<SectionLoader />}>
                    <div className="relative z-10 bg-black">
                        <Process />
                    </div>
                </Suspense>

                {/* Contact with Background Beams */}
                <Suspense fallback={<SectionLoader />}>
                    <div id="contact" className="relative z-10 bg-black">
                        <Contact />
                    </div>
                </Suspense>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

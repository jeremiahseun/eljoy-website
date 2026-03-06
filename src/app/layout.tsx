import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { FloatingCTA } from "@/components/ui/floating-cta";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://eljoy.tech"),
    title: {
        default: "EL-Joy | Enterprise-Grade Software Studio",
        template: "%s | EL-Joy",
    },
    description:
        "We build world-class mobile, web, and AI solutions that transform businesses. From concept to deployment, we're your technology partner.",
    keywords: [
        "Software Development",
        "Mobile App Development",
        "Web Development",
        "AI Solutions",
        "Flutter",
        "React",
        "Next.js",
        "Enterprise Software",
        "Startup MVP",
        "React Native"
    ],
    authors: [{ name: "EL-Joy Team", url: "https://eljoy.tech" }],
    creator: "EL-Joy Team",
    publisher: "EL-Joy",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://eljoy.tech",
        title: "EL-Joy | Enterprise-Grade Software Studio",
        description:
            "We build world-class mobile, web, and AI solutions that transform businesses. From concept to deployment, we're your technology partner.",
        siteName: "EL-Joy",
        images: [
            {
                url: "/images/logo/el-joy-full.png",
                width: 1200,
                height: 630,
                alt: "EL-Joy Software Studio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "EL-Joy | Enterprise-Grade Software Studio",
        description:
            "We build world-class mobile, web, and AI solutions that transform businesses. From concept to deployment, we're your technology partner.",
        images: ["/images/logo/el-joy-full.png"],
        creator: "@eljoy_tech",
    },
    icons: {
        icon: "/images/logo/el-joy-full.png",
        shortcut: "/images/logo/el-joy-full.png",
        apple: "/images/logo/el-joy-full.png",
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: "https://eljoy.tech",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Analytics />
                <FloatingCTA />
            </body>
        </html>
    );
}

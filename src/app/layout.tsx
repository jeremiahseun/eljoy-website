import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    creator: "EL-Joy",
    publisher: "EL-Joy",
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
                url: "/og-image.png", // We might need to ensure this exists or create it
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
        images: ["/og-image.png"],
        creator: "@eljoy_tech", // Assuming this handle or updating later
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png", // Assuming these exist or will be default
    },
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
            </body>
        </html>
    );
}

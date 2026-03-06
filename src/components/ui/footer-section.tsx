'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    external?: boolean;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Services',
        links: [
            { title: 'Mobile Development', href: '/services/mobile' },
            { title: 'Web Development', href: '/services/web' },
            { title: 'AI & Automation', href: '/services/ai' },
        ],
    },
    {
        label: 'Products',
        links: [
            { title: 'Deo', href: '#', external: true },
            { title: 'Rader', href: '#', external: true },
            { title: 'Preggy', href: '#', external: true },
        ],
    },
    {
        label: 'Company',
        links: [
            { title: 'About', href: '/about' },

            { title: 'Contact', href: '/contact' },
        ],
    },
    {
        label: 'Connect',
        links: [
            { title: 'LinkedIn', href: 'https://www.linkedin.com/in/jeremiah-seun-eljoy/', icon: Linkedin, external: true },
            { title: 'GitHub', href: 'https://www.github.com/jeremiahseun', icon: Github, external: true },
            { title: 'Email', href: 'mailto:hello@eljoy.tech', icon: Mail },
            { title: 'WhatsApp', href: 'https://wa.me/2348163791889?text=Hi%20EL-Joy%2C%20I%27m%20interested%20in%20building%20a%20project.%20Can%20we%20talk%3F', external: true }
        ],
    },
];

export function Footer() {
    return (
        <footer className="relative w-full border-t border-white/10 z-10 bg-black">
            <div className="w-full px-6 md:px-12 lg:px-20 py-16 lg:py-20">
                <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 absolute top-0 left-0 right-0 h-px blur-sm" />

                <div className="grid w-full gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-12">
                    {/* Logo and tagline */}
                    <AnimatedContainer className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                                EL-Joy
                            </span>
                        </Link>
                        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                            Enterprise-Grade Solutions.<br />Startup Speed.
                        </p>
                        <p className="text-gray-500 mt-6 text-xs">
                            © {new Date().getFullYear()} EL-Joy Technologies.<br />All rights reserved.
                        </p>
                    </AnimatedContainer>

                    {/* Footer link sections */}
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.05}>
                            <div>
                                <h3 className="text-sm font-medium text-white mb-4">{section.label}</h3>
                                <ul className="text-gray-400 space-y-3 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            {link.external ? (
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-white inline-flex items-center transition-all duration-300"
                                                >
                                                    {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                                                    {link.title}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="hover:text-white inline-flex items-center transition-all duration-300"
                                                >
                                                    {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                                                    {link.title}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Smartphone, Globe, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const serviceLinks = [
    { href: "/services/mobile", label: "Mobile Development", icon: <Smartphone className="w-4 h-4" /> },
    { href: "/services/web", label: "Web Development", icon: <Globe className="w-4 h-4" /> },
    { href: "/services/ai", label: "AI & Automation", icon: <Sparkles className="w-4 h-4" /> },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (isHomePage && href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-black/40 backdrop-blur-xl border-b border-white/10 py-3 supports-[backdrop-filter]:bg-black/30"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                        EL-Joy
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {/* Services Dropdown */}
                    <div ref={servicesRef} className="relative">
                        <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Services
                            <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
                        </button>

                        {isServicesOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 py-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl">
                                {serviceLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsServicesOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-purple-400">{link.icon}</span>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>


                    <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                    >
                        <Link href="/contact">Schedule a Call</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                        {/* Services Section */}
                        <div className="py-2">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Services</span>
                            <div className="mt-2 space-y-1">
                                {serviceLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 px-2 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        <span className="text-purple-400">{link.icon}</span>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-white/10 pt-2">

                            <Link
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
                            >
                                Contact
                            </Link>
                        </div>

                        <div className="pt-2">
                            <Button
                                asChild
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                            >
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Schedule a Call</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

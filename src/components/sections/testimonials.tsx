"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    company: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "From every design to every feature, functionality is a priority for him. Jeremiah is the type of professional that goes beyond the norms — thinking like the founder of the project, fully understanding the solution you're trying to solve.",
        name: "Vendor Partner",
        role: "CEO",
        company: "Logistics Platform",
    },
    {
        quote: "An exceptional colleague — effective communication, teamwork, leadership, and problem-solving have consistently delivered outstanding results. His unique ability to always find a solution to challenges is unmatched.",
        name: "Engineering Partner",
        role: "Senior Engineer",
        company: "Enterprise Client",
    },
    {
        quote: "Delivered 99.9% crash-free sessions and reduced our system downtime by 35%. The booking system they architected resulted in a 40% increase in bookings within 3 months of launch.",
        name: "Shearify Team",
        role: "Product",
        company: "Shearify Ltd, Oman",
    },
    {
        quote: "Reduced our integration time from 24 weeks to just 7 days. The SDK now powers 27+ commercial banking apps and counting. Truly enterprise-grade engineering.",
        name: "Peerpay Network",
        role: "Engineering",
        company: "Peerpay Network, Lagos",
    },
    {
        quote: "Achieved 60% user adoption within 6 months through intuitive UX and reliable real-time features. WebSocket implementation improved ride request response rates by 50%.",
        name: "Impresanera Team",
        role: "Operations",
        company: "Impresanera Ltd",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-4 relative z-10 bg-black overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                        What Our Partners Say
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real results from real partnerships — here&apos;s what it&apos;s like working with EL-Joy.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
                        >
                            <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                                {/* Quote Icon */}
                                <Quote className="w-8 h-8 text-purple-500/30 mb-4" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">{testimonial.name}</p>
                                        <p className="text-gray-500 text-xs">{testimonial.role} · {testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

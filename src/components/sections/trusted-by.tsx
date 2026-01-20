"use client";

import Image from "next/image";
import { motion } from "motion/react";

const clients = [
    { name: "Vendoor", logo: "/images/clients/vendoor.png" },
    { name: "Stakesmart", logo: "/images/clients/stakesmart.png" },
    { name: "Intimately", logo: "/images/clients/intimately.svg" },
];

export function TrustedBy() {
    return (
        <section className="py-16 px-4 relative z-10">
            <div className="container mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-10"
                >
                    Trusted by forward-thinking teams
                </motion.p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={120}
                                height={40}
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

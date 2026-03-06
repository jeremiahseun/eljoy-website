"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/ui/footer-section";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { useState, useTransition } from "react";
import { submitContactForm } from "./actions";

const contactInfo = [
    {
        icon: <Mail className="w-5 h-5" />,
        label: "Email",
        value: "hello@eljoy.tech",
        href: "mailto:hello@eljoy.tech",
    },
    {
        icon: <Phone className="w-5 h-5" />,
        label: "Phone",
        value: "+234 816 379 1889",
        href: "tel:+2348163791889",
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        label: "Location",
        value: "Lagos, Nigeria",
        href: null,
    },
    {
        icon: <Clock className="w-5 h-5" />,
        label: "Response Time",
        value: "Within 24 hours",
        href: null,
    },
];

const projectTypes = [
    "Mobile App Development",
    "Web Application",
    "AI/Automation Solution",
    "Cloud Infrastructure",
    "Consulting",
    "Other",
];

const budgetRanges = [
    "< $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Not sure yet",
];

export default function ContactClient() {
    const [isPending, startTransition] = useTransition();
    const [formState, setFormState] = useState<{ success: boolean; message: string; errors?: any } | null>(null);

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            const result = await submitContactForm({ success: false, message: "" }, formData);
            setFormState(result);
        });
    };

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden font-sans bg-black">
            <Header />

            <main className="relative pt-24">
                {/* Hero Section */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                                <MessageSquare className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-purple-300">Get in Touch</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                Let&apos;s Build Something{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    Amazing
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                                Have a project in mind? We&apos;d love to hear about it. Send us a message and
                                we&apos;ll get back to you within 24 hours.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form & Info */}
                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-5 gap-12">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-2"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                                <p className="text-gray-400 mb-8">
                                    Fill out the form or reach out directly. We&apos;re here to help turn your
                                    ideas into reality.
                                </p>

                                <div className="space-y-6">
                                    {contactInfo.map((item) => (
                                        <div key={item.label} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="text-white hover:text-purple-400 transition-colors">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-white">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="mt-12">
                                    <h3 className="text-sm font-semibold text-gray-400 mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="https://www.linkedin.com/in/jeremiah-seun-eljoy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                        </a>
                                        <a href="https://www.github.com/jeremiahseun" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                        </a>
                                        <a href="https://wa.me/2348163791889?text=Hi%20EL-Joy%2C%20I%27m%20interested%20in%20building%20a%20project.%20Can%20we%20talk%3F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-3"
                            >
                                {formState?.success ? (
                                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                                        <p className="text-gray-400 mb-6">
                                            {formState.message}
                                        </p>
                                        <Button
                                            onClick={() => setFormState(null)}
                                            variant="outline"
                                            className="border-white/20 text-white hover:bg-white/10"
                                        >
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form action={handleSubmit} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="Your name"
                                                />
                                                {formState?.errors?.name && <p className="text-red-500 text-xs mt-1">{formState.errors.name[0]}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                                    placeholder="you@company.com"
                                                />
                                                {formState?.errors?.email && <p className="text-red-500 text-xs mt-1">{formState.errors.email[0]}</p>}
                                            </div>
                                        </div>

                                        <div className="hidden">
                                            <input type="hidden" name="projectType" value="General Inquiry" />
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                                Tell us about your project *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                                placeholder="Describe your project, goals, and timeline..."
                                            />
                                            {formState?.errors?.message && <p className="text-red-500 text-xs mt-1">{formState.errors.message[0]}</p>}
                                        </div>

                                        {formState?.message && !formState.success && (
                                            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
                                                {formState.message}
                                            </div>
                                        )}

                                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                            <Button
                                                type="submit"
                                                disabled={isPending}
                                                size="lg"
                                                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                                            >
                                                {isPending ? (
                                                    <span className="flex items-center gap-2">
                                                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                        </svg>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2">
                                                        Send Message <Send className="w-4 h-4" />
                                                    </span>
                                                )}
                                            </Button>

                                            {/* Google Calendar Link */}
                                            <Button
                                                asChild
                                                type="button"
                                                variant="outline"
                                                size="lg"
                                                className="flex-1 bg-white hover:bg-gray-100 text-black border-transparent transition-all group font-medium"
                                            >
                                                <a href="https://calendar.app.google/TgjKmKvC1bNUrdWE8" target="_blank" rel="noopener noreferrer">
                                                    <svg className="w-5 h-5 mr-2 text-[#4285F4] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M16 2v2h-8V2H6v2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-2zm4 18H4V9h16v11zm-5.4-8.8l-4.1 4.1-1.6-1.6-1.4 1.4 3 3 5.5-5.5-1.4-1.4z" />
                                                    </svg>
                                                    Book via Calendar
                                                </a>
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-950/10">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "How long does a typical project take?",
                                    a: "Project timelines vary based on scope. A simple MVP might take 4-6 weeks, while complex enterprise solutions can take 3-6 months. We'll provide a detailed timeline after understanding your requirements."
                                },
                                {
                                    q: "What's your development process?",
                                    a: "We follow an agile methodology with 2-week sprints. You'll have regular demos, access to a staging environment, and direct communication with our team throughout the project."
                                },
                                {
                                    q: "Do you provide ongoing support?",
                                    a: "Yes! We offer various support packages including bug fixes, feature updates, and 24/7 monitoring. Many clients continue working with us long after launch."
                                },
                                {
                                    q: "What technologies do you specialize in?",
                                    a: "We're experts in Flutter, React/Next.js, Node.js, Python, and cloud platforms (AWS/GCP). We also have deep experience with AI/ML tools like OpenAI, Gemini, and LangChain."
                                },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                                    <p className="text-gray-400">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

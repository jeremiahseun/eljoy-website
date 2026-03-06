"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Send, CheckCircle } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";

export function Contact() {
    const [isPending, startTransition] = useTransition();
    const [formState, setFormState] = useState<{ success: boolean; message: string; errors?: any } | null>(null);

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            const result = await submitContactForm({ success: false, message: "" }, formData);
            setFormState(result);
        });
    };

    return (
        <BackgroundBeamsWithCollision className="min-h-[80vh] py-24 px-4">
            <div className="container mx-auto max-w-3xl relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                        Ready to Build Something{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Great?
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Tell us about your project and we'll schedule a discovery call.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {formState?.success ? (
                        <div className="text-center py-12 px-6 rounded-2xl border border-green-500/30 bg-green-500/10 backdrop-blur-sm">
                            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                Message Sent!
                            </h3>
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
                        <form action={handleSubmit} className="space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                    {formState?.errors?.name && <p className="text-red-500 text-xs mt-1">{formState.errors.name[0]}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                                        placeholder="john@company.com"
                                    />
                                    {formState?.errors?.email && <p className="text-red-500 text-xs mt-1">{formState.errors.email[0]}</p>}
                                </div>
                            </div>

                            <div className="hidden">
                                <input type="hidden" name="projectType" value="General Inquiry" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                                    Project Brief *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
                                    placeholder="Tell us about your project, goals, and timeline..."
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
                                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 py-6 text-lg font-medium"
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
                                        <>
                                            Request a Call
                                            <Send className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </Button>
                                <Button
                                    asChild
                                    type="button"
                                    variant="outline"
                                    className="flex-1 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-white py-6 text-lg font-medium transition-all group"
                                >
                                    <a href="https://wa.me/2348163791889?text=Hi%20EL-Joy%2C%20I%27m%20interested%20in%20building%20a%20project.%20Can%20we%20talk%3F" target="_blank" rel="noopener noreferrer">
                                        <svg className="w-6 h-6 mr-2 text-green-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}

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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                                        placeholder="Acme Inc."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
                                        Project Type *
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        required
                                        defaultValue=""
                                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-black" disabled>Select a project type</option>
                                        <option value="Mobile App Development" className="bg-black">Mobile Development</option>
                                        <option value="Web Application" className="bg-black">Web Development</option>
                                        <option value="AI/Automation Solution" className="bg-black">AI & Automation</option>
                                        <option value="Other" className="bg-black">Other</option>
                                    </select>
                                    {formState?.errors?.projectType && <p className="text-red-500 text-xs mt-1">{formState.errors.projectType[0]}</p>}
                                </div>
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

                            <Button
                                type="submit"
                                disabled={isPending}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 py-6 text-lg font-medium"
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
                        </form>
                    )}
                </motion.div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}

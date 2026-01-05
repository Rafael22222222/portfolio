"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Mail, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-20 px-4 flex items-center justify-center">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-muted max-w-xl mx-auto">
                        Have a project in mind or just want to say hello? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="space-y-8"
                    >
                        <GlassCard className="p-8 h-full flex flex-col justify-center hover:shadow-[0_0_50px_rgba(251,191,36,0.2)] transition-all duration-500">
                            <h3 className="text-2xl font-bold mb-6 text-primary">Contact Info</h3>

                            <div className="space-y-6">
                                <a href="mailto:raphaeligbo554@gmail.com" className="flex items-center space-x-4 text-secondary hover:text-gold-light transition-colors duration-300">
                                    <div className="icon-container p-3 rounded-full">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span>raphaeligbo554@gmail.com</span>
                                </a>

                                <div className="flex gap-4 pt-4">
                                    <a href="mailto:raphaeligbo554@gmail.com" className="icon-container p-3 rounded-full">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                    <a href="https://linkedin.com/in/rafael-igbo" target="_blank" rel="noopener noreferrer" className="icon-container p-3 rounded-full">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="https://x.com/lord_rafael_i?s=21" target="_blank" rel="noopener noreferrer" className="icon-container p-3 rounded-full">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <GlassCard className="p-8 hover:shadow-[0_0_50px_rgba(251,191,36,0.2)] transition-all duration-500">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="input-theme w-full rounded-lg px-4 py-3 focus:outline-none"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="input-theme w-full rounded-lg px-4 py-3 focus:outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="input-theme w-full rounded-lg px-4 py-3 focus:outline-none resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <NeonButton className="w-full">Send Message</NeonButton>
                            </form>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
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
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <GlassCard className="p-8 h-full flex flex-col justify-center hover:shadow-[0_0_40px_rgba(148,163,184,0.5)] hover:border-accent-mature/30 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

                            <div className="space-y-6">
                                <a href="mailto:raphaeligbo554@gmail.com" className="flex items-center space-x-4 text-gray-300 hover:text-neon-cyan transition-colors">
                                    <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span>raphaeligbo554@gmail.com</span>
                                </a>

                                <div className="flex gap-4 pt-4">
                                    <a href="https://github.com/Rafael22222222" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-mature/50 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(148,163,184,0.4)] transition-all duration-300">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="https://linkedin.com/in/rafael-igbo" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-mature/50 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(148,163,184,0.4)] transition-all duration-300">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="https://x.com/lord_rafael_i?s=21" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-mature/50 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(148,163,184,0.4)] transition-all duration-300">
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
                        transition={{ delay: 0.4 }}
                    >
                        <GlassCard className="p-8 hover:shadow-[0_0_40px_rgba(148,163,184,0.5)] hover:border-accent-mature/30 transition-all duration-300">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-mature/70 focus:ring-2 focus:ring-accent-mature/30 hover:border-white/20 focus:bg-black/30 transition-all duration-300 text-white placeholder:text-gray-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-mature/70 focus:ring-2 focus:ring-accent-mature/30 hover:border-white/20 focus:bg-black/30 transition-all duration-300 text-white placeholder:text-gray-500"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent-mature/70 focus:ring-2 focus:ring-accent-mature/30 hover:border-white/20 focus:bg-black/30 transition-all duration-300 text-white resize-none placeholder:text-gray-500"
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

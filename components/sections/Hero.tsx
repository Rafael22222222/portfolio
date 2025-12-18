"use client";

import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="z-10 text-center md:text-left order-2 md:order-1"
                >
                    <h2 className="text-muted tracking-widest text-sm md:text-base mb-4 uppercase font-medium">
                        Hire Me
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight text-primary">
                        I am <span className="text-gradient block md:inline">Rafael Igbo</span>
                    </h1>
                    <p className="text-secondary text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto md:mx-0">
                        I build modern and simple websites/web apps that are fast, clean, built to scale and solve problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                        <NeonButton variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects
                        </NeonButton>
                        <NeonButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </NeonButton>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative z-10 order-1 md:order-2 flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-[500px] md:h-[600px]">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold-premium to-gold-light rounded-2xl blur-3xl opacity-30 animate-pulse" />

                        {/* Image Container */}
                        <div className="relative w-full h-full glass rounded-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for better text contrast */}
                            <img
                                src="/hero-image.jpg"
                                alt="Rafael Igbo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-premium rounded-br-2xl" />
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-dark rounded-tl-2xl" />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
            >
                <ArrowDown className="text-muted w-6 h-6" />
            </motion.div>
        </section>
    );
};


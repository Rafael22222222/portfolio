"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

const skills = [
    "HTML", "CSS", "JavaScript", "Next.js", "React", "TypeScript", "TailwindCSS",
    "Three.js", "Framer Motion", "Node.js", "GraphQL"
];

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Profile Image / Shape */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <motion.div
                        className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-cyan rounded-full blur-2xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity duration-500" />
                        <div className="relative w-full h-full glass rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(176,38,255,0.5)]">
                            <Image
                                src="/profile-v2.jpg"
                                alt="Rafael Igbo"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <GlassCard className="p-8 md:p-12 hover:shadow-[0_0_50px_rgba(148,163,184,0.4)] transition-all duration-500">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <p className="text-secondary mb-6 leading-relaxed">
                            I'm a full-stack developer who builds fast, clean, and scalable digital products. I specialize in turning ideas into fully functional websites and web apps,UI designs and also stable backend architecture. My focus is on writing reliable code, delivering smooth user experiences, and building products that actually solve problems.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-primary">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: "0 0 25px rgba(148, 163, 184, 0.4)",
                                        }}
                                        transition={{ delay: index * 0.05, duration: 0.4 }}
                                        className="tag-theme px-3 py-1 rounded-full text-sm cursor-pointer"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section >
    );
};


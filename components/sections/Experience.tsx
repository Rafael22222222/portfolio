"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const experiences = [
    {
        id: 1,
        role: "Full-Stack Developer & Digital Artist",
        company: "Healthcode, Limitless Studio",
        period: "2024 - Present",
        description: "Leading the frontend team in building scalable web applications using Next.js and React.",
    },
    {
        id: 2,
        role: "Intern → Junior Developer",
        company: "NIIT Nigeria",
        period: "2023 - 2024",
        description: "Started as an intern and progressed to junior developer, gaining hands-on experience in web development and software engineering.",
    },
    {
        id: 3,
        role: "Freelance Developer",
        company: "Self-employed",
        period: "2021 - 2023",
        description: "Worked with various clients to deliver custom web solutions and e-commerce platforms.",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="min-h-screen py-20 px-4 flex items-center justify-center">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                <div className="relative timeline-border border-l-2 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_15px_rgba(176,38,255,0.6)]" />

                            <GlassCard className="p-6 md:p-8 relative group hover:shadow-[0_0_50px_rgba(148,163,184,0.4)] hover:scale-[1.02] transition-all duration-500">
                                <span className="text-sm text-neon-cyan font-mono mb-2 block">
                                    {exp.period}
                                </span>
                                <h3 className="text-2xl font-bold text-primary mb-1">
                                    {exp.role}
                                </h3>
                                <h4 className="text-lg text-muted mb-4">
                                    {exp.company}
                                </h4>
                                <p className="text-secondary leading-relaxed">
                                    {exp.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "SmartBiz Lux",
        description: "A comprehensive business management dashboard for tracking sales, expenses, and inventory with real-time analytics.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind"],
        image: "/smartbiz-project.png",
        link: "https://smartbiz-lux.vercel.app/",
        github: "", // Add if available
    },
    {
        id: 2,
        title: "Ascend",
        description: "A transformation and habit tracker app for tracking daily rituals, deep-work sessions, and building discipline.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: "/ascend33-project.png",
        link: "https://ascend33.vercel.app/",
        github: "",
    },
    {
        id: 3,
        title: "Rafael.studio",
        description: "AI & App Architect portfolio showcasing innovative AI-powered applications and modern web development projects.",
        tags: ["React", "AI", "Tailwind", "Vite"],
        image: "/project3.jpg", // Placeholder - add screenshot if available
        link: "https://rafael-studio.vercel.app/",
        github: "",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        A selection of my recent work, showcasing my skills in frontend development and UI design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard hoverEffect className="h-full flex flex-col overflow-hidden group hover:shadow-[0_0_50px_rgba(251,191,36,0.2)] transition-all duration-500">
                                <div className="relative h-48 w-full bg-secondary/20 overflow-hidden rounded-t-lg">
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                    )}
                                    {!project.image && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-primary/50" />
                                            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
                                                🚀
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="p-4 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-gradient transition-all duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted text-sm mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="tag-theme text-xs px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <NeonButton
                                        variant="secondary"
                                        className="w-full text-xs py-2"
                                        onClick={() => project.link && window.open(project.link, '_blank')}
                                        disabled={!project.link}
                                    >
                                        {project.link ? 'View Live' : 'Coming Soon'}
                                    </NeonButton>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


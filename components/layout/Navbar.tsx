"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center glass border-b-0"
        >
            <Link href="/" className="text-2xl font-bold tracking-tighter">
                RAFAEL<span className="text-neon-purple">.</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium hover:text-neon-cyan transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="space-y-2">
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-8 h-0.5 bg-white"></span>
                </div>
            </button>

            {/* Mobile Menu Overlay (Simplified) */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full glass p-4 flex flex-col space-y-4 md:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium hover:text-neon-cyan"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </motion.nav>
    );
};

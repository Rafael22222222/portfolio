import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

export const NeonButton = ({
    children,
    variant = "primary",
    className,
    ...props
}: NeonButtonProps) => {
    const variants = {
        primary: "border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(176,38,255,0.4)]",
        secondary: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-6 py-3 rounded-full border transition-all duration-300 font-medium tracking-wide uppercase text-sm",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

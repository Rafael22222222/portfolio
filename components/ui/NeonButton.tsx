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
        primary: "bg-gold-premium text-black border-gold-premium hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
        secondary: "border-gold-premium text-gold-premium hover:bg-gold-premium/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]",
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

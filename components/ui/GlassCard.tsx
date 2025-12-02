import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({
  children,
  className,
  hoverEffect = false,
  ...props
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        hoverEffect && "hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  showArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", showArrow = false, children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium tracking-wide transition-colors duration-300 overflow-hidden";

    const variants = {
      primary: "bg-[#4EA8FF] text-black hover:bg-white px-8 py-4 rounded-full",
      secondary: "bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full",
      outline:
        "border border-white/20 hover:border-white/50 text-white bg-transparent px-8 py-4 rounded-full glass-panel",
      ghost: "text-white hover:text-[#4EA8FF] px-4 py-2",
    };

    return (
      // @ts-expect-error - framer-motion types clash with React 19 HTMLAttributes
      <motion.button
        ref={ref}
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        className={twMerge(baseStyles, variants[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {showArrow && (
            <motion.span
              variants={{
                hover: { x: 5 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          )}
        </span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

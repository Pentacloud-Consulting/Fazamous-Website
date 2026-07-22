"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };

  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={twMerge("flex flex-col gap-4 max-w-3xl", alignClass, className)}
    >
      {subtitle && (
        <motion.span
          variants={itemVariants}
          className="text-[#4EA8FF] uppercase tracking-[0.2em] text-sm font-semibold font-mono"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-tight"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

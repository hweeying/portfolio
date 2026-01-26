"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

// 1. Define strict interfaces for our props
interface BaseProps {
  children: React.ReactNode;
  className?: string;
}

interface RevealSectionProps extends BaseProps {
  id?: string;
  delay?: number;
}

interface DrawLineProps {
  d: string;
  className?: string;
}

// 2. A section that pops up with a springy bounce
export const RevealSection = ({ children, className, id, delay = 0 }: RevealSectionProps) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 50, scale: 0.95, rotate: -1 }}
    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
  >
    {children}
  </motion.section>
);

// 3. Staggered Container (for grids)
export const StaggerContainer = ({ children, className }: BaseProps) => {
  const containerVariants: Variants = {
    hidden: {},
    visible: { 
      transition: { staggerChildren: 0.1 } 
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

// 4. Individual Item that pops in
export const PopItem = ({ children, className }: BaseProps) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 12 }
    }
  };

  return (
    <motion.div
      className={className}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
};

// 5. An SVG line that "draws" itself
export const DrawLine = ({ d, className }: DrawLineProps) => (
  <motion.svg 
    viewBox="0 0 100 10" 
    className={`absolute -bottom-2 left-0 w-full h-4 overflow-visible ${className || ''}`}
  >
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  </motion.svg>
);
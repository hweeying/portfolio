'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Hero = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <motion.div style={{ y, opacity }} className="max-w-4xl z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono tracking-widest text-accent-bright backdrop-blur-md"
        >
          AVAILABLE FOR HIRE
        </motion.div>
        
        <h1 className="mb-8 text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-gradient block">Building digital</span>
          <span className="bg-gradient-to-r from-accent via-indigo-400 to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            experiences
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-foreground-muted md:text-xl leading-relaxed">
          I&apos;m a software engineer specialized in crafting precise, fluid interfaces. 
          Blending technical depth with visual design to build software that feels human.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="group relative rounded-lg bg-accent px-6 py-3 font-medium text-white shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] transition-all hover:bg-accent-bright hover:shadow-[0_0_0_1px_rgba(94,106,210,0.6),0_8px_20px_rgba(94,106,210,0.4)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>
          <button className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-medium text-foreground transition-all hover:bg-white/10 active:scale-95">
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};
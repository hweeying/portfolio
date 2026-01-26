'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SocialLink } from '@/app/components/ui/SocialLink';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

import { Variants } from 'framer-motion';

// Add 'as const' to the ease array
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export const Contact = () => {
  return (
    <section className="relative py-32 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUp}
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
            Ready to create <br />
            <span className="text-accent">something exceptional?</span>
          </h2>
          <p className="text-lg text-foreground-muted mb-10 max-w-xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <a href="mailto:hello@example.com" className="inline-block">
            <button className="group relative overflow-hidden rounded-full bg-foreground px-8 py-4 text-background-deep font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
            </button>
          </a>

          <div className="mt-16 flex justify-center gap-8">
             <SocialLink href="https://github.com" icon={<SiGithub size={20} />} label="GitHub" />
             <SocialLink href="https://linkedin.com" icon={<SiLinkedin size={20} />} label="LinkedIn" />
             <SocialLink href="https://twitter.com" icon={<SiX size={20} />} label="X (Twitter)" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
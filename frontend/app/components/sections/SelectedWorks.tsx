'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/app/components/ui/SpotlightCard';
import { projectData } from '@/app/data/portfolio';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as const
  }
};

const IconMap: Record<string, React.ReactNode> = {
  "E-Commerce Dashboard": <SiNextdotjs size={20} />,
  "Design System": <SiReact size={24} />,
  "Finance App": <SiTailwindcss size={24} />,
};

export const SelectedWorks = () => {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-white/[0.06]">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12 text-3xl font-semibold tracking-tight text-gradient md:text-4xl"
      >
        Selected Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:auto-rows-[300px]">
        {projectData.map((project) => (
          <motion.div 
            key={project.id}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            // variants={fadeUp} 
            className={project.size === 'large' ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-1"}
          >
            <SpotlightCard className={`h-full flex flex-col ${project.size === 'large' ? 'p-8 justify-end' : 'p-6 justify-between'}`}>
              {/* Optional: Add background image overlay for large cards here */}
              <div className="relative z-10">
                {project.size === 'large' && (
                  <div className="mb-4 flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-accent/20 text-accent">{IconMap[project.title]}</span>
                  </div>
                )}
                
                {project.size !== 'large' && (
                  <div className="p-2 w-fit rounded-lg bg-white/10 text-foreground mb-4">{IconMap[project.title]}</div>
                )}

                <h3 className={`font-bold text-foreground mb-2 group-hover:text-accent transition-colors ${project.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                  {project.title}
                </h3>
                <p className="text-foreground-muted mb-6 max-w-md">
                  {project.description}
                </p>
                
                {project.size === 'large' && (
                  <div className="flex gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded bg-black/40 text-foreground-subtle">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
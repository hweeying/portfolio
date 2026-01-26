'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/app/components/ui/SpotlightCard';
import { experienceData } from '@/app/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] } as const
  })
};

export const Experience = () => {
  return (
    <section className="container mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12 text-3xl font-semibold tracking-tight text-gradient md:text-4xl"
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {experienceData.map((job, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
          >
            <SpotlightCard className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                  <p className="text-accent text-sm font-mono mt-1">{job.company}</p>
                </div>
                <span className="text-sm font-mono text-foreground-subtle bg-white/5 px-3 py-1 rounded-full w-fit border border-white/5">
                  {job.period}
                </span>
              </div>
              <p className="mt-4 text-foreground-muted leading-relaxed max-w-2xl">
                {job.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map(tech => (
                  <span key={tech} className="text-xs font-medium text-foreground-subtle px-2 py-1 bg-white/[0.03] border border-white/[0.05] rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
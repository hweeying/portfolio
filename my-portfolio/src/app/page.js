'use client';

import {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ArrowRight, Github, Linkedin, Mail, Phone, Menu, X} from 'lucide-react';
import {Button} from '@/components/Button';
import {experience} from '@/data/Experience';
import SkillOrbit from '@/components/SkillOrbit';
import Image from 'next/image';
import {projects} from '@/data/Projects';
import {education} from '@/data/Educations';
import {Timeline} from '@/components/Timeline';
import {FaWhatsapp} from 'react-icons/fa';

const containerVars = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.1, delayChildren: 0.2},
  },
};

const itemVars = {
  hidden: {opacity: 0, y: 20},
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.4, ease: [0.25, 0, 0, 1]},
  },
};

const sectionVars = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.08, delayChildren: 0.06},
  },
};

const fadeUpVars = {
  hidden: {opacity: 0, y: 16},
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, ease: [0.25, 0, 0, 1]},
  },
};

const fadeInVars = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {duration: 0.5, ease: [0.25, 0, 0, 1]},
  },
};

export default function Home () {
  const [mobileOpen, setMobileOpen] = useState (false);

  // Close menu when resizing up to desktop
  useEffect (() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen (false);
    };
    window.addEventListener ('resize', onResize);
    return () => window.removeEventListener ('resize', onResize);
  }, []);

  // Lock body scroll when menu open
  useEffect (
    () => {
      document.body.style.overflow = mobileOpen ? 'hidden' : '';
      return () => {
        document.body.style.overflow = '';
      };
    },
    [mobileOpen]
  );

  const navLinks = [
    {href: '#me', label: 'ME'},
    {href: '#project', label: 'PROJECTS'},
    {href: '#experience', label: 'EXPERIENCE'},
    {href: '#education', label: 'EDUCATION'},
  ];

  const closeAndJump = href => {
    setMobileOpen (false);
    // let the menu start closing, then jump
    requestAnimationFrame (() => {
      const el = document.querySelector (href);
      el.scrollIntoView ({behavior: 'smooth', block: 'start'});
    });
  };

  return (
    <main className="min-h-screen pb-40 relative">
      {/* Navbar (desktop) */}
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tight">
            JASMINE LAI HWEE YING
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map (l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-mono hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating Burger (mobile) */}
      <button
        type="button"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen (v => !v)}
        className="md:hidden fixed top-4 right-4 z-50 inline-flex items-center justify-center
                   w-12 h-12 rounded-full border border-border bg-background/80 backdrop-blur-md
                   shadow-sm hover:border-accent transition-colors"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Expandable Menu */}
      <AnimatePresence>
        {mobileOpen &&
          <div>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              className="md:hidden fixed inset-0 z-40 bg-black/40"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setMobileOpen (false)}
            />

            {/* Panel */}
            <motion.aside
              className="md:hidden fixed top-0 right-0 z-50 h-full w-[86vw] max-w-sm
                         bg-background border-l border-border shadow-xl"
              initial={{x: '100%'}}
              animate={{x: 0}}
              exit={{x: '100%'}}
              transition={{type: 'spring', stiffness: 260, damping: 26}}
            >
              <div className="pt-20 px-6 pb-8 flex flex-col gap-6">
                <div className="font-display font-bold text-lg tracking-tight">
                  JASMINE LAI HWEE YING
                </div>

                <div className="flex flex-col">
                  {navLinks.map (l => (
                    <button
                      key={l.href}
                      onClick={() => closeAndJump (l.href)}
                      className="text-left py-4 border-b border-border font-mono text-sm
                                 hover:text-accent transition-colors"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>

                <div className="pt-2 flex gap-4 text-muted-foreground">
                  <a
                    href="https://github.com/hweeying"
                    className="hover:text-accent transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jasminehweeying"
                    className="hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:jasminehweeying@gmail.com"
                    className="hover:text-accent transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href="tel:+60167149223"
                    className="hover:text-accent transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/+60167149223"
                    className="hover:text-accent transition-colors"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="me" className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- Top Section: Hero Text (Unchanged) --- */}
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="max-w-5xl"
          >
            <motion.p
              variants={itemVars}
              className="font-mono text-accent mb-6"
            >
              01 / SOFTWARE ENGINEER
            </motion.p>
            <motion.h1
              variants={itemVars}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter mb-12"
            >
              Hi, I’m Jasmine <br />
            </motion.h1>

            <motion.p
              variants={itemVars}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
            >
              A software engineer who loves turning ideas into products
            </motion.p>

            <motion.div
              variants={itemVars}
              className="flex flex-wrap gap-8 items-center"
            >
              <Button variant="primary" href="#project">
                See Projects <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="flex gap-4 text-muted-foreground">
                <a
                  href="https://github.com/hweeying"
                  className="hover:text-accent transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jasminehweeying"
                  className="hover:text-accent transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:jasminehweeying@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="tel:+60167149223"
                  className="hover:text-accent transition-colors"
                >
                  <Phone className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/+60167149223"
                  className="hover:text-accent transition-colors"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>
          {/* Right Side: Skill Orbit */}
          <div className="flex justify-center lg:justify-start w-full">
            <SkillOrbit />
          </div>
        </div>

      </section>

      {/* Selected Work */}
      <section
        id="project"
        className="py-20 px-6 max-w-7xl mx-auto border-t border-border"
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">

          <div className="md:w-1/4">
            <h2 className="font-mono text-sm text-accent sticky top-24">
              02 / PROJECTS
            </h2>
          </div>

          <motion.div
            variants={sectionVars}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.2, margin: '0px 0px -80px 0px'}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:w-3/4"
          >
            {projects.map (project => (
              <motion.a
                variants={fadeUpVars}
                key={project.id}
                href={project.href}
                target="_blank"
                className="group relative border border-border hover:border-accent transition-colors duration-150 block"
              >
                {/* oversized index */}
                <div className="pointer-events-none absolute -top-8 -left-3 font-display font-bold text-8xl tracking-tighter text-muted-foreground/10">
                  {project.id}
                </div>

                {/* preview */}
                <div className="relative aspect-[2/1] overflow-hidden bg-muted border-b border-border">
                  {project.image
                    ? <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    : <div className="h-full w-full flex items-center justify-center font-mono text-xs tracking-widest text-muted-foreground/60">
                        [ COMING SOON ]
                      </div>}
                </div>

                <div className="p-6 flex flex-col gap-6">
                  <div className="relative inline-block w-fit">
                    <h3 className="font-display text-2xl font-bold tracking-tighter leading-tight group-hover:text-accent transition-colors duration-150">
                      {project.title}
                    </h3>
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs tracking-widest text-muted-foreground/70">
                    {project.tags.map (tag => (
                      <span
                        key={tag}
                        className="border border-border px-2 py-1 uppercase group-hover:border-accent/30 group-hover:text-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-6 max-w-7xl mx-auto border-t border-border"
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">

          {/* Sticky Label */}
          <div className="md:w-1/4">
            <h2 className="font-mono text-sm text-accent sticky top-24">
              03 / EXPERIENCE
            </h2>
          </div>

          {/* Timeline Grid */}
          <motion.div
            variants={sectionVars}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.2, margin: '0px 0px -80px 0px'}}
            className="md:w-3/4 flex flex-col"
          >
            {experience.map ((job, index) => (
              <motion.div
                variants={fadeUpVars}
                key={index}
                className="group border-b border-border py-12 first:pt-0 last:border-none transition-colors duration-300 hover:border-accent/50"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                  <h3 className="font-display text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                    {job.role}
                  </h3>
                  <span className="font-mono text-sm text-accent tracking-wide">
                    {job.date}
                  </span>
                </div>

                <div className="text-xl text-muted-foreground mb-6 font-medium">
                  {job.company}
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-6">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {job.stack.map (tech => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted-foreground/60 border border-border px-2 py-1 uppercase tracking-wider group-hover:border-accent/30 group-hover:text-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="py-16 px-6 max-w-7xl mx-auto border-t border-border"
      >
        <div className="flex flex-col md:flex-row gap-10 md:gap-24">
          <div className="md:w-1/4">
            <h2 className="font-mono text-sm text-accent sticky top-24">
              04 / EDUCATION
            </h2>
          </div>

          <motion.div
            variants={fadeInVars}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25, margin: '0px 0px -80px 0px'}}
            className="md:w-3/4"
          >
            <Timeline items={education} />
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 md:gap-0 md:items-center md:justify-between">

          {/* Left */}
          <div className="flex flex-col gap-2">
            <span className="font-display font-bold tracking-tight">
              JASMINE LAI HWEE YING
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Software Engineer · Building things on the web
            </span>
          </div>

          {/* Center (optional links) */}
          <div className="flex gap-6 font-mono text-xs tracking-widest text-muted-foreground">
            <a href="#project" className="hover:text-accent transition-colors">
              PROJECTS
            </a>
            <a
              href="#experience"
              className="hover:text-accent transition-colors"
            >
              EXPERIENCE
            </a>
            <a
              href="#education"
              className="hover:text-accent transition-colors"
            >
              EDUCATION
            </a>
          </div>

          {/* Right (socials) */}
          <div className="flex gap-4 text-muted-foreground">
            <a
              href="https://github.com/hweeying"
              className="hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasminehweeying"
              className="hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jasminehweeying@gmail.com"
              className="hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+60167149223"
              className="hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/+60167149223"
              className="hover:text-accent transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
            <span>© {new Date ().getFullYear ()} Jasmine Lai Hwee Ying</span>
            <span>Designed & built with care</span>
          </div>
        </div>
      </footer>

    </main>
  );
}

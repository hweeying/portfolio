"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/app/components/ui/Button';
import { Card } from '@/app/components/ui/Card';
import { Github, Linkedin, ArrowRight, MessageCircleMore } from 'lucide-react';
import { RevealSection, StaggerContainer, PopItem, DrawLine } from '@/app/components/Animators';
import SkillOrbit from '@/app/components/SkillOrbit';

export default function Portfolio() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-paper bg-paper-pattern">
      
      {/* --- NAVBAR --- */}
      <nav className="w-full sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b-2 border-dashed border-pencil/10 transition-all">
        <div className="max-w-5xl mx-auto p-6 flex justify-between items-center">
          <div className="font-heading font-bold text-2xl rotate-2 border-2 border-pencil p-2 rounded-wobbly bg-white shadow-hard-sm">
            Jasmine Lai
          </div>
          <div className="hidden md:flex gap-8 font-body text-lg">
            {['Work', 'Skills', 'About'].map((item, i) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`
                  hover:text-correction hover:line-through decoration-2 transition-all 
                  ${i % 2 ? 'rotate-1' : '-rotate-1'}
                `}
              >
                {item}
              </a>
            ))}
          </div>
          <a href='#contact'>
            <Button className="hidden md:inline-flex" variant="secondary">Contact</Button>
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <RevealSection className="max-w-5xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-6 relative z-10">
          {/* Status Badges */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="inline-block px-4 py-2 bg-highlighter border-2 border-pencil rounded-wobbly -rotate-2 animate-jiggle">
              <span className="font-heading font-bold text-pencil">Open to Work — Full-Time</span>
            </div>
            <div className="inline-block px-4 py-2 bg-white border-2 border-pencil rounded-wobbly rotate-1">
              <span className="font-heading font-bold text-pencil">MY • SG • AU</span>
            </div>
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl text-pencil leading-[0.9]">
            I build 
            <span className="text-correction inline-block relative mx-4">
              stuff
              {/* Animated Drawing Underline */}
              <DrawLine d="M0,8 Q50,15 100,5" className="text-correction" />
            </span> 
            for the web.
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-pencil/80 max-w-md">
            Hi, I&apos;m Jasmine. A full-stack engineer building production-ready web and mobile apps. I solve real problems with clean, scalable code.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 relative">
            <a href="#work"><Button>View Projects</Button></a>
            <a href='https://github.com/Jasmine-18' target='_blank' rel="noreferrer">
              <Button variant="secondary" className="gap-2">
                <Github className="w-5 h-5" /> GitHub
              </Button>
            </a>
            
            {/* Hand-drawn Arrow SVG Decoration (Static is fine here as it loops) */}
            <svg className="absolute -right-20 -top-10 w-24 h-24 text-pencil hidden md:block animate-pulse" viewBox="0 0 100 100">
              <path 
                d="M20,80 Q50,20 80,60 L75,50 M80,60 L70,70" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeDasharray="4 2"
                className="rotate-12"
              />
            </svg>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rotate-2 md:rotate-3 hover:-rotate-1 transition-transform duration-500 group">
          <div className="aspect-square bg-white border-[3px] border-pencil rounded-wobbly shadow-hard-lg overflow-hidden relative flex items-center justify-center">
             {/* Profile Image Container */}
              <div className="w-[80%] h-[80%] relative border-[3px] border-pencil rounded-wobbly-sm overflow-hidden shadow-hard-sm rotate-2 hover:rotate-0 transition-all duration-300 group-hover:scale-105">
                <Image 
                  src="/profile.JPG" 
                  alt="Jasmine Lai"
                  fill
                  className="object-cover hover:grayscale-0 transition-all duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-paper-muted/10 mix-blend-multiply pointer-events-none" />
              </div>
             
             {/* Corner marks */}
             <div className="absolute top-6 left-6 w-6 h-6 border-t-[3px] border-l-[3px] border-correction rounded-tl-lg" />
             <div className="absolute bottom-6 right-6 w-6 h-6 border-b-[3px] border-r-[3px] border-correction rounded-br-lg" />
          </div>
          
          {/* Bouncing Element */}
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-highlighter border-[3px] border-pencil rounded-full flex items-center justify-center animate-bounce hidden md:flex">
             <ArrowRight className="w-8 h-8 -rotate-45" />
          </div>
        </div>
      </RevealSection>

      {/* --- SKILLS --- */}
      <RevealSection id="skills" className="scroll-mt-24 py-20 bg-white/50 border-y-[3px] border-dashed border-pencil/20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 relative">
            <h2 className="font-heading text-5xl md:text-6xl text-pencil inline-block relative z-10">
              My Toolkit
              <DrawLine d="M0,5 Q50,15 100,5" className="text-correction" />
            </h2>
          </div>

          <StaggerContainer className="flex flex-wrap justify-center gap-8">
              {[
                { src: "/skills/flutter.png", label: "Flutter" },
                { src: "/skills/react.png", label: "React" },
                { src: "/skills/node.png", label: "Node.js" },
                { src: "/skills/jquery.png", label: "jQuery" },
                { src: "/skills/swift.png", label: "Swift" },
                { src: "/skills/springboot.png", label: "Spring Boot" },
                { src: "/skills/django.png", label: "Django" },
                { src: "/skills/js.png", label: "JavaScript" },
                { src: "/skills/python.png", label: "Python" },
                { src: "/skills/r.svg", label: "R Lang" },
                { src: "/skills/git.png", label: "Git" },
                { src: "/skills/riverpod.png", label: "Riverpod" },
                { src: "/skills/langchain.png", label: "LangChain" },
                { src: "/skills/ml.svg", label: "ML" },
                { src: "/skills/tableau.png", label: "Tableau" },
                { src: "/skills/junit.png", label: "JUnit" },
                { src: "/skills/firebase.png", label: "Firebase" },
                { src: "/skills/awsrds.png", label: "AWS RDS" },
                { src: "/skills/postgresql.png", label: "PostgreSQL" },
                { src: "/skills/mongodb.png", label: "MongoDB" },
                { src: "/skills/mysql.png", label: "MySQL" },
                { src: "/skills/figma.png", label: "Figma" },
                { src: "/skills/agile.jpg", label: "Agile" },
              ].map((skill, i) => (
                <PopItem 
                  key={i} 
                  className={`
                    flex flex-col items-center justify-center text-center
                    w-28 h-28 md:w-36 md:h-36 
                    bg-white border-[3px] border-pencil rounded-wobbly-sm 
                    shadow-hard hover:shadow-hard-lg hover:-translate-y-1 transition-all cursor-default 
                    ${i % 2 === 0 ? 'rotate-1' : '-rotate-2'}
                  `}
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3">
                    <Image 
                      src={skill.src} 
                      alt={skill.label} 
                      fill
                      className="object-contain transition-all duration-300" 
                    />
                  </div>
                  <span className="font-heading text-sm md:text-lg font-bold">{skill.label}</span>
                </PopItem>
              ))}
            </StaggerContainer>
          </div>
      </RevealSection>

      {/* --- SELECTED WORK --- */}
      <RevealSection id="work" className="scroll-mt-24 py-20 max-w-5xl mx-auto px-6">
        <div className="flex items-end gap-4 mb-12">
          <h2 className="font-heading text-5xl md:text-6xl text-pencil -rotate-1 relative inline-block">
             Selected Work
          </h2>
          <a href="https://github.com/Jasmine-18" target="_blank" className="font-body text-xl text-pencil/50 pb-2 hidden md:inline-block hover:text-correction hover:underline decoration-wavy">
            / more on GitHub
          </a>
        </div>
        <StaggerContainer className="grid md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <PopItem>
            <Card decoration="tape" rotate="left" className="bg-highlighter/30 h-full">
              <div className="mb-6 h-56 bg-white border-2 border-pencil rounded-wobbly-sm flex items-center justify-center overflow-hidden relative group cursor-pointer">
                 <div className="absolute inset-0 bg-ballpoint/10 group-hover:bg-transparent transition-colors" />
                 <span className="font-heading text-2xl text-pencil/30">Preview Image</span>
              </div>
              <h3 className="font-heading text-3xl mb-2">Scribble Notes</h3>
              <p className="font-body text-lg text-pencil/80 mb-6">
                A real-time collaborative whiteboard app that feels like paper. Built with WebSocket and React Canvas.
              </p>
              <div className="flex gap-4 mt-auto">
                <Button variant="primary" className="text-sm h-10 px-6">Live Demo</Button>
                <Button variant="secondary" className="text-sm h-10 px-6">Code</Button>
              </div>
            </Card>
          </PopItem>

          {/* Project 2 */}
          <PopItem>
            <Card decoration="tack" rotate="right" className="h-full">
              <div className="mb-6 h-56 bg-paper-muted border-2 border-pencil rounded-wobbly-sm flex items-center justify-center overflow-hidden">
                 <span className="font-heading text-2xl text-pencil/30">Preview Image</span>
              </div>
              <h3 className="font-heading text-3xl mb-2">DevDash CLI</h3>
              <p className="font-body text-lg text-pencil/80 mb-6">
                A Rust-based command line tool for developers to manage cloud resources with zero friction.
              </p>
              <div className="flex gap-4 mt-auto">
                <Button variant="primary" className="text-sm h-10 px-6">View Package</Button>
                <Button variant="secondary" className="text-sm h-10 px-6">Source</Button>
              </div>
            </Card>
          </PopItem>
        </StaggerContainer>
        
      </RevealSection>

      <div className="App">
      <section className="h-screen w-full bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8">My Tech Stack</h2>
        <SkillOrbit />
      </section>
    </div>

      {/* --- CONTACT --- */}
      <RevealSection id="contact" className="scroll-mt-24 py-24 max-w-3xl mx-auto px-6 text-center">
        <div className="relative inline-block w-full">
          <Card className="p-12 md:p-16 rotate-1 bg-white relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Let&apos;s build something fun.</h2>
            <p className="font-body text-xl mb-10 text-pencil/80">
              Recently graduated in Computer Science and now on the lookout for my next role. Let&apos;s build something meaningful together.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <a href='mailto:jasmine_hweeying@hotmail.com'>
                <Button className="w-full md:w-auto text-lg">jasmine_hweeying@hotmail.com</Button>
              </a>
              <div className="flex gap-4">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/jasminehweeying" },
                  { Icon: Github, href: "https://github.com/Jasmine-18" },
                  { Icon: MessageCircleMore, href: "https://wa.me/60167149223" } 
                ].map(({ Icon, href }, i) => (
                  <a 
                    key={i} 
                    href={href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-paper border-2 border-pencil rounded-full hover:bg-ballpoint hover:text-white hover:-translate-y-1 transition-all shadow-hard-sm"
                  >
                    <Icon size={24} strokeWidth={2.5} />
                  </a>
                ))}
              </div>
            </div>
          </Card>
          
          {/* Background Decor Element (The red box behind) */}
          <div className="absolute -top-4 -right-4 w-full h-full bg-correction border-[3px] border-pencil rounded-wobbly-md z-0 rotate-2"></div>
        </div>
      </RevealSection>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center font-body text-pencil/60 bg-paper-muted/30 border-t-2 border-dashed border-pencil/20">
        <p className="mb-2">© 2026 Jasmine Lai Hwee Ying. Drawn with code.</p>
      </footer>
    </main>
  );
}
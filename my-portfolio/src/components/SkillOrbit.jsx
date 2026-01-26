/* eslint-disable react-hooks/purity */
import React, {useEffect, useRef, useMemo} from 'react';
import TagCloud from 'TagCloud';
import {renderToStaticMarkup} from 'react-dom/server';

// Icons
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaAws,
  FaGithub,
} from 'react-icons/fa';
import {FaFlutter} from 'react-icons/fa6';
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiFirebase,
  SiGraphql,
  SiSelenium,
  SiOpenai,
  SiSpringboot,
  SiDjango,
} from 'react-icons/si';

const SkillOrbit = () => {
  const containerRef = useRef (null);
  const isInitialized = useRef (false);

  // 1. Skill Data
  // Updated colors to match the "Bold" dark theme (foreground/muted)
  const skills = [
    {
      type: 'skill',
      slug: 'react',
      icon: <FaReact />,
      name: 'React',
      color: 'text-muted-foreground',
    },
    {
      type: 'skill',
      slug: 'js',
      icon: <FaJs />,
      name: 'JavaScript',
      color: 'text-foreground',
    },
    // { type: 'skill', slug: 'openai', icon: <SiOpenai />, name: 'OpenAI', color: 'text-muted-foreground' },
    {
      type: 'skill',
      slug: 'tailwind',
      icon: <SiTailwindcss />,
      name: 'TailwindCSS',
      color: 'text-foreground',
    },
    {
      type: 'skill',
      slug: 'flutter',
      icon: <FaFlutter />,
      name: 'Flutter',
      color: 'text-muted-foreground',
    },
    {
      type: 'skill',
      slug: 'spring-boot',
      icon: <SiSpringboot />,
      name: 'Spring Boot',
      color: 'text-muted-foreground',
    },
    {
      type: 'skill',
      slug: 'django',
      icon: <SiDjango />,
      name: 'Django',
      color: 'text-muted-foreground',
    },
    {
      type: 'skill',
      slug: 'github',
      icon: <FaGithub />,
      name: 'GitHub',
      color: 'text-foreground',
    },
    {
      type: 'skill',
      slug: 'figma',
      icon: <SiFigma />,
      name: 'Figma',
      color: 'text-muted-foreground',
    },
    {
      type: 'skill',
      slug: 'node',
      icon: <FaNodeJs />,
      name: 'Node',
      color: 'text-muted-foreground',
    },
    {
      type: 'skill',
      slug: 'css',
      icon: <FaCss3Alt />,
      name: 'CSS3',
      color: 'text-muted-foreground',
    },
    {
      type: 'skill',
      slug: 'python',
      icon: <FaPython />,
      name: 'Python',
      color: 'text-foreground',
    },
    {
      type: 'skill',
      slug: 'html',
      icon: <FaHtml5 />,
      name: 'HTML5',
      color: 'text-muted-foreground',
    },
    {
      type: 'skill',
      slug: 'git',
      icon: <FaGitAlt />,
      name: 'Git',
      color: 'text-foreground',
    },
    {
      type: 'skill',
      slug: 'docker',
      icon: <FaDocker />,
      name: 'Docker',
      color: 'text-muted-foreground',
    },
    {
      type: 'skill',
      slug: 'aws',
      icon: <FaAws />,
      name: 'AWS',
      color: 'text-muted-foreground',
    },
  ];

  // 2. Generate mixed data (Icons + Decorative Dots)
  const cloudItems = useMemo (() => {
    // Generate 25 decorative dots
    const dots = Array.from ({length: 25}).map (() => ({
      type: 'dot',
      // Random sizes
      sizeClass: Math.random () > 0.5 ? 'w-1 h-1' : 'w-2 h-2',
      // Random opacity for depth
      opacityClass: Math.random () > 0.5 ? 'opacity-30' : 'opacity-60',
    }));

    // Combine arrays
    const combined = [...skills, ...dots];

    // Fisher-Yates Shuffle to mix them evenly
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor (Math.random () * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }

    return combined;
  }, []);

  useEffect (
    () => {
      if (isInitialized.current) return;

      // 3. Convert data to HTML strings for TagCloud
      const texts = cloudItems.map (item => {
        if (item.type === 'skill') {
          // --- Render Icon ---
          const iconHtml = renderToStaticMarkup (item.icon);
          return `
          <div class="flex flex-col items-center justify-center cursor-pointer select-none group">
            <span class="text-3xl md:text-5xl ${item.color} transition-all duration-300 transform group-hover:scale-125 group-hover:text-accent group-hover:drop-shadow-[0_0_15px_rgba(255,61,0,0.5)]">
              ${iconHtml}
            </span>
            <span class="text-xs font-mono font-bold text-accent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              ${item.name}
            </span>
          </div>
        `;
        } else {
          // --- Render Dot ---
          return `
          <div class="flex items-center justify-center pointer-events-none">
            <span class="rounded-full bg-muted-foreground ${item.sizeClass} ${item.opacityClass}"></span>
          </div>
        `;
        }
      });

      // Radius configuration based on screen size
      const radius = window.innerWidth < 768 ? 175 : 300;

      const options = {
        radius: radius,
        maxSpeed: 'fast',
        initSpeed: 'normal',
        direction: 135,
        keep: true,
        useHTML: true, // Required for custom HTML
      };

      if (containerRef.current) {
        TagCloud (containerRef.current, texts, options);
        isInitialized.current = true;
      }

      // Cleanup
      return () => {
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
          isInitialized.current = false;
        }
      };
    },
    [cloudItems]
  );

  return (
    // Changed bg-white to bg-background (or transparent) to fit dark mode
    (
      <div className="relative flex items-center justify-center min-h-[600px] w-full bg-transparent overflow-hidden font-sans">

        {/* 
        Background Blobs (Optional - adjusted to dark mode opacity)
      */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-4 w-32 h-32 bg-foreground/5 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-32 h-32 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Sphere Container */}
        <div ref={containerRef} className="relative z-10" />
      </div>
    )
  );
};

export default SkillOrbit;

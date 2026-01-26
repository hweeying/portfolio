/* eslint-disable react-hooks/purity */
import React, { useEffect, useRef, useMemo } from 'react';
import TagCloud from 'TagCloud';
import { renderToStaticMarkup } from 'react-dom/server';

// 引入图标
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, 
  FaPython, FaDocker, FaAws, FaGithub 
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiNextdotjs,
  SiTailwindcss, SiFigma, SiFirebase, SiGraphql, SiSelenium, SiOpenai 
} from 'react-icons/si';

// --- 类型定义 ---
type ItemType = 'skill' | 'dot';

interface BaseItem {
  type: ItemType;
}

interface SkillItem extends BaseItem {
  type: 'skill';
  slug: string;
  icon: React.ReactElement;
  name: string;
  color: string;
}

interface DotItem extends BaseItem {
  type: 'dot';
  sizeClass: string; // e.g., 'w-1 h-1'
  opacityClass: string; // e.g., 'opacity-50'
}

type CloudItem = SkillItem | DotItem;

const SkillOrbit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef<boolean>(false);

  // 1. 定义技能图标数据
  const skills: SkillItem[] = [
    { type: 'skill', slug: 'nextjs', icon: <SiNextdotjs />, name: 'Next.js', color: 'text-gray-900' },
    { type: 'skill', slug: 'react', icon: <FaReact />, name: 'React', color: 'text-foreground-muted' },
    { type: 'skill', slug: 'js', icon: <FaJs />, name: 'JS', color: 'text-gray-500' },
    { type: 'skill', slug: 'ts', icon: <SiTypescript />, name: 'TypeScript', color: 'text-gray-800' },
    { type: 'skill', slug: 'openai', icon: <SiOpenai />, name: 'OpenAI', color: 'text-gray-700' },
    { type: 'skill', slug: 'tailwind', icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-foreground-muted' },
    { type: 'skill', slug: 'github', icon: <FaGithub />, name: 'GitHub', color: 'text-gray-900' },
    { type: 'skill', slug: 'figma', icon: <SiFigma />, name: 'Figma', color: 'text-gray-600' },
    { type: 'skill', slug: 'node', icon: <FaNodeJs />, name: 'Node', color: 'text-gray-500' },
    { type: 'skill', slug: 'css', icon: <FaCss3Alt />, name: 'CSS3', color: 'text-foreground-muted' },
    { type: 'skill', slug: 'selenium', icon: <SiSelenium />, name: 'Selenium', color: 'text-gray-500' },
    { type: 'skill', slug: 'python', icon: <FaPython />, name: 'Python', color: 'text-gray-300' },
    { type: 'skill', slug: 'html', icon: <FaHtml5 />, name: 'HTML5', color: 'text-gray-600' },
    { type: 'skill', slug: 'git', icon: <FaGitAlt />, name: 'Git', color: 'text-gray-700' },
    { type: 'skill', slug: 'docker', icon: <FaDocker />, name: 'Docker', color: 'text-foreground-muted' },
    { type: 'skill', slug: 'aws', icon: <FaAws />, name: 'AWS', color: 'text-gray-500' },
  ];

  // 2. 生成混合数据（图标 + 旋转的点）
  const cloudItems = useMemo<CloudItem[]>(() => {
    // 生成 25 个装饰性的小圆点
    const dots: DotItem[] = Array.from({ length: 25 }).map(() => ({
      type: 'dot',
      // 随机大小
      sizeClass: Math.random() > 0.5 ? 'w-1 h-1' : 'w-2 h-2',
      // 随机透明度，制造层次感
      opacityClass: Math.random() > 0.5 ? 'opacity-30' : 'opacity-60',
    }));

    // 合并数组
    const combined = [...skills, ...dots];
    
    // 洗牌算法 (Fisher-Yates Shuffle)
    // 目的是让点和图标均匀混合，而不是图标一堆、点一堆
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }

    return combined;
  }, []);

  useEffect(() => {
    if (isInitialized.current) return;

    // 3. 将数据转换为 HTML 字符串
    const texts = cloudItems.map((item) => {
      if (item.type === 'skill') {
        // --- 渲染图标 ---
        const iconHtml = renderToStaticMarkup(item.icon);
        return `
          <div class="flex flex-col items-center justify-center cursor-pointer select-none group">
            <span class="text-3xl md:text-5xl ${item.color} transition-all duration-300 transform group-hover:scale-125 group-hover:text-black group-hover:drop-shadow-lg">
              ${iconHtml}
            </span>
            <span class="text-xs font-bold text-foreground-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              ${item.name}
            </span>
          </div>
        `;
      } else {
        // --- 渲染圆点 ---
        // 注意：这里我们给圆点加上 pointer-events-none，这样鼠标划过圆点时不会触发 TagCloud 的悬停减速效果
        // 除非你希望鼠标碰到圆点时球体也减速，那就去掉 pointer-events-none
        return `
          <div class="flex items-center justify-center pointer-events-none">
            <span class="rounded-full bg-gray-400 ${item.sizeClass} ${item.opacityClass}"></span>
          </div>
        `;
      }
    });

    // 半径配置
    const radius = window.innerWidth < 768 ? 160 : 280;

    const options = {
      radius: radius,
      maxSpeed: 'fast' as const,
      initSpeed: 'normal' as const,
      direction: 135,
      keep: true,
      useHTML: true, // 必须开启
    };

    if (containerRef.current) {
      TagCloud(containerRef.current, texts, options);
      isInitialized.current = true;
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        isInitialized.current = false;
      }
    };
  }, [cloudItems]);

  return (
    <div className="relative flex items-center justify-center min-h-[600px] w-full bg-white overflow-hidden font-sans">
      
      {/* 
        如果想要更丰富的效果，可以在这里保留几个非常淡的、静止的大背景圆，
        作为"远景"，增加深度。
      */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-4 w-32 h-32 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      {/* Sphere 容器 */}
      <div 
        ref={containerRef} 
        className="relative z-10"
      />
    </div>
  );
};

export default SkillOrbit;
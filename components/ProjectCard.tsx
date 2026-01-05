
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    gsap.to(containerRef.current, {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      x: 15,
      duration: 0.4,
      ease: 'power2.out'
    });
    gsap.to(glowRef.current, {
      opacity: 0.8,
      scale: 1.5,
      duration: 0.6
    });
  };

  const onLeave = () => {
    gsap.to(containerRef.current, {
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 255, 255, 0.05)',
      x: 0,
      duration: 0.4,
      ease: 'power2.out'
    });
    gsap.to(glowRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.6
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative border-b border-white/5 py-16 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all overflow-hidden"
    >
      <div ref={glowRef} className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] opacity-0 pointer-events-none"></div>
      
      <div className="flex gap-12 items-center relative z-10">
        <span className="font-mono text-xs text-gray-600 group-hover:text-cyan-400 transition-colors">{project.id}</span>
        <div>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-[10px] uppercase mt-3 text-cyan-400/60 tracking-[0.3em] font-bold">[{project.category}]</p>
        </div>
      </div>
      
      <div className="mt-8 md:mt-0 flex flex-col items-end gap-4 relative z-10">
        <p className="text-gray-500 text-sm max-w-sm text-right hidden lg:block leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

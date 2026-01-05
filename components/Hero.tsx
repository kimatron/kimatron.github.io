
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.stagger-text', 
      { y: 80, opacity: 0, rotateX: -45 }, 
      { y: 0, opacity: 1, rotateX: 0, duration: 1.5, ease: 'power4.out', stagger: 0.1, delay: 0.2 }
    );
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-24 relative overflow-hidden">
      <div className="z-10">
        <div className="stagger-text font-mono text-[10px] mb-8 flex items-center gap-4 text-cyan-400 font-bold uppercase tracking-[0.4em]">
           <span className="w-12 h-[2px] bg-cyan-400"></span>
           KIM HANLON // DEV & DIVER
        </div>
        
        <h1 className="text-5xl md:text-[8vw] font-black leading-[0.8] tracking-tight uppercase">
          <div className="stagger-text">I SPENT TEN YEARS</div>
          <div className="stagger-text flex items-center gap-4">
            <span className="text-[#00E5FF]">TEACHING</span>
            <span className="text-transparent border border-white/20 px-6 rounded-full inline-block italic" style={{ WebkitTextStroke: '1px white' }}>
              PEOPLE
            </span>
          </div>
          <div className="stagger-text text-white">HOW NOT TO <span className="text-[#FF3D00]">DIE.</span></div>
        </h1>

        <div className="stagger-text mt-12 flex flex-col md:flex-row gap-12 items-start">
<p className="max-w-xl text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
  Former dive instructor. Now playing with data in <span className="text-white font-bold border-b-2 border-cyan-400">fintech</span> and running <a href="https://devdactyl.ie" target="_blank" rel="noopener noreferrer" className="text-white font-bold border-b-2 border-[#FF3D00] hover:text-[#FF3D00] transition-colors">Devdactyl</a>. 
  Currently explaining "the cloud" to my 92-year-old grandfather.
</p>
          
          <div className="flex gap-4">
             <a href="#work" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-[#00E5FF] hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,229,255,0.3)]">SEE WORK ↓</a>
             <a href="#contact" className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-all">WORK WITH ME →</a>
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-24 hidden lg:block opacity-40 font-mono text-[10px] text-right space-y-1">
        <div className="text-cyan-400">[ STATUS ] // DEPLOYING FROM WEXFORD</div>
        <div className="text-orange-500">[ ROUTE ] // M9 MOTORWAY COMMUTER</div>
        <div>[ LIFE ] // QUESTIONING CHOICES ON THE M9</div>
      </div>
    </section>
  );
};

export default Hero;

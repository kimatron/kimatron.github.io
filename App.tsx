
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, EXPERIENCES, COMPARISONS } from './constants';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    gsap.utils.toArray('.reveal').forEach((elem: any) => {
      gsap.fromTo(elem, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 92%',
          }
        }
      );
    });

    const createBubble = () => {
      const b = document.createElement('div');
      b.className = 'bubble';
      const size = Math.random() * 20 + 5;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.bottom = '-50px';
      document.getElementById('bubbles-container')?.appendChild(b);
      
      gsap.to(b, {
        y: -window.innerHeight - 100,
        x: '+=100',
        opacity: 0,
        duration: Math.random() * 10 + 5,
        ease: 'none',
        onComplete: () => b.remove()
      });
    };
    const interval = setInterval(createBubble, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#0A0A0B] min-h-screen text-white overflow-x-hidden">
      <div id="bubbles-container" className="fixed inset-0 pointer-events-none opacity-20"></div>
      <CustomCursor />
      <Header />
      
      <main>
        <Hero />

        {/* About: The Short Version */}
        <section id="about" className="py-32 px-6 md:px-24">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <p className="font-mono text-xs text-orange-500 mb-6 tracking-[0.5em] font-bold uppercase">// THE SHORT VERSION</p>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-10 leading-none">PRESSURE <br/> <span className="text-[#00E5FF]">TESTED.</span></h2>
              <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
                <p>
                  For a decade, I worked underwater—teaching scuba, running marine conservation projects, and fixing equipment at depth. Generally existing in places where your nearest hospital is several hours of decompression away.
                </p>
                <p>
                  Then 2022 happened. I spent a year diving into <span className="text-[#00E5FF] font-bold">Azure and cloud technologies</span>, teaching myself to code again and bridging the gap between hardware and high-scale software.
                </p>
               <p>
  Now I run <a href="https://devdactyl.ie" target="_blank" rel="noopener noreferrer" className="text-white font-bold border-b-2 border-orange-500 hover:text-orange-500 transition-colors">Devdactyl</a>, building web apps for Irish businesses, and play with fintech data at <span className="text-white font-bold">Mastercard</span> in Dublin  while commuting from Wexford (which gives me plenty of time to question my life choices on the M11).
</p>
                <p className="text-sm font-mono text-cyan-400 italic">
                  Note: Working with me comes with a high probability of stories about accumulating black eyes from octupi.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 p-8 md:p-12 rounded-[3rem]">
              <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-10 text-center">[ SKILLS THAT TRANSFER ]</h3>
              <div className="space-y-4">
                {COMPARISONS.map((item, i) => (
                  <div key={i} className="group p-6 rounded-2xl bg-[#0A0A0B] border border-white/5 hover:border-cyan-400/50 transition-all">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-[10px] font-mono text-orange-500 font-bold tracking-widest">{item.skill}</span>
                       <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                       <div className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.dive}</div>
                       <div className="text-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                             <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                       </div>
                       <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 text-right">{item.dev}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-32 px-6 md:px-24">
          <div className="mb-24">
            <p className="font-mono text-xs text-[#FF3D00] mb-4 tracking-[0.5em] font-bold uppercase">// WHAT I'M BUILDING</p>
            <h2 className="text-6xl md:text-[9vw] font-black uppercase tracking-tighter leading-none">THE WORK.</h2>
          </div>
          <div className="reveal space-y-4">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        {/* Experience Cards */}
        <section className="py-32 px-6 md:px-24 bg-[#111] rounded-[4rem] mx-4">
           <div className="reveal flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
             <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                I'VE LIVED <br/> 
                <span className="text-transparent border-t border-b border-white italic py-2 inline-block px-4 text-[#FF3D00]" style={{ WebkitTextStroke: '2px #FF3D00' }}>MANY LIVES.</span>
             </h2>
             <p className="text-xl text-gray-500 font-light max-w-2xl mt-4">
             From underwater to cloud infrastructure. 50+ countries, 6 continents, back to Ireland. Self-taught (ish)developer who discovered technical diving skills translate surprisingly well to debugging production systems.
             </p>
           </div>
           <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8">
             {EXPERIENCES.map((exp, i) => (
               <div key={i} className="p-10 rounded-3xl bg-[#0A0A0B] border border-white/5 hover:border-[#00E5FF]/50 transition-all flex flex-col justify-between group">
                  <div>
                    <span className="font-mono text-[10px] text-cyan-400 font-bold tracking-[0.2em]">{exp.period}</span>
                    <h4 className="text-2xl font-black mt-4 uppercase group-hover:text-white transition-colors">{exp.role}</h4>
                    <p className="font-mono text-xs text-gray-500 mt-2">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-8 leading-relaxed">{exp.details}</p>
                  </div>
                  <div className="mt-12 h-1 w-0 group-hover:w-full bg-[#00E5FF] transition-all duration-700"></div>
               </div>
             ))}
           </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-64 px-6 md:px-24 text-center">
          <div className="reveal relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>
            <p className="font-mono text-xs text-cyan-400 mb-8 tracking-[0.5em] font-bold uppercase">// LETS SYNC UP</p>
            <h2 className="text-5xl md:text-[13vw] font-black uppercase tracking-tighter mb-16 leading-[0.8]">
              Ready to <br />
              <span className="text-[#FF3D00]">COLLABORATE?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-12 font-mono uppercase tracking-[0.3em] text-[10px] font-bold">
              <a href="mailto:kim@devdactyl.ie" className="group flex items-center gap-3 hover:text-cyan-400 transition-colors">
  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400">@</span>
  EMAIL
</a>
<a href="https://www.linkedin.com/in/kimhanlon291354" className="group flex items-center gap-3 hover:text-cyan-400 transition-colors">
   <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400">in</span>
   LINKEDIN
</a>
<a href="https://github.com/kimatron" className="group flex items-center gap-3 hover:text-cyan-400 transition-colors">
   <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400">gh</span>
   GITHUB
</a>
            </div>
            <div className="mt-20 opacity-30 font-mono text-[9px] uppercase tracking-[0.2em]">
              Dublin // Wexford // Underwater
            </div>
          </div>
        </section>
      </main>

      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 font-mono text-[9px] uppercase tracking-[0.3em]">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
          KIM HANLON &copy; 2024
        </div>
        <div className="mt-4 md:mt-0">MADE IN IRELAND &bull; DESIGNED FOR IMPACT</div>
      </footer>
    </div>
  );
};

export default App;

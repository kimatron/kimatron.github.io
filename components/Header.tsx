import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none">
        <div className="font-heading font-black text-2xl tracking-tighter pointer-events-auto">
          K. HANLON
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-mono text-[10px] uppercase tracking-[0.4em] pointer-events-auto font-bold">
          {['work', 'about', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-gray-500 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden pointer-events-auto z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0A0A0B] z-40 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-12 font-mono text-xl uppercase tracking-[0.4em] font-bold">
          {['work', 'about', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
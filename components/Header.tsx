
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none">
      <div className="font-heading font-black text-2xl tracking-tighter pointer-events-auto">
        K. HANLON
      </div>
      <nav className="flex gap-10 font-mono text-[10px] uppercase tracking-[0.4em] pointer-events-auto font-bold">
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
    </header>
  );
};

export default Header;

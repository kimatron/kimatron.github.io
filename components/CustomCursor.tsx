
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const onMouseEnterLink = () => {
      gsap.to(followerRef.current, { scale: 2, backgroundColor: 'rgba(0, 229, 255, 0.1)', borderColor: '#00E5FF' });
      gsap.to(cursorRef.current, { scale: 0.5, backgroundColor: '#FF3D00' });
    };
    const onMouseLeaveLink = () => {
      gsap.to(followerRef.current, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.2)' });
      gsap.to(cursorRef.current, { scale: 1, backgroundColor: 'white' });
    };

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
      />
    </>
  );
};

export default CustomCursor;

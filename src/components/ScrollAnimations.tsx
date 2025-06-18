
import { useEffect, useRef } from 'react';

const ScrollAnimations = () => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (floatingElementsRef.current) {
        const elements = floatingElementsRef.current.children;
        
        Array.from(elements).forEach((element, index) => {
          const htmlElement = element as HTMLElement;
          const speed = 0.5 + (index * 0.1);
          const yPos = -(scrollY * speed);
          const rotation = scrollY * 0.02 * (index + 1);
          
          htmlElement.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        });
      }

      // Parallax effect for floating shapes
      const shapes = document.querySelectorAll('.parallax-shape');
      shapes.forEach((shape, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = scrollY * speed;
        (shape as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${scrollY * 0.01}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating geometric shapes */}
      <div ref={floatingElementsRef} className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-transparent rotate-45 blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-cyan-400/15 to-transparent rotate-12 blur-sm animate-pulse delay-300" />
        <div className="absolute bottom-1/3 right-1/5 w-28 h-28 bg-gradient-to-br from-pink-400/10 to-transparent rounded-full blur-xl animate-pulse delay-700" />
      </div>

      {/* AI-themed floating elements */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="parallax-shape absolute top-20 left-10 opacity-20">
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-yellow-400 animate-spin-slow">
            <path d="M30 5 L35 20 L50 20 L40 30 L45 45 L30 37 L15 45 L20 30 L10 20 L25 20 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="parallax-shape absolute top-32 right-20 opacity-15">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-blue-400 animate-bounce-slow">
            <rect x="10" y="10" width="20" height="20" rx="5" fill="currentColor" />
            <circle cx="20" cy="20" r="3" fill="white" />
          </svg>
        </div>
        <div className="parallax-shape absolute bottom-40 left-1/4 opacity-25">
          <svg width="50" height="50" viewBox="0 0 50 50" className="text-purple-400 animate-pulse">
            <polygon points="25,5 45,40 5,40" fill="currentColor" />
            <circle cx="25" cy="30" r="5" fill="white" opacity="0.8" />
          </svg>
        </div>
        <div className="parallax-shape absolute top-1/2 right-10 opacity-20">
          <svg width="35" height="35" viewBox="0 0 35 35" className="text-cyan-400 animate-ping-slow">
            <circle cx="17.5" cy="17.5" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="17.5" cy="17.5" r="5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimations;

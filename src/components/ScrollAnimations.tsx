
import { useEffect, useRef } from 'react';

const ScrollAnimations = () => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const parallaxLayersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Elementos flotantes con movimiento más suave
      if (floatingElementsRef.current) {
        const elements = floatingElementsRef.current.children;
        
        Array.from(elements).forEach((element, index) => {
          const htmlElement = element as HTMLElement;
          const speed = 0.15 + (index * 0.08); // Reducido para menos movimiento
          const yPos = -(scrollY * speed);
          const rotation = scrollY * 0.01 * (index + 1); // Reducido para menos rotación
          const scale = 1 + (scrollY * 0.00005 * (index + 1)); // Reducido para menos escala
          
          htmlElement.style.transform = `translateY(${yPos}px) rotate(${rotation}deg) scale(${Math.min(scale, 1.1)})`;
        });
      }

      // Efectos de parallax multicapa más sutiles
      if (parallaxLayersRef.current) {
        const layers = parallaxLayersRef.current.children;
        
        Array.from(layers).forEach((layer, index) => {
          const htmlElement = layer as HTMLElement;
          const depth = (index + 1) * 0.05; // Reducido para menos movimiento
          const yPos = scrollY * depth;
          const opacity = Math.max(0.2, 1 - (scrollY * 0.0005)); // Ajustado para menos contraste
          
          htmlElement.style.transform = `translateY(${yPos}px) translateZ(0)`;
          htmlElement.style.opacity = opacity.toString();
        });
      }

      // Formas parallax con movimiento más sutil
      const shapes = document.querySelectorAll('.parallax-shape');
      shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.04); // Reducido
        const yPos = scrollY * speed;
        const rotation = scrollY * 0.003 * (index + 1); // Reducido
        const scale = 1 + Math.sin(scrollY * 0.005 + index) * 0.05; // Reducido
        
        (shape as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${rotation}deg) scale(${scale})`;
      });

      // Transiciones de sección más suaves
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        
        if (isVisible) {
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
          section.style.opacity = (0.3 + progress * 0.7).toString(); // Opacidad mínima más alta
          section.style.transform = `translateY(${(1 - progress) * 20}px)`; // Menos movimiento
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Formas geométricas flotantes más sutiles */}
      <div ref={floatingElementsRef} className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/8 to-transparent rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/8 to-transparent rotate-45 blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-400/8 to-transparent rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-transparent rotate-12 blur-sm animate-pulse delay-300" />
        <div className="absolute bottom-1/3 right-1/5 w-28 h-28 bg-gradient-to-br from-pink-400/8 to-transparent rounded-full blur-xl animate-pulse delay-700" />
        <div className="absolute top-1/6 left-1/2 w-20 h-20 bg-gradient-to-br from-green-400/8 to-transparent rotate-45 blur-md animate-pulse delay-1200" />
      </div>

      {/* Fondos parallax multicapa más sutiles */}
      <div ref={parallaxLayersRef} className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Capa 1 - Más lenta */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 left-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        {/* Capa 2 - Velocidad media */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-800"></div>
        </div>
        
        {/* Capa 3 - Más rápida */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-600"></div>
        </div>
      </div>

      {/* Elementos flotantes temáticos de IA más sutiles */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="parallax-shape absolute top-20 left-10 opacity-15">
          <svg width="50" height="50" viewBox="0 0 60 60" className="text-yellow-400 animate-spin-slow">
            <path d="M30 5 L35 20 L50 20 L40 30 L45 45 L30 37 L15 45 L20 30 L10 20 L25 20 Z" fill="currentColor" />
            <circle cx="30" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </div>
        <div className="parallax-shape absolute top-32 right-20 opacity-12">
          <svg width="35" height="35" viewBox="0 0 40 40" className="text-blue-400 animate-bounce-slow">
            <rect x="10" y="10" width="20" height="20" rx="4" fill="currentColor" />
            <circle cx="20" cy="20" r="2" fill="white" opacity="0.8" />
            <path d="M15 15 L25 15 M15 25 L25 25" stroke="white" strokeWidth="0.8" opacity="0.6" />
          </svg>
        </div>
        <div className="parallax-shape absolute bottom-40 left-1/4 opacity-18">
          <svg width="40" height="40" viewBox="0 0 50 50" className="text-purple-400 animate-pulse">
            <polygon points="25,5 45,40 5,40" fill="currentColor" />
            <circle cx="25" cy="30" r="4" fill="white" opacity="0.6" />
            <path d="M20 25 L30 25 M25 20 L25 30" stroke="white" strokeWidth="1" opacity="0.8" />
          </svg>
        </div>
        <div className="parallax-shape absolute top-1/2 right-10 opacity-15">
          <svg width="30" height="30" viewBox="0 0 35 35" className="text-cyan-400 animate-ping-slow">
            <circle cx="17.5" cy="17.5" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="17.5" cy="17.5" r="4" fill="currentColor" opacity="0.8" />
            <circle cx="17.5" cy="17.5" r="8" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
          </svg>
        </div>
        <div className="parallax-shape absolute bottom-20 right-1/3 opacity-12">
          <svg width="38" height="38" viewBox="0 0 45 45" className="text-green-400 animate-gentle-float">
            <rect x="5" y="5" width="35" height="35" rx="6" fill="currentColor" opacity="0.6" />
            <circle cx="22.5" cy="22.5" r="6" fill="white" opacity="0.8" />
            <path d="M18 18 L27 18 M18 22 L27 22 M18 27 L27 27" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ScrollAnimations;

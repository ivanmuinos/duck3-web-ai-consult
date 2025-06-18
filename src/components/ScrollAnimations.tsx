
import { useEffect, useRef } from 'react';

const ScrollAnimations = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Movimiento sutil de estrellas con scroll
      if (starsRef.current) {
        const stars = starsRef.current.children;
        
        Array.from(stars).forEach((star, index) => {
          const htmlElement = star as HTMLElement;
          const speed = 0.02 + (index * 0.01); // Muy sutil
          const yPos = -(scrollY * speed);
          
          htmlElement.style.transform = `translateY(${yPos}px)`;
        });
      }

      // Transiciones de sección más suaves
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
          section.style.opacity = (0.5 + progress * 0.5).toString();
          section.style.transform = `translateY(${(1 - progress) * 10}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fondo de estrellas sutil */}
      <div ref={starsRef} className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Estrellas pequeñas distribuidas */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-yellow-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Algunas estrellas un poco más grandes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Puntos azules sutiles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`blue-${i}`}
            className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollAnimations;

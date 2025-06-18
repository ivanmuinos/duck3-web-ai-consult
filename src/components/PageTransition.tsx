
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    if (displayChildren !== children) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 200); // Reducido de 300ms a 200ms para más fluidez

      return () => clearTimeout(timer);
    }
  }, [children, displayChildren]);

  return (
    <div className="relative min-h-screen">
      {/* Overlay de transición más suave */}
      <div 
        className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-blue-900/40 transition-opacity duration-200 pointer-events-none ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg border border-yellow-300/50 relative overflow-hidden mx-auto animate-spin">
              <svg
                width="24"
                height="24"
                viewBox="0 0 40 40"
                fill="none"
                className="text-black"
              >
                <ellipse cx="20" cy="26" rx="13" ry="8" fill="currentColor"/>
                <circle cx="20" cy="15" r="8" fill="currentColor"/>
                <path d="M12 15 L7 16 L12 17 Z" fill="#FF6B35"/>
                <circle cx="22" cy="13" r="2" fill="white"/>
                <circle cx="23" cy="12.5" r="1" fill="black"/>
                <text x="31" y="31" fontSize="9" fontWeight="bold" fill="currentColor" className="font-mono">3</text>
              </svg>
            </div>
            <p className="text-yellow-400 text-xs mt-2 font-medium opacity-80">Cargando...</p>
          </div>
        </div>
      </div>

      {/* Contenido de la página con transiciones más suaves */}
      <div 
        className={`transition-all duration-300 ease-out ${
          isTransitioning 
            ? 'opacity-0 transform translate-y-4 scale-99' 
            : 'opacity-100 transform translate-y-0 scale-100'
        }`}
      >
        {displayChildren}
      </div>
    </div>
  );
};

export default PageTransition;

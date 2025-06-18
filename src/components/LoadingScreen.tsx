
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  // Calcula la opacidad de cada parte basado en el progreso
  const getPartOpacity = (startPercent: number, endPercent: number) => {
    if (progress < startPercent) return 0;
    if (progress > endPercent) return 1;
    return (progress - startPercent) / (endPercent - startPercent);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      {/* Fondo más suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 opacity-95"></div>
      
      {/* Patrón de circuitos más sutil */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 10 L50 40 L80 40 L80 90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-yellow-300 animate-pulse" />
              <path d="M20 60 L50 60 L50 90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-300 animate-pulse delay-300" />
              <circle cx="50" cy="40" r="2" fill="currentColor" className="text-yellow-300 opacity-60" />
              <circle cx="50" cy="60" r="2" fill="currentColor" className="text-blue-300 opacity-60" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo duck3 pintándose progresivamente */}
        <div className="mb-6 relative">
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-2xl flex items-center justify-center shadow-xl border-2 border-yellow-400/20 relative overflow-hidden mx-auto">
            <svg
              width="80"
              height="80"
              viewBox="0 0 40 40"
              fill="none"
              className="relative z-10"
            >
              {/* Cuerpo del pato - se pinta primero (0-25%) */}
              <ellipse 
                cx="20" 
                cy="26" 
                rx="13" 
                ry="8" 
                fill="currentColor"
                className="text-yellow-400"
                style={{ opacity: getPartOpacity(0, 25) }}
              />
              
              {/* Líneas digitales del cuerpo (25-35%) */}
              <path 
                d="M8 26 Q10 24 12 26 Q14 28 16 26 Q18 24 20 26" 
                stroke="#00FF88" 
                strokeWidth="0.8" 
                opacity={getPartOpacity(25, 35) * 0.6}
              />
              <path 
                d="M20 26 Q22 24 24 26 Q26 28 28 26 Q30 24 32 26" 
                stroke="#00BFFF" 
                strokeWidth="0.8" 
                opacity={getPartOpacity(25, 35) * 0.6}
              />
              
              {/* Cabeza del pato (35-50%) */}
              <circle 
                cx="20" 
                cy="15" 
                r="8" 
                fill="currentColor"
                className="text-yellow-400"
                style={{ opacity: getPartOpacity(35, 50) }}
              />
              
              {/* Círculo decorativo de la cabeza (50-55%) */}
              <circle 
                cx="20" 
                cy="15" 
                r="6" 
                fill="none" 
                stroke="#FF69B4" 
                strokeWidth="0.3" 
                opacity={getPartOpacity(50, 55) * 0.4}
              />
              
              {/* Pico (55-65%) */}
              <path 
                d="M12 15 L7 16 L12 17 Z" 
                fill="#FF6B35"
                style={{ opacity: getPartOpacity(55, 65) }}
              />
              <rect 
                x="7" 
                y="15.5" 
                width="2" 
                height="1" 
                fill="#00FF88" 
                opacity={getPartOpacity(55, 65) * 0.6}
              />
              
              {/* Ojo base (65-75%) */}
              <circle 
                cx="22" 
                cy="13" 
                r="2.5" 
                fill="white"
                style={{ opacity: getPartOpacity(65, 75) }}
              />
              
              {/* Pupila del ojo (75-80%) */}
              <circle 
                cx="23" 
                cy="12.5" 
                r="1.2" 
                fill="black"
                style={{ opacity: getPartOpacity(75, 80) }}
              />
              
              {/* Detalle digital del ojo (80-85%) */}
              <rect 
                x="22.5" 
                y="11.8" 
                width="1.5" 
                height="0.8" 
                fill="#00BFFF" 
                opacity={getPartOpacity(80, 85) * 0.7}
              />
              
              {/* Elementos digitales animados (85-95%) */}
              <g style={{ opacity: getPartOpacity(85, 95) * 0.7 }}>
                <rect x="26" y="8" width="1.5" height="1.5" fill="#00FF88" />
                <rect x="28" y="10" width="1.5" height="1.5" fill="#00BFFF" />
                <rect x="30" y="12" width="1.5" height="1.5" fill="#FF69B4" />
                <rect x="32" y="14" width="1.5" height="1.5" fill="#FFD700" />
              </g>
              
              {/* Número 3 final (95-100%) */}
              <text 
                x="31" 
                y="31" 
                fontSize="10" 
                fontWeight="bold" 
                fill="currentColor" 
                className="font-mono text-yellow-400"
                style={{ opacity: getPartOpacity(95, 100) }}
              >
                3
              </text>
            </svg>
            
            {/* Efectos de brillo progresivos */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-pink-400/20"
              style={{ opacity: getPartOpacity(0, 100) * 0.3 }}
            ></div>
            <div 
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-400/20"
              style={{ opacity: getPartOpacity(50, 100) * 0.4 }}
            ></div>
            
            {/* Anillos giratorios que aparecen al final */}
            <div 
              className="absolute inset-0 border border-yellow-400/20 rounded-2xl animate-spin-slow"
              style={{ opacity: getPartOpacity(90, 100) }}
            ></div>
            <div 
              className="absolute inset-2 border border-blue-400/15 rounded-xl animate-spin-slow" 
              style={{ 
                animationDirection: 'reverse',
                opacity: getPartOpacity(95, 100)
              }}
            ></div>
          </div>
        </div>

        {/* Texto que aparece progresivamente */}
        <h1 
          className="text-5xl font-bold text-yellow-400 mb-3"
          style={{ opacity: getPartOpacity(70, 90) }}
        >
          duck3
        </h1>
        <p 
          className="text-lg text-gray-300 mb-6"
          style={{ opacity: getPartOpacity(80, 95) }}
        >
          Pintando experiencia inteligente...
        </p>

        {/* Barra de progreso */}
        <div className="w-72 mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2 opacity-80">
            <span>Cargando</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Puntos de carga que aparecen al final */}
        <div 
          className="flex justify-center space-x-2 mt-4"
          style={{ opacity: getPartOpacity(90, 100) }}
        >
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100 opacity-70"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-200 opacity-70"></div>
        </div>
      </div>

      {/* Efectos de partículas sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-yellow-400 rounded-full animate-float-up-down opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: getPartOpacity(0, 100) * 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;

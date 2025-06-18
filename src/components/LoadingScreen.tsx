
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
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>
      
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 10 L50 40 L80 40 L80 90" stroke="currentColor" strokeWidth="1" fill="none" className="text-yellow-400 animate-pulse" />
              <path d="M20 60 L50 60 L50 90" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400 animate-pulse delay-300" />
              <circle cx="50" cy="40" r="3" fill="currentColor" className="text-yellow-400" />
              <circle cx="50" cy="60" r="3" fill="currentColor" className="text-blue-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 text-center">
        {/* Enhanced duck3 logo */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-yellow-300 relative overflow-hidden mx-auto animate-float-up-down">
            <svg
              width="80"
              height="80"
              viewBox="0 0 40 40"
              fill="none"
              className="text-black relative z-10"
            >
              {/* Duck body with enhanced circuit patterns */}
              <ellipse cx="20" cy="26" rx="13" ry="8" fill="currentColor"/>
              <path d="M8 26 Q10 24 12 26 Q14 28 16 26 Q18 24 20 26" stroke="#00FF88" strokeWidth="1" opacity="0.8"/>
              <path d="M20 26 Q22 24 24 26 Q26 28 28 26 Q30 24 32 26" stroke="#00BFFF" strokeWidth="1" opacity="0.8"/>
              
              {/* Duck head with digital elements */}
              <circle cx="20" cy="15" r="8" fill="currentColor"/>
              <circle cx="20" cy="15" r="6" fill="none" stroke="#FF69B4" strokeWidth="0.5" opacity="0.6"/>
              
              {/* Enhanced beak */}
              <path d="M12 15 L7 16 L12 17 Z" fill="#FF6B35"/>
              <rect x="7" y="15.5" width="3" height="1" fill="#00FF88" opacity="0.8"/>
              
              {/* Digital eye */}
              <circle cx="22" cy="13" r="2.5" fill="white"/>
              <circle cx="23" cy="12.5" r="1.2" fill="black"/>
              <rect x="22.5" y="11.8" width="1.5" height="0.8" fill="#00BFFF" opacity="0.9"/>
              
              {/* Enhanced animated digital elements */}
              <g className="animate-pulse">
                <rect x="26" y="8" width="2" height="2" fill="#00FF88" opacity="0.9"/>
                <rect x="28" y="10" width="2" height="2" fill="#00BFFF" opacity="0.9"/>
                <rect x="30" y="12" width="2" height="2" fill="#FF69B4" opacity="0.9"/>
                <rect x="32" y="14" width="2" height="2" fill="#FFD700" opacity="0.9"/>
              </g>
              
              {/* Circuit wing */}
              <path d="M28 20 Q33 18 31 25 Q29 23 28 20" fill="rgba(0,0,0,0.3)"/>
              <path d="M29 21 L31 21 M30 20 L30 22" stroke="#00FF88" strokeWidth="1" opacity="0.8"/>
              
              {/* Digital number 3 */}
              <text x="31" y="31" fontSize="12" fontWeight="bold" fill="currentColor" className="font-mono">3</text>
              <rect x="29" y="26" width="8" height="2" fill="#00BFFF" opacity="0.5"/>
            </svg>
            
            {/* Enhanced digital glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-pink-400/40 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-400/30"></div>
            
            {/* Rotating rings */}
            <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-2xl animate-spin-slow"></div>
            <div className="absolute inset-2 border border-blue-400/30 rounded-xl animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>
        </div>

        {/* Company name with typewriter effect */}
        <h1 className="text-6xl font-bold text-yellow-400 mb-4 animate-fade-in">
          duck3
        </h1>
        <p className="text-xl text-gray-300 mb-8 animate-slide-in-from-bottom-2 delay-300">
          Cargando experiencia inteligente...
        </p>

        {/* Progress bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Inicializando</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-float-up-down opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;

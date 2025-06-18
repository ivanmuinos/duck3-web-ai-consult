
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Si no estamos en la página principal, navegamos ahí primero
      window.location.href = `/#${sectionId}`;
    } else {
      // Si ya estamos en la página principal, solo hacemos scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg flex items-center justify-center shadow-xl border-2 border-yellow-300 relative overflow-hidden">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              className="text-black relative z-10"
            >
              {/* Duck body with circuit patterns */}
              <ellipse cx="20" cy="26" rx="13" ry="8" fill="currentColor"/>
              <path d="M8 26 Q10 24 12 26 Q14 28 16 26 Q18 24 20 26" stroke="#00FF88" strokeWidth="0.5" opacity="0.6"/>
              <path d="M20 26 Q22 24 24 26 Q26 28 28 26 Q30 24 32 26" stroke="#00BFFF" strokeWidth="0.5" opacity="0.6"/>
              
              {/* Duck head with digital elements */}
              <circle cx="20" cy="15" r="8" fill="currentColor"/>
              <circle cx="20" cy="15" r="6" fill="none" stroke="#FF69B4" strokeWidth="0.3" opacity="0.4"/>
              
              {/* Enhanced beak */}
              <path d="M12 15 L7 16 L12 17 Z" fill="#FF6B35"/>
              <rect x="7" y="15.5" width="2" height="1" fill="#00FF88" opacity="0.7"/>
              
              {/* Digital eye */}
              <circle cx="22" cy="13" r="2.5" fill="white"/>
              <circle cx="23" cy="12.5" r="1.2" fill="black"/>
              <rect x="22.5" y="11.8" width="1" height="0.5" fill="#00BFFF" opacity="0.8"/>
              
              {/* Animated digital elements */}
              <g className="animate-pulse">
                <rect x="26" y="8" width="1.5" height="1.5" fill="#00FF88" opacity="0.9"/>
                <rect x="28" y="10" width="1.5" height="1.5" fill="#00BFFF" opacity="0.9"/>
                <rect x="30" y="12" width="1.5" height="1.5" fill="#FF69B4" opacity="0.9"/>
                <rect x="32" y="14" width="1.5" height="1.5" fill="#FFD700" opacity="0.9"/>
              </g>
              
              {/* Circuit wing */}
              <path d="M28 20 Q33 18 31 25 Q29 23 28 20" fill="rgba(0,0,0,0.3)"/>
              <path d="M29 21 L31 21 M30 20 L30 22" stroke="#00FF88" strokeWidth="0.5" opacity="0.6"/>
              
              {/* Digital number 3 */}
              <text x="31" y="31" fontSize="9" fontWeight="bold" fill="currentColor" className="font-mono">3</text>
              <rect x="29" y="26" width="6" height="1" fill="#00BFFF" opacity="0.3"/>
            </svg>
            
            {/* Enhanced digital glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-pink-400/30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-400/20"></div>
          </div>
          <span className="text-3xl font-bold text-yellow-400">duck3</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('servicios')} 
            className="text-gray-200 hover:text-yellow-400 transition-colors font-medium cursor-pointer"
          >
            Servicios
          </button>
          <Link to="/portafolio" className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
            Portafolio
          </Link>
          <button 
            onClick={() => handleNavClick('sobre-nosotros')} 
            className="text-gray-200 hover:text-yellow-400 transition-colors font-medium cursor-pointer"
          >
            Sobre Nosotros
          </button>
          <button 
            onClick={() => handleNavClick('contacto')} 
            className="text-gray-200 hover:text-yellow-400 transition-colors font-medium cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-lg border border-yellow-300">
          Consulta Gratuita
        </Button>
      </div>
    </header>
  );
};

export default Header;

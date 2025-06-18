
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg flex items-center justify-center shadow-xl border-2 border-yellow-300 relative overflow-hidden">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              className="text-black relative z-10"
            >
              {/* Duck body */}
              <ellipse cx="20" cy="25" rx="12" ry="8" fill="currentColor"/>
              
              {/* Duck head */}
              <circle cx="20" cy="15" r="8" fill="currentColor"/>
              
              {/* Duck beak */}
              <path d="M12 15 L8 16 L12 17 Z" fill="#FF6B35"/>
              
              {/* Duck eye */}
              <circle cx="22" cy="13" r="2" fill="white"/>
              <circle cx="23" cy="12.5" r="1" fill="black"/>
              
              {/* Digital elements - pixels */}
              <rect x="24" y="8" width="1.5" height="1.5" fill="#00FF88" opacity="0.8"/>
              <rect x="26" y="10" width="1.5" height="1.5" fill="#00BFFF" opacity="0.8"/>
              <rect x="28" y="12" width="1.5" height="1.5" fill="#FF69B4" opacity="0.8"/>
              
              {/* Wing detail */}
              <path d="M28 20 Q32 18 30 24 Q28 22 28 20" fill="rgba(0,0,0,0.2)"/>
              
              {/* Number 3 integrated */}
              <text x="32" y="30" fontSize="8" fontWeight="bold" fill="currentColor">3</text>
            </svg>
            
            {/* Digital glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 animate-pulse"></div>
          </div>
          <span className="text-3xl font-bold text-yellow-400">duck3</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
            Servicios
          </a>
          <a href="#sobre-nosotros" className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
            Sobre Nosotros
          </a>
          <a href="#contacto" className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
            Contacto
          </a>
        </nav>

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-lg border border-yellow-300">
          Consulta Gratuita
        </Button>
      </div>
    </header>
  );
};

export default Header;

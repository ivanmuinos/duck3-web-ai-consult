import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Mail, MessageCircle, Calendar, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavClick = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePortfolioClick = () => {
    setIsOpen(false); // Close mobile menu
    navigate('/portafolio');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleConsultationClick = (type: string) => {
    switch (type) {
      case 'email':
        window.location.href = 'mailto:hola@duck3.dev';
        break;
      case 'whatsapp':
        window.open('https://wa.me/1234567890', '_blank');
        break;
      case 'calendar':
        window.open('https://calendly.com/tu-usuario-calendly/30min', '_blank');
        break;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/30 animate-fade-in">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg flex items-center justify-center shadow-xl border-2 border-yellow-300 relative overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl">
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              className="text-black relative z-10 transition-transform duration-300 group-hover:scale-110"
            >
              <ellipse cx="20" cy="26" rx="13" ry="8" fill="currentColor"/>
              <path d="M8 26 Q10 24 12 26 Q14 28 16 26 Q18 24 20 26" stroke="#00FF88" strokeWidth="0.5" opacity="0.6"/>
              <path d="M20 26 Q22 24 24 26 Q26 28 28 26 Q30 24 32 26" stroke="#00BFFF" strokeWidth="0.5" opacity="0.6"/>
              <circle cx="20" cy="15" r="8" fill="currentColor"/>
              <circle cx="20" cy="15" r="6" fill="none" stroke="#FF69B4" strokeWidth="0.3" opacity="0.4"/>
              <path d="M12 15 L7 16 L12 17 Z" fill="#FF6B35"/>
              <rect x="7" y="15.5" width="2" height="1" fill="#00FF88" opacity="0.7"/>
              <circle cx="22" cy="13" r="2.5" fill="white"/>
              <circle cx="23" cy="12.5" r="1.2" fill="black"/>
              <rect x="22.5" y="11.8" width="1" height="0.5" fill="#00BFFF" opacity="0.8"/>
              <g className="animate-pulse">
                <rect x="26" y="8" width="1.5" height="1.5" fill="#00FF88" opacity="0.9"/>
                <rect x="28" y="10" width="1.5" height="1.5" fill="#00BFFF" opacity="0.9"/>
                <rect x="30" y="12" width="1.5" height="1.5" fill="#FF69B4" opacity="0.9"/>
                <rect x="32" y="14" width="1.5" height="1.5" fill="#FFD700" opacity="0.9"/>
              </g>
              <path d="M28 20 Q33 18 31 25 Q29 23 28 20" fill="rgba(0,0,0,0.3)"/>
              <path d="M29 21 L31 21 M30 20 L30 22" stroke="#00FF88" strokeWidth="0.5" opacity="0.6"/>
              <text x="31" y="31" fontSize="9" fontWeight="bold" fill="currentColor" className="font-mono">3</text>
              <rect x="29" y="26" width="6" height="1" fill="#00BFFF" opacity="0.3"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-pink-400/30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-yellow-400/20"></div>
          </div>
          <span className="text-3xl font-bold text-yellow-400 transition-all duration-300 group-hover:text-yellow-300">duck3</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('servicios')} 
            className="relative text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium cursor-pointer group px-2 py-1"
          >
            Servicios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={handlePortfolioClick}
            className="relative text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium group px-2 py-1 cursor-pointer"
          >
            Portafolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavClick('sobre-nosotros')} 
            className="relative text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium cursor-pointer group px-2 py-1"
          >
            Sobre Nosotros
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavClick('contacto')} 
            className="relative text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium cursor-pointer group px-2 py-1"
          >
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-yellow-400 hover:text-yellow-300">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-l border-yellow-400/30">
              <SheetHeader>
                <SheetTitle className="text-yellow-400 text-xl font-bold">Navegación</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => handleNavClick('servicios')} 
                  className="text-left text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-yellow-400/10"
                >
                  Servicios
                </button>
                <button 
                  onClick={handlePortfolioClick}
                  className="text-left text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-yellow-400/10"
                >
                  Portafolio
                </button>
                <button 
                  onClick={() => handleNavClick('sobre-nosotros')} 
                  className="text-left text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-yellow-400/10"
                >
                  Sobre Nosotros
                </button>
                <button 
                  onClick={() => handleNavClick('contacto')} 
                  className="text-left text-gray-200 hover:text-yellow-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-yellow-400/10"
                >
                  Contacto
                </button>
                
                <div className="mt-8 pt-4 border-t border-yellow-400/20">
                  <p className="text-yellow-400 font-semibold text-sm mb-4">Consulta Gratuita</p>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleConsultationClick('email')}
                      className="w-full flex items-center space-x-3 text-gray-200 hover:text-yellow-400 transition-all duration-300 p-3 rounded-lg hover:bg-yellow-400/10"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Enviar Email</span>
                    </button>
                    <button 
                      onClick={() => handleConsultationClick('whatsapp')}
                      className="w-full flex items-center space-x-3 text-gray-200 hover:text-yellow-400 transition-all duration-300 p-3 rounded-lg hover:bg-yellow-400/10"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </button>
                    <button 
                      onClick={() => handleConsultationClick('calendar')}
                      className="w-full flex items-center space-x-3 text-gray-200 hover:text-yellow-400 transition-all duration-300 p-3 rounded-lg hover:bg-yellow-400/10"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Agendar Reunión</span>
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Consultation Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="hidden md:flex bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold shadow-lg border border-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                Consulta Gratuita
                <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-yellow-400/30 shadow-2xl backdrop-blur-xl animate-slide-in-from-top-2 rounded-xl p-2" align="end">
              <div className="mb-3 px-3 py-2">
                <h3 className="text-yellow-400 font-semibold text-lg">Contáctanos</h3>
                <p className="text-gray-400 text-sm">Elige tu método preferido</p>
              </div>
              <DropdownMenuItem 
                onClick={() => handleConsultationClick('email')}
                className="text-gray-200 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-500/10 hover:text-yellow-400 cursor-pointer rounded-lg p-4 mb-2 transition-all duration-300 hover:scale-[1.02] group border border-transparent hover:border-yellow-400/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Enviar Email</div>
                    <div className="text-sm text-gray-400">Respuesta en 24 hrs</div>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => handleConsultationClick('whatsapp')}
                className="text-gray-200 hover:bg-gradient-to-r hover:from-green-400/10 hover:to-green-500/10 hover:text-yellow-400 cursor-pointer rounded-lg p-4 mb-2 transition-all duration-300 hover:scale-[1.02] group border border-transparent hover:border-yellow-400/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-gray-400">Chat inmediato</div>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => handleConsultationClick('calendar')}
                className="text-gray-200 hover:bg-gradient-to-r hover:from-purple-400/10 hover:to-purple-500/10 hover:text-yellow-400 cursor-pointer rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] group border border-transparent hover:border-yellow-400/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Agendar Reunión</div>
                    <div className="text-sm text-gray-400">Videollamada 30 min</div>
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

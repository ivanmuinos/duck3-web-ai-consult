
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-yellow-400/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center shadow-xl border-2 border-yellow-300">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-black"
            >
              <path
                d="M8.5 5c-2.5 0-4.5 2-4.5 4.5 0 1.5 0.8 2.8 2 3.5L6 18c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2l0-5c1.2-0.7 2-2 2-3.5C20 7 18 5 15.5 5c-1 0-1.9 0.3-2.6 0.8C12.4 5.3 11.5 5 10.5 5H8.5z"
                fill="currentColor"
              />
              <circle cx="9" cy="8" r="1.2" fill="#000"/>
              <path d="M7 9.5c0.5 0.3 1.1 0.5 1.8 0.5" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M14 10c0.3-0.2 0.6-0.3 1-0.3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            </svg>
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

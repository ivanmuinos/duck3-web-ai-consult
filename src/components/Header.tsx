
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            🦆
          </div>
          <span className="text-xl font-bold text-gray-900">duck3</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors">
            Servicios
          </a>
          <a href="#sobre-nosotros" className="text-gray-600 hover:text-blue-600 transition-colors">
            Sobre Nosotros
          </a>
          <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contacto
          </a>
        </nav>

        <Button className="bg-blue-600 hover:bg-blue-700">
          Consulta Gratuita
        </Button>
      </div>
    </header>
  );
};

export default Header;

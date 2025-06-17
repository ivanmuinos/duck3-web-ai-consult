
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Bot } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-400/30">
              <Bot className="w-4 h-4" />
              <span>Especialistas en IA y Desarrollo Web</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transformamos tu negocio con
            <span className="text-yellow-400"> tecnología inteligente</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            En duck3 creamos soluciones de software web personalizadas y automatizaciones con IA 
            que impulsan el crecimiento de tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg font-semibold">
              Comenzar Proyecto
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 hover:border-yellow-400">
              Ver Casos de Éxito
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
                <Code className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Desarrollo Web</h3>
              <p className="text-gray-400 text-sm">Aplicaciones modernas y escalables</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                <Bot className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Automatización IA</h3>
              <p className="text-gray-400 text-sm">Procesos inteligentes y eficientes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/30">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-yellow-400"
                >
                  <path
                    d="M8.5 5c-2.5 0-4.5 2-4.5 4.5 0 1.5 0.8 2.8 2 3.5L6 18c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2l0-5c1.2-0.7 2-2 2-3.5C20 7 18 5 15.5 5c-1 0-1.9 0.3-2.6 0.8C12.4 5.3 11.5 5 10.5 5H8.5z"
                    fill="currentColor"
                  />
                  <circle cx="9" cy="8" r="1" fill="#1f2937"/>
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Consultoría</h3>
              <p className="text-gray-400 text-sm">Estrategia tecnológica personalizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

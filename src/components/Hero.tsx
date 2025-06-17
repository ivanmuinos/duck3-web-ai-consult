
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Bot } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              <span>Especialistas en IA y Desarrollo Web</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transformamos tu negocio con
            <span className="text-blue-600"> tecnología inteligente</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            En duck3 creamos soluciones de software web personalizadas y automatizaciones con IA 
            que impulsan el crecimiento de tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              Comenzar Proyecto
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Ver Casos de Éxito
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Desarrollo Web</h3>
              <p className="text-gray-600 text-sm">Aplicaciones modernas y escalables</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Automatización IA</h3>
              <p className="text-gray-600 text-sm">Procesos inteligentes y eficientes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 text-green-600 font-bold text-xl">🦆</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultoría</h3>
              <p className="text-gray-600 text-sm">Estrategia tecnológica personalizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

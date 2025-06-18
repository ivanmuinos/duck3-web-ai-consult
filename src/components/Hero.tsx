
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Bot } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated neural network background */}
      <div className="absolute inset-0 neural-network-bg"></div>
      
      {/* Floating data streams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-full h-1 data-stream opacity-60"></div>
        <div className="absolute top-40 left-0 w-full h-1 data-stream opacity-40 delay-1000"></div>
        <div className="absolute top-60 left-0 w-full h-1 data-stream opacity-30 delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border-2 border-yellow-400/50 animate-neural-pulse">
              <Bot className="w-4 h-4 animate-spin-slow" />
              <span>Especialistas en IA y Desarrollo Web</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Transformamos tu negocio con
            <span className="text-yellow-400 animate-hologram-glitch"> tecnología inteligente</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto font-medium animate-slide-in-from-bottom-2 delay-300">
            En duck3 creamos soluciones de software web personalizadas y automatizaciones con IA 
            que impulsan el crecimiento de tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-scale-in delay-500">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-bold shadow-xl border border-yellow-300 ai-glow hover:animate-pulse-glow">
              Comenzar Proyecto
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold hologram-border">
              Ver Casos de Éxito
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-in-from-bottom-2 delay-600">
              <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400/50 animate-float-up-down">
                <Code className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Desarrollo Web</h3>
              <p className="text-gray-300 text-sm font-medium">Aplicaciones modernas y escalables</p>
            </div>
            
            <div className="text-center animate-slide-in-from-bottom-2 delay-700">
              <div className="w-20 h-20 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-400/50 animate-float-up-down delay-1000">
                <Bot className="w-10 h-10 text-blue-400 animate-bounce-slow" />
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Automatización IA</h3>
              <p className="text-gray-300 text-sm font-medium">Procesos inteligentes y eficientes</p>
            </div>
            
            <div className="text-center animate-slide-in-from-bottom-2 delay-800">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400/50 relative overflow-hidden animate-float-up-down delay-500">
                <svg
                  width="44"
                  height="44"
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
                  
                  {/* Digital elements - circuit lines */}
                  <path d="M30 8 L35 8 L35 12" stroke="#00FF88" strokeWidth="1" fill="none" opacity="0.8"/>
                  <path d="M32 10 L37 10 L37 15" stroke="#00BFFF" strokeWidth="1" fill="none" opacity="0.8"/>
                  <circle cx="35" cy="8" r="1" fill="#00FF88"/>
                  <circle cx="37" cy="10" r="1" fill="#00BFFF"/>
                  
                  {/* Wing with tech pattern */}
                  <path d="M28 20 Q32 18 30 24 Q28 22 28 20" fill="rgba(0,0,0,0.2)"/>
                  <rect x="29" y="21" width="1" height="1" fill="#00FF88" opacity="0.6"/>
                  <rect x="30" y="19" width="1" height="1" fill="#00BFFF" opacity="0.6"/>
                </svg>
                
                {/* Animated digital glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-pink-400/30 animate-pulse"></div>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Consultoría</h3>
              <p className="text-gray-300 text-sm font-medium">Estrategia tecnológica personalizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

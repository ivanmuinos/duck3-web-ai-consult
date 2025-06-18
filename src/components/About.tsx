
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Trophy, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precisión",
      description: "Cada línea de código tiene un propósito específico para alcanzar tus objetivos."
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos como una extensión de tu equipo, no como un proveedor externo."
    },
    {
      icon: Trophy,
      title: "Excelencia",
      description: "Nos comprometemos a entregar soluciones que superen tus expectativas."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Aplicamos las últimas tecnologías para mantenerte a la vanguardia."
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Sobre duck3
            </h2>
            <p className="text-xl text-gray-200 font-medium">
              Somos expertos en transformación digital que ayudamos a empresas 
              a aprovechar el poder de la tecnología y la inteligencia artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                ¿Por qué elegir duck3?
              </h3>
              <div className="space-y-4">
                <p className="text-gray-200 font-medium">
                  En duck3, creemos que la tecnología debe ser un catalizador para el crecimiento, 
                  no un obstáculo. Nuestro enfoque combina experiencia técnica profunda con 
                  una comprensión clara de los objetivos de negocio.
                </p>
                <p className="text-gray-200 font-medium">
                  Trabajamos con empresas de todos los tamaños, desde startups ágiles hasta 
                  corporaciones establecidas, ayudándoles a automatizar procesos, mejorar 
                  la experiencia del cliente y tomar decisiones basadas en datos.
                </p>
              </div>
            </div>
            
            <div className="bg-black rounded-2xl p-8 shadow-2xl border-2 border-yellow-400/30">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border-2 border-yellow-300 relative overflow-hidden">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="text-black relative z-10"
                  >
                    {/* Duck body */}
                    <ellipse cx="20" cy="25" rx="12" ry="8" fill="currentColor"/>
                    
                    {/* Duck head */}
                    <circle cx="20" cy="15" r="8" fill="currentColor"/>
                    
                    {/* Duck beak */}
                    <path d="M12 15 L7 16 L12 17 Z" fill="#FF6B35"/>
                    
                    {/* Duck eye with highlight */}
                    <circle cx="22" cy="13" r="2.5" fill="white"/>
                    <circle cx="23" cy="12" r="1.5" fill="black"/>
                    <circle cx="23.5" cy="11.5" r="0.5" fill="white"/>
                    
                    {/* Digital circuit pattern */}
                    <path d="M30 6 L36 6 L36 10 L32 10" stroke="#00FF88" strokeWidth="1.2" fill="none" opacity="0.9"/>
                    <path d="M28 8 L34 8 L34 14 L30 14" stroke="#00BFFF" strokeWidth="1.2" fill="none" opacity="0.9"/>
                    <circle cx="36" cy="6" r="1.2" fill="#00FF88"/>
                    <circle cx="34" cy="8" r="1.2" fill="#00BFFF"/>
                    <circle cx="32" cy="10" r="1" fill="#FF69B4"/>
                    
                    {/* Wing with tech details */}
                    <path d="M28 20 Q32 18 30 24 Q28 22 28 20" fill="rgba(0,0,0,0.2)"/>
                    <rect x="29" y="21" width="1.5" height="1.5" fill="#00FF88" opacity="0.7"/>
                    <rect x="30" y="19" width="1.5" height="1.5" fill="#00BFFF" opacity="0.7"/>
                    
                    {/* Duck3 integration */}
                    <text x="28" y="35" fontSize="8" fontWeight="bold" fill="currentColor">3</text>
                  </svg>
                  
                  {/* Animated tech glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-pink-400/30 to-yellow-400/30 animate-pulse"></div>
                  
                  {/* Floating pixels animation */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-75"></div>
                </div>
                <h4 className="text-xl font-bold text-white">Nuestra Misión</h4>
              </div>
              <p className="text-gray-200 text-center font-medium">
                Hacer que la tecnología avanzada sea accesible y práctica para cualquier negocio, 
                transformando ideas en soluciones digitales que generen impacto real.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 bg-black border-2 border-yellow-400/30 hover:border-yellow-400">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400/50">
                      <Icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h4 className="font-bold text-white mb-2 text-lg">{value.title}</h4>
                    <p className="text-sm text-gray-300 font-medium">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

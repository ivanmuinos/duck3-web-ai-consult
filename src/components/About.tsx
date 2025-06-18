
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
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border-2 border-yellow-300">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-black"
                  >
                    <path
                      d="M8.5 5c-2.5 0-4.5 2-4.5 4.5 0 1.5 0.8 2.8 2 3.5L6 18c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2l0-5c1.2-0.7 2-2 2-3.5C20 7 18 5 15.5 5c-1 0-1.9 0.3-2.6 0.8C12.4 5.3 11.5 5 10.5 5H8.5z"
                      fill="currentColor"
                    />
                    <circle cx="9" cy="8" r="1.8" fill="#000"/>
                    <path d="M7 10c0.8 0.4 1.7 0.6 2.6 0.6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                    <path d="M14 10.5c0.4-0.2 0.8-0.3 1.2-0.3" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
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

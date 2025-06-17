
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
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sobre duck3
            </h2>
            <p className="text-xl text-gray-600">
              Somos expertos en transformación digital que ayudamos a empresas 
              a aprovechar el poder de la tecnología y la inteligencia artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir duck3?
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  En duck3, creemos que la tecnología debe ser un catalizador para el crecimiento, 
                  no un obstáculo. Nuestro enfoque combina experiencia técnica profunda con 
                  una comprensión clara de los objetivos de negocio.
                </p>
                <p className="text-gray-600">
                  Trabajamos con empresas de todos los tamaños, desde startups ágiles hasta 
                  corporaciones establecidas, ayudándoles a automatizar procesos, mejorar 
                  la experiencia del cliente y tomar decisiones basadas en datos.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🦆</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Nuestra Misión</h4>
              </div>
              <p className="text-gray-600 text-center">
                Hacer que la tecnología avanzada sea accesible y práctica para cualquier negocio, 
                transformando ideas en soluciones digitales que generen impacto real.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
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

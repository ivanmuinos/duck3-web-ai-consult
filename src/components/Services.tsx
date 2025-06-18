
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Bot, Smartphone, Database, Cloud, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desarrollo Web Personalizado",
      description: "Aplicaciones web modernas, rápidas y escalables usando las últimas tecnologías como React, Next.js y TypeScript.",
      features: ["Responsive Design", "SEO Optimizado", "Performance Superior"]
    },
    {
      icon: Bot,
      title: "Automatización con IA",
      description: "Implementamos soluciones de inteligencia artificial para automatizar procesos y mejorar la eficiencia operativa.",
      features: ["Chatbots Inteligentes", "Análisis de Datos", "Procesamiento de Lenguaje"]
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Desarrollo de apps nativas e híbridas que ofrecen experiencias excepcionales en cualquier dispositivo.",
      features: ["iOS & Android", "React Native", "UX/UI Moderno"]
    },
    {
      icon: Database,
      title: "Bases de Datos & APIs",
      description: "Diseño e implementación de arquitecturas de datos robustas y APIs escalables para tu negocio.",
      features: ["APIs RESTful", "GraphQL", "Optimización de Consultas"]
    },
    {
      icon: Cloud,
      title: "Soluciones en la Nube",
      description: "Migración y optimización de infraestructura cloud para máximo rendimiento y seguridad.",
      features: ["AWS/Google Cloud", "DevOps", "Monitoreo 24/7"]
    },
    {
      icon: Zap,
      title: "Integración de Sistemas",
      description: "Conectamos tus herramientas existentes para crear flujos de trabajo automatizados y eficientes.",
      features: ["Zapier/Make", "APIs Personalizadas", "Sincronización de Datos"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-transparent relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-slate-900/5 to-black/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.01)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales que transforman la manera 
            en que tu empresa opera y crece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group hover:shadow-2xl transition-all duration-300 bg-black/20 backdrop-blur-sm hover:bg-black/30 hover:-translate-y-2 rounded-xl p-8">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/30 transition-colors backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-yellow-400 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

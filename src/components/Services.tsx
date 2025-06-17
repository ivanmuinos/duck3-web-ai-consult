
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
      description: "Desarrollo de apps nativas y híbridas que ofrecen experiencias excepcionales en cualquier dispositivo.",
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
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales que transforman la manera 
            en que tu empresa opera y crece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

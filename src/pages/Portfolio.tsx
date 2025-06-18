import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "EcoTech Dashboard",
      description: "Plataforma de análisis de datos ambientales en tiempo real con IA para empresas sostenibles",
      image: "photo-1551288049-bebda4e38f71",
      technologies: ["React", "TypeScript", "Python", "AWS", "TensorFlow"],
      category: "Web App",
      year: "2024",
      stats: {
        users: "10K+",
        data: "5TB",
        efficiency: "40%"
      }
    },
    {
      id: 2,
      title: "FinFlow Mobile",
      description: "Aplicación móvil de gestión financiera con machine learning para predicción de gastos",
      image: "photo-1563013544-824ae1b704d3",
      technologies: ["React Native", "Node.js", "MongoDB", "ML Kit"],
      category: "Mobile App",
      year: "2024",
      stats: {
        downloads: "25K+",
        accuracy: "92%",
        savings: "$2M"
      }
    },
    {
      id: 3,
      title: "SmartLogistics AI",
      description: "Sistema de optimización de rutas y gestión de inventario con inteligencia artificial",
      image: "photo-1586953208448-b95a79798f07",
      technologies: ["Vue.js", "Python", "Docker", "Google Cloud", "TensorFlow"],
      category: "Enterprise",
      year: "2023",
      stats: {
        routes: "50K+",
        efficiency: "35%",
        cost_reduction: "28%"
      }
    },
    {
      id: 4,
      title: "MedConnect Platform",
      description: "Plataforma de telemedicina con integración de dispositivos IoT y análisis predictivo",
      image: "photo-1559757148-5c350d0d3c56",
      technologies: ["React", "Node.js", "PostgreSQL", "IoT", "AI/ML"],
      category: "Healthcare",
      year: "2023",
      stats: {
        patients: "15K+",
        consultations: "45K+",
        satisfaction: "98%"
      }
    },
    {
      id: 5,
      title: "RetailBot Assistant",
      description: "Chatbot inteligente para e-commerce con procesamiento de lenguaje natural",
      image: "photo-1556742049-0cfed4f6a45d",
      technologies: ["Python", "NLP", "FastAPI", "Redis", "OpenAI"],
      category: "AI/ML",
      year: "2024",
      stats: {
        interactions: "100K+",
        conversion: "18%",
        response_time: "0.5s"
      }
    },
    {
      id: 6,
      title: "EduTech Learning",
      description: "Plataforma educativa adaptativa con gamificación y análisis de aprendizaje",
      image: "photo-1509062522246-3755977927d7",
      technologies: ["React", "GraphQL", "MongoDB", "WebRTC", "Analytics"],
      category: "EdTech",
      year: "2023",
      stats: {
        students: "8K+",
        completion: "85%",
        engagement: "4.8/5"
      }
    }
  ];

  const categories = ["Todos", "Web App", "Mobile App", "Enterprise", "Healthcare", "AI/ML", "EdTech"];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Nuestro
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> Portafolio</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Descubre los proyectos innovadores que hemos desarrollado para transformar negocios con tecnología inteligente
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Badge key={category} variant="outline" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-400 text-black">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <span className="text-yellow-400 text-sm font-medium">{project.year}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="bg-gray-700 rounded-lg p-2">
                          <div className="text-yellow-400 font-bold text-sm">{value}</div>
                          <div className="text-gray-400 text-xs capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para crear algo increíble?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Cada proyecto es una oportunidad para innovar. Conversemos sobre tu próxima idea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3">
                <Calendar className="w-5 h-5 mr-2" />
                Agenda una Consulta
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                Conoce al Equipo
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Portfolio;

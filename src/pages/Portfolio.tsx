import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, Mail, MessageCircle, ChevronDown } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "EcoTech Dashboard",
      description:
        "Plataforma de análisis de datos ambientales en tiempo real con IA para empresas sostenibles",
      image: "photo-1551288049-bebda4e38f71",
      technologies: ["React", "TypeScript", "Python", "AWS", "TensorFlow"],
      category: "Web App",
      year: "2024",
      stats: {
        users: "10K+",
        data: "5TB",
        efficiency: "40%",
      },
    },
    {
      id: 2,
      title: "FinFlow Mobile",
      description:
        "Aplicación móvil de gestión financiera con machine learning para predicción de gastos",
      image: "photo-1563013544-824ae1b704d3",
      technologies: ["React Native", "Node.js", "MongoDB", "ML Kit"],
      category: "Mobile App",
      year: "2024",
      stats: {
        downloads: "25K+",
        accuracy: "92%",
        savings: "$2M",
      },
    },
    {
      id: 3,
      title: "SmartLogistics AI",
      description:
        "Sistema de optimización de rutas y gestión de inventario con inteligencia artificial",
      image: "photo-1586953208448-b95a79798f07",
      technologies: [
        "Vue.js",
        "Python",
        "Docker",
        "Google Cloud",
        "TensorFlow",
      ],
      category: "Enterprise",
      year: "2023",
      stats: {
        routes: "50K+",
        efficiency: "35%",
        cost_reduction: "28%",
      },
    },
    {
      id: 4,
      title: "MedConnect Platform",
      description:
        "Plataforma de telemedicina con integración de dispositivos IoT y análisis predictivo",
      image: "photo-1559757148-5c350d0d3c56",
      technologies: ["React", "Node.js", "PostgreSQL", "IoT", "AI/ML"],
      category: "Healthcare",
      year: "2023",
      stats: {
        patients: "15K+",
        consultations: "45K+",
        satisfaction: "98%",
      },
    },
    {
      id: 5,
      title: "RetailBot Assistant",
      description:
        "Chatbot inteligente para e-commerce con procesamiento de lenguaje natural",
      image: "photo-1556742049-0cfed4f6a45d",
      technologies: ["Python", "NLP", "FastAPI", "Redis", "OpenAI"],
      category: "AI/ML",
      year: "2024",
      stats: {
        interactions: "100K+",
        conversion: "18%",
        response_time: "0.5s",
      },
    },
    {
      id: 6,
      title: "EduTech Learning",
      description:
        "Plataforma educativa adaptativa con gamificación y análisis de aprendizaje",
      image: "photo-1509062522246-3755977927d7",
      technologies: ["React", "GraphQL", "MongoDB", "WebRTC", "Analytics"],
      category: "EdTech",
      year: "2023",
      stats: {
        students: "8K+",
        completion: "85%",
        engagement: "4.8/5",
      },
    },
  ];

  const categories = [
    "Todos",
    "Web App",
    "Mobile App",
    "Enterprise",
    "Healthcare",
    "AI/ML",
    "EdTech",
  ];

  const handleConsultationClick = (type: string) => {
    switch (type) {
      case "email":
        window.location.href = "mailto:ivan.muinos@gmail.com";
        break;
      case "whatsapp":
        window.open("https://wa.me/5491130663794", "_blank");
        break;
      case "calendar":
        window.open(
          "https://calendar.google.com/calendar/u/0/r/eventedit?text=Reunión%20con%20Ivan%20Muinos&details=Agendá%20una%20reunión%20de%20consultoría%20gratuita%20con%20Ivan%20Muinos&add=ivan.muinos@gmail.com",
          "_blank"
        );
        break;
    }
  };

  return (
    <PageTransition>
      <div className='min-h-screen bg-black'>
        <Header />

        {/* Hero Section */}
        <section className='pt-24 pb-12 bg-gradient-to-b from-black to-gray-900'>
          <div className='container mx-auto px-4'>
            <div className='text-center max-w-4xl mx-auto'>
              <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>
                Nuestro
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600'>
                  {" "}
                  Portafolio
                </span>
              </h1>
              <p className='text-xl text-gray-300 mb-8'>
                Descubre los proyectos innovadores que hemos desarrollado para
                transformar negocios con tecnología inteligente
              </p>
              <div className='flex flex-wrap justify-center gap-2 mb-8'>
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant='outline'
                    className='border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10'
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className='py-16 bg-gray-900'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className='bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group h-full'
                >
                  <div className='relative overflow-hidden rounded-t-lg'>
                    <img
                      src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                      alt={project.title}
                      className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute top-4 right-4'>
                      <Badge className='bg-yellow-400 text-black'>
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className='flex justify-between items-start mb-2'>
                      <CardTitle className='text-white text-xl'>
                        {project.title}
                      </CardTitle>
                      <span className='text-yellow-400 text-sm font-medium'>
                        {project.year}
                      </span>
                    </div>
                    <p className='text-gray-300 text-sm leading-relaxed'>
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className='space-y-4'>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='bg-gray-700 text-gray-300'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className='grid grid-cols-3 gap-2 text-center'>
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className='bg-gray-700 rounded-lg p-2'>
                          <div className='text-yellow-400 font-bold text-sm'>
                            {value}
                          </div>
                          <div className='text-gray-400 text-xs capitalize'>
                            {key.replace("_", " ")}
                          </div>
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
        <section className='py-20 bg-black'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-4xl font-bold text-white mb-6'>
              ¿Listo para crear algo increíble?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Cada proyecto es una oportunidad para innovar. Conversemos sobre
              tu próxima idea.
            </p>
            <div className='flex justify-center'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size='lg'
                    className='bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black tracking-wide shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-yellow-400/25 group text-base px-8 py-3'
                  >
                    <Calendar className='w-5 h-5 mr-2' />
                    Agenda una Consulta
                    <ChevronDown className='w-5 h-5 ml-3 transition-transform duration-500 group-data-[state=open]:rotate-180' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className='w-80 bg-black/95 border border-yellow-400/20 shadow-2xl backdrop-blur-xl animate-slide-in-from-top-2 rounded-2xl p-3'
                  align='center'
                >
                  <div className='mb-4 px-4 py-3'>
                    <h3 className='text-yellow-400 font-black text-xl tracking-wide'>
                      Contáctanos
                    </h3>
                    <p className='text-gray-400 text-sm tracking-wide mt-1'>
                      Elige tu método preferido
                    </p>
                  </div>
                  <DropdownMenuItem
                    onClick={() => handleConsultationClick("email")}
                    className='text-gray-200 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-500/10 hover:text-yellow-400 cursor-pointer rounded-lg p-4 mb-2 transition-all duration-300 hover:scale-[1.02] group border border-transparent hover:border-yellow-400/20'
                  >
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>
                        <Mail className='w-6 h-6 text-white' />
                      </div>
                      <div className='flex-1'>
                        <div className='font-semibold'>Enviar Email</div>
                        <div className='text-sm text-gray-400'>
                          Respuesta en 24 hrs
                        </div>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleConsultationClick("whatsapp")}
                    className='text-gray-200 hover:bg-gradient-to-r hover:from-green-400/10 hover:to-green-500/10 hover:text-yellow-400 cursor-pointer rounded-lg p-4 mb-2 transition-all duration-300 hover:scale-[1.02] group border border-transparent hover:border-yellow-400/20'
                  >
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>
                        <MessageCircle className='w-6 h-6 text-white' />
                      </div>
                      <div className='flex-1'>
                        <div className='font-semibold'>WhatsApp</div>
                        <div className='text-sm text-gray-400'>
                          Chat inmediato
                        </div>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleConsultationClick("calendar")}
                    className='text-gray-200 hover:bg-gradient-to-r hover:from-purple-400/10 hover:to-purple-500/10 hover:text-yellow-400 cursor-pointer rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] group border border-transparent hover:border-yellow-400/20'
                  >
                    <div className='flex items-center space-x-4'>
                      <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>
                        <Calendar className='w-6 h-6 text-white' />
                      </div>
                      <div className='flex-1'>
                        <div className='font-semibold'>Agendar Reunión</div>
                        <div className='text-sm text-gray-400'>
                          Videollamada 30 min
                        </div>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Portfolio;

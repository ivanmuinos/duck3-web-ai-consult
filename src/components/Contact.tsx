import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCalendlyClick = () => {
    // Reemplaza 'tu-usuario-calendly' con tu nombre de usuario real de Calendly
    window.open('https://calendly.com/tu-usuario-calendly/30min', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in delay-200">
            Conversemos sobre cómo duck3 puede impulsar tu empresa con tecnología inteligente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-slide-in-from-bottom-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-yellow-400">Email</h3>
                <p className="text-gray-300 text-sm">hola@duck3.dev</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-slide-in-from-bottom-2 delay-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-yellow-400">WhatsApp</h3>
                <p className="text-gray-300 text-sm">Mensaje directo</p>
              </CardContent>
            </Card>

            <Card 
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group animate-slide-in-from-bottom-2 delay-400"
              onClick={handleCalendlyClick}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-yellow-400">Reunión</h3>
                <p className="text-gray-300 text-sm">Agenda una llamada</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-600">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <span className="transition-transform duration-300 group-hover:scale-110">Consulta Gratuita</span>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 hover:border-yellow-400 px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <Link to="/portafolio">
                <span className="transition-transform duration-300 group-hover:scale-110">Ver Portafolio</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

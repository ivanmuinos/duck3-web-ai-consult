
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const handleCalendlyClick = () => {
    // Reemplaza 'tu-usuario-calendly' con tu nombre de usuario real de Calendly
    window.open('https://calendly.com/tu-usuario-calendly/30min', '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Conversemos sobre cómo duck3 puede impulsar tu empresa con tecnología inteligente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-yellow-400/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 text-sm">hola@duck3.dev</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-yellow-400/50 transition-colors">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-gray-300 text-sm">Mensaje directo</p>
              </CardContent>
            </Card>

            <Card 
              className="bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-yellow-400/50 transition-colors cursor-pointer"
              onClick={handleCalendlyClick}
            >
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Reunión</h3>
                <p className="text-gray-300 text-sm">Agenda una llamada</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg font-semibold">
              Consulta Gratuita
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 hover:border-yellow-400 px-8 py-3 text-lg">
              Ver Portafolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

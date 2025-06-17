
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Conversemos sobre cómo duck3 puede impulsar tu empresa con tecnología inteligente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-blue-100 text-sm">hola@duck3.dev</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Teléfono</h3>
                <p className="text-blue-100 text-sm">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-blue-100 text-sm">Mensaje directo</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Reunión</h3>
                <p className="text-blue-100 text-sm">Agenda una llamada</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Consulta Gratuita
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Ver Portafolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

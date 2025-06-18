
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Mail, MessageCircle, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ConsultationDropdownProps {
  handleConsultationClick: (type: string) => void;
}

const ConsultationDropdown = ({ handleConsultationClick }: ConsultationDropdownProps) => {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden md:flex bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black tracking-wide shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-yellow-400/25 group text-base px-6 py-3">
          {t('freeConsultation')}
          <ChevronDown className="w-5 h-5 ml-3 transition-transform duration-500 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-black/95 border border-yellow-400/20 shadow-2xl backdrop-blur-xl animate-slide-in-from-top-2 rounded-2xl p-3" align="end">
        <div className="mb-4 px-4 py-3">
          <h3 className="text-yellow-400 font-black text-xl tracking-wide">Contáctanos</h3>
          <p className="text-gray-400 text-sm tracking-wide mt-1">Elige tu método preferido</p>
        </div>
        <DropdownMenuItem 
          onClick={() => handleConsultationClick('email')}
          className="text-gray-200 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-500/10 hover:text-yellow-400 cursor-pointer rounded-lg p-4 mb-2 transition-all duration-300 hover:scale-[1.02] group border border-transparent hover:border-yellow-400/20"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Enviar Email</div>
              <div className="text-sm text-gray-400">Respuesta en 24 hrs</div>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleConsultationClick('whatsapp')}
          className="text-gray-200 hover:bg-gradient-to-r hover:from-green-400/10 hover:to-green-500/10 hover:text-yellow-400 cursor-pointer rounded-lg p-4 mb-2 transition-all duration-300 hover:scale-[1.02] group border border-transparent hover:border-yellow-400/20"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">{t('whatsapp')}</div>
              <div className="text-sm text-gray-400">Chat inmediato</div>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleConsultationClick('calendar')}
          className="text-gray-200 hover:bg-gradient-to-r hover:from-purple-400/10 hover:to-purple-500/10 hover:text-yellow-400 cursor-pointer rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] group border border-transparent hover:border-yellow-400/20"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Agendar Reunión</div>
              <div className="text-sm text-gray-400">Videollamada 30 min</div>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ConsultationDropdown;

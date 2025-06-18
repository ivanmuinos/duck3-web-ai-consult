
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mail, MessageCircle, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleNavClick: (sectionId: string) => void;
  handlePortfolioClick: () => void;
  handleConsultationClick: (type: string) => void;
}

const MobileNav = ({ isOpen, setIsOpen, handleNavClick, handlePortfolioClick, handleConsultationClick }: MobileNavProps) => {
  const { t } = useTranslation();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-yellow-400 hover:text-yellow-300 hover:bg-transparent">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-black/95 backdrop-blur-xl border-l border-yellow-400/20">
        <SheetHeader>
          <SheetTitle className="text-yellow-400 text-xl font-bold tracking-wide">Navegación</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-6 mt-12">
          <button 
            onClick={() => handleNavClick('servicios')} 
            className="text-left text-gray-200 hover:text-yellow-400 transition-all duration-500 font-bold tracking-wide py-4 px-6 rounded-xl hover:bg-yellow-400/10 text-lg"
          >
            {t('services')}
          </button>
          <button 
            onClick={handlePortfolioClick}
            className="text-left text-gray-200 hover:text-yellow-400 transition-all duration-500 font-bold tracking-wide py-4 px-6 rounded-xl hover:bg-yellow-400/10 text-lg"
          >
            {t('portfolio')}
          </button>
          <button 
            onClick={() => handleNavClick('sobre-nosotros')} 
            className="text-left text-gray-200 hover:text-yellow-400 transition-all duration-500 font-bold tracking-wide py-4 px-6 rounded-xl hover:bg-yellow-400/10 text-lg"
          >
            {t('about')}
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-left text-gray-200 hover:text-yellow-400 transition-all duration-500 font-bold tracking-wide py-4 px-6 rounded-xl hover:bg-yellow-400/10 text-lg"
          >
            {t('contact')}
          </button>
          
          <div className="mt-12 pt-6 border-t border-yellow-400/20">
            <p className="text-yellow-400 font-bold text-base mb-6 tracking-wide">{t('freeConsultation')}</p>
            <div className="space-y-4">
              <button 
                onClick={() => handleConsultationClick('email')}
                className="w-full flex items-center space-x-4 text-gray-200 hover:text-yellow-400 transition-all duration-500 p-4 rounded-xl hover:bg-yellow-400/10 tracking-wide"
              >
                <Mail className="w-6 h-6" />
                <span className="font-bold">{t('email')}</span>
              </button>
              <button 
                onClick={() => handleConsultationClick('whatsapp')}
                className="w-full flex items-center space-x-4 text-gray-200 hover:text-yellow-400 transition-all duration-500 p-4 rounded-xl hover:bg-yellow-400/10 tracking-wide"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-bold">{t('whatsapp')}</span>
              </button>
              <button 
                onClick={() => handleConsultationClick('calendar')}
                className="w-full flex items-center space-x-4 text-gray-200 hover:text-yellow-400 transition-all duration-500 p-4 rounded-xl hover:bg-yellow-400/10 tracking-wide"
              >
                <Calendar className="w-6 h-6" />
                <span className="font-bold">{t('meeting')}</span>
              </button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

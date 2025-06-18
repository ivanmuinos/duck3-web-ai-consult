
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, MessageCircle, Calendar, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./header/Logo";
import DesktopNav from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";
import ConsultationDropdown from "./header/ConsultationDropdown";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  
  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handlePortfolioClick = () => {
    setIsOpen(false);
    navigate('/portafolio');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleConsultationClick = (type: string) => {
    setIsOpen(false);
    switch (type) {
      case 'email':
        window.location.href = 'mailto:hola@duck3.dev';
        break;
      case 'whatsapp':
        window.open('https://wa.me/1234567890', '_blank');
        break;
      case 'calendar':
        window.open('https://calendly.com/tu-usuario-calendly/30min', '_blank');
        break;
    }
  };

  return (
    <header className="py-6 animate-fade-in bg-transparent">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        <DesktopNav 
          handleNavClick={handleNavClick}
          handlePortfolioClick={handlePortfolioClick}
        />

        <div className="flex items-center space-x-2">
          <LanguageSelector />
          
          <MobileNav 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleNavClick={handleNavClick}
            handlePortfolioClick={handlePortfolioClick}
            handleConsultationClick={handleConsultationClick}
          />

          <ConsultationDropdown handleConsultationClick={handleConsultationClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;

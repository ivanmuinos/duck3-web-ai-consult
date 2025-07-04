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
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handlePortfolioClick = () => {
    setIsOpen(false);
    navigate("/portafolio");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleConsultationClick = (type: string) => {
    setIsOpen(false);
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
    <header className='py-6 animate-fade-in bg-transparent'>
      <div className='container mx-auto px-4 flex items-center'>
        <div className='flex-1 flex items-center'>
          <Logo />
        </div>

        <div className='flex-1 flex items-center justify-center'>
          <DesktopNav
            handleNavClick={handleNavClick}
            handlePortfolioClick={handlePortfolioClick}
          />
        </div>

        <div className='flex-1 flex items-center justify-end space-x-2'>
          <LanguageSelector />

          <MobileNav
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleNavClick={handleNavClick}
            handlePortfolioClick={handlePortfolioClick}
            handleConsultationClick={handleConsultationClick}
          />

          <ConsultationDropdown
            handleConsultationClick={handleConsultationClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

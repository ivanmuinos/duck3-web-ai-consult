
import { useTranslation } from "react-i18next";

interface DesktopNavProps {
  handleNavClick: (sectionId: string) => void;
  handlePortfolioClick: () => void;
}

const DesktopNav = ({ handleNavClick, handlePortfolioClick }: DesktopNavProps) => {
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex items-center space-x-10">
      <button 
        onClick={() => handleNavClick('servicios')} 
        className="relative text-gray-200 hover:text-yellow-400 transition-all duration-500 font-bold tracking-wide cursor-pointer group px-3 py-2 text-lg"
      >
        {t('services')}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 group-hover:w-full"></span>
      </button>
      <button 
        onClick={handlePortfolioClick}
        className="relative text-gray-200 hover:text-yellow-400 transition-all duration-500 font-bold tracking-wide group px-3 py-2 cursor-pointer text-lg"
      >
        {t('portfolio')}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 group-hover:w-full"></span>
      </button>
      <button 
        onClick={() => handleNavClick('sobre-nosotros')} 
        className="relative text-gray-200 hover:text-yellow-400 transition-all duration-500 font-bold tracking-wide cursor-pointer group px-3 py-2 text-lg"
      >
        {t('about')}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 group-hover:w-full"></span>
      </button>
      <button 
        onClick={() => handleNavClick('contact')} 
        className="relative text-gray-200 hover:text-yellow-400 transition-all duration-500 font-bold tracking-wide cursor-pointer group px-3 py-2 text-lg"
      >
        {t('contact')}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500 group-hover:w-full"></span>
      </button>
    </nav>
  );
};

export default DesktopNav;

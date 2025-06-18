
import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-gray-200 hover:text-yellow-400 hover:bg-transparent transition-colors"
        >
          <Globe className="w-4 h-4 mr-2" />
          {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="bg-black/95 border border-yellow-400/20 shadow-2xl backdrop-blur-xl rounded-xl"
        align="end"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="text-gray-200 hover:bg-yellow-400/10 hover:text-yellow-400 cursor-pointer rounded-lg p-3 transition-all duration-300"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </div>
              {i18n.language === language.code && (
                <Check className="w-4 h-4 text-yellow-400" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;

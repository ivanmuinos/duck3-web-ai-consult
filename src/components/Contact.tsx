import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/tu-usuario-calendly/30min", "_blank");
  };

  return (
    <section
      id='contact'
      className='py-20 bg-transparent relative overflow-hidden'
    >
      {/* Subtle animated background elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-white mb-4 animate-fade-in'>
            {t("contactTitle")}
          </h2>
          <p className='text-xl text-gray-300 mb-12 animate-fade-in delay-200'>
            {t("contactSubtitle")}
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            <div className='bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-slide-in-from-bottom-2 rounded-xl p-6 text-center'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500/80 to-blue-600/80 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 backdrop-blur-sm'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-yellow-400'>
                {t("email")}
              </h3>
              <a
                href='mailto:ivan.muinos@gmail.com'
                className='text-gray-300 text-sm hover:text-yellow-400 transition-colors'
              >
                ivan.muinos@gmail.com
              </a>
            </div>

            <div className='bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-slide-in-from-bottom-2 delay-200 rounded-xl p-6 text-center'>
              <div className='w-16 h-16 bg-gradient-to-br from-green-500/80 to-green-600/80 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 backdrop-blur-sm'>
                <MessageSquare className='w-8 h-8 text-white' />
              </div>
              <h3 className='font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-yellow-400'>
                {t("whatsapp")}
              </h3>
              <a
                href='https://wa.me/5491130663794'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 text-sm hover:text-yellow-400 transition-colors'
              >
                +54 9 11 3066-3794
              </a>
            </div>

            <div
              className='bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group animate-slide-in-from-bottom-2 delay-400 rounded-xl p-6 text-center'
              onClick={() =>
                window.open(
                  "https://calendar.google.com/calendar/u/0/r/eventedit?text=Reunión%20con%20Ivan%20Muinos&details=Agendá%20una%20reunión%20de%20consultoría%20gratuita%20con%20Ivan%20Muinos&add=ivan.muinos@gmail.com",
                  "_blank"
                )
              }
            >
              <div className='w-16 h-16 bg-gradient-to-br from-purple-500/80 to-purple-600/80 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 backdrop-blur-sm'>
                <Calendar className='w-8 h-8 text-white' />
              </div>
              <h3 className='font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-yellow-400'>
                {t("meeting")}
              </h3>
              <span className='text-gray-300 text-sm hover:text-yellow-400 transition-colors cursor-pointer'>
                Agendar una reunión
              </span>
            </div>
          </div>

          {/* <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-600'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group'
            >
              <span className='transition-transform duration-300 group-hover:scale-110'>
                {t("freeConsultation")}
              </span>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='border-gray-600 text-gray-300 hover:bg-black/30 hover:text-yellow-400 hover:border-yellow-400 px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group backdrop-blur-sm'
            >
              <Link to='/portafolio'>
                <span className='transition-transform duration-300 group-hover:scale-110'>
                  {t("viewPortfolio")}
                </span>
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

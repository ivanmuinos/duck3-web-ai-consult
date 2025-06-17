
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-900"
              >
                <path
                  d="M8.5 5c-2.5 0-4.5 2-4.5 4.5 0 1.5 0.8 2.8 2 3.5L6 18c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2l0-5c1.2-0.7 2-2 2-3.5C20 7 18 5 15.5 5c-1 0-1.9 0.3-2.6 0.8C12.4 5.3 11.5 5 10.5 5H8.5z"
                  fill="currentColor"
                />
                <circle cx="9" cy="8" r="1" fill="#fbbf24"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-yellow-400">duck3</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>© 2024 duck3. Todos los derechos reservados.</span>
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

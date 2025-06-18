
const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-12 border-t-2 border-yellow-400/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg flex items-center justify-center shadow-xl border-2 border-yellow-300 relative overflow-hidden">
              <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                fill="none"
                className="text-black relative z-10"
              >
                {/* Duck body */}
                <ellipse cx="20" cy="25" rx="12" ry="7" fill="currentColor"/>
                
                {/* Duck head */}
                <circle cx="20" cy="15" r="7" fill="currentColor"/>
                
                {/* Duck beak */}
                <path d="M13 15 L9 16 L13 17 Z" fill="#FF6B35"/>
                
                {/* Duck eye */}
                <circle cx="22" cy="13" r="1.5" fill="white"/>
                <circle cx="22.5" cy="12.5" r="0.8" fill="black"/>
                
                {/* Digital accent */}
                <rect x="26" y="10" width="1" height="1" fill="#00FF88" opacity="0.8"/>
                <rect x="28" y="12" width="1" height="1" fill="#00BFFF" opacity="0.8"/>
                
                {/* Number 3 */}
                <text x="30" y="28" fontSize="6" fontWeight="bold" fill="currentColor">3</text>
              </svg>
              
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-yellow-400">duck3</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-300">
            <span className="font-medium">© 2024 duck3. Todos los derechos reservados.</span>
            <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Privacidad</a>
            <a href="#" className="hover:text-yellow-400 transition-colors font-medium">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-4 group">
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-yellow-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
        >
          <ellipse cx="20" cy="26" rx="13" ry="8" fill="currentColor"/>
          <path d="M8 26 Q10 24 12 26 Q14 28 16 26 Q18 24 20 26" stroke="#00FF88" strokeWidth="0.8" opacity="0.8"/>
          <path d="M20 26 Q22 24 24 26 Q26 28 28 26 Q30 24 32 26" stroke="#00BFFF" strokeWidth="0.8" opacity="0.8"/>
          <circle cx="20" cy="15" r="8" fill="currentColor"/>
          <circle cx="20" cy="15" r="6" fill="none" stroke="#FF69B4" strokeWidth="0.5" opacity="0.6"/>
          <path d="M12 15 L7 16 L12 17 Z" fill="#FF6B35"/>
          <rect x="7" y="15.5" width="2" height="1" fill="#00FF88" opacity="0.9"/>
          <circle cx="22" cy="13" r="2.5" fill="white"/>
          <circle cx="23" cy="12.5" r="1.2" fill="black"/>
          <rect x="22.5" y="11.8" width="1" height="0.5" fill="#00BFFF" opacity="0.9"/>
          <g className="animate-pulse">
            <rect x="26" y="8" width="2" height="2" fill="#00FF88" opacity="0.9"/>
            <rect x="28" y="10" width="2" height="2" fill="#00BFFF" opacity="0.9"/>
            <rect x="30" y="12" width="2" height="2" fill="#FF69B4" opacity="0.9"/>
            <rect x="32" y="14" width="2" height="2" fill="#FFD700" opacity="0.9"/>
          </g>
          <path d="M28 20 Q33 18 31 25 Q29 23 28 20" fill="rgba(0,0,0,0.4)"/>
          <path d="M29 21 L31 21 M30 20 L30 22" stroke="#00FF88" strokeWidth="0.8" opacity="0.8"/>
          <text x="31" y="31" fontSize="10" fontWeight="bold" fill="currentColor" className="font-inter">3</text>
          <rect x="29" y="26" width="6" height="1.5" fill="#00BFFF" opacity="0.5"/>
        </svg>
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
      <span className="text-4xl font-black text-yellow-400 transition-all duration-500 group-hover:text-yellow-300 group-hover:tracking-widest">
        duck3
      </span>
    </Link>
  );
};

export default Logo;

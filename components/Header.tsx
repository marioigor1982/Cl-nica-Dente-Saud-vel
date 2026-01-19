
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  logo?: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'Estética', href: '#estetica' },
    { name: 'Cirurgias', href: '#cirurgias' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-6 group cursor-pointer flex-1 md:flex-none">
          <div className={`transition-all duration-500 flex items-center justify-center overflow-hidden flex-shrink-0 ${isScrolled ? 'w-12 h-12 md:w-16 md:h-16' : 'w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40'}`}>
            {logo ? (
              <img 
                src={logo} 
                alt="Logo C.D.S" 
                className="w-full h-full object-contain transition-transform group-hover:scale-105 drop-shadow-sm" 
              />
            ) : (
              <div className="w-full h-full bg-[#800000] rounded-xl flex items-center justify-center">
                <span className={`text-white font-bold transition-all ${isScrolled ? 'text-sm' : 'text-xl md:text-3xl'}`}>CDS</span>
              </div>
            )}
          </div>
          <div className="flex flex-col min-w-0">
            <span className={`font-serif font-bold tracking-tight transition-all duration-500 text-[#800000] truncate ${isScrolled ? 'text-lg md:text-2xl' : 'text-xl md:text-4xl lg:text-5xl'}`}>
              Clínica Dente Saudável
            </span>
            {!isScrolled && (
              <span className="text-[#B19CD9] text-[10px] md:text-sm lg:text-base font-bold tracking-[0.15em] md:tracking-[0.3em] uppercase mt-0 md:mt-2 animate-pulse whitespace-nowrap">
                Dra. Sabrina C. Valverde
              </span>
            )}
          </div>
        </div>

        <nav className="hidden xl:flex gap-8 items-center ml-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#800000] font-bold transition-colors text-xs uppercase tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B19CD9] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className={`transition-all duration-500 bg-[#800000] text-white rounded-full font-bold uppercase tracking-widest hover:bg-[#600000] shadow-md hover:shadow-2xl whitespace-nowrap ${isScrolled ? 'px-6 py-2 text-xs' : 'px-8 py-3 text-sm'}`}
          >
            AGENDAR AGORA
          </a>
        </nav>
        
        {/* Mobile Call to Action Button - Visible when links are hidden */}
        <div className="xl:hidden ml-2">
          <a
            href="#contato"
            className={`transition-all duration-500 bg-[#800000] text-white rounded-full font-bold uppercase tracking-tighter hover:bg-[#600000] shadow-md flex items-center justify-center ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

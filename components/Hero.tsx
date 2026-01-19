
import React, { useState, useEffect } from 'react';

interface HeroProps {
  images?: string[];
}

const Hero: React.FC<HeroProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-start lg:items-center pt-52 md:pt-64 lg:pt-[22rem] pb-20 overflow-hidden bg-black"
    >
      {/* Background Slideshow com Efeito Ken Burns Refinado */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.length > 0 ? (
          images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                index === currentIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
              }`}
              style={{ 
                transitionProperty: 'opacity, transform',
                transitionDuration: '1500ms, 12000ms',
                imageRendering: 'high-quality'
              }}
            >
              <img
                src={src}
                alt={`Ambiente Clínica ${index + 1}`}
                className="w-full h-full object-cover brightness-[0.8] contrast-[1.05]"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))
        ) : (
          <div className="w-full h-full bg-slate-900 animate-pulse"></div>
        )}
        
        {/* Overlays de Gradiente para Melhor Legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 max-w-7xl">
        <div className="max-w-2xl mt-4 md:mt-8 lg:mt-0"> {/* Removido margin top excessivo no desktop pois o pt já resolve */}
          <div className="inline-block px-4 py-1 rounded-full bg-[#B19CD9]/20 backdrop-blur-md border border-[#B19CD9]/30 mb-6">
            <span className="text-[#800000] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
              Excelência em Odontologia
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#800000] leading-[1.1] mb-8 drop-shadow-sm">
            Seu sorriso é a nossa <br />
            <span className="text-[#B19CD9] italic relative">
              melhor obra.
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#B19CD9]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-800 mb-10 max-w-xl leading-relaxed font-medium">
            Atendimento exclusivo com a <span className="text-[#800000] font-bold">Dra. Sabrina C. Valverde</span>. 
            Sinta-se em casa em um ambiente projetado para o seu conforto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contato"
              className="group relative overflow-hidden bg-[#800000] text-white px-10 py-5 rounded-2xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 text-center"
            >
              <span className="relative z-10">AGENDAR AVALIAÇÃO</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <a
              href="#quem-somos"
              className="backdrop-blur-md bg-white/50 border-2 border-[#800000]/20 text-[#800000] px-10 py-5 rounded-2xl font-bold hover:bg-white/80 transition-all text-center"
            >
              CONHEÇA A CLÍNICA
            </a>
          </div>

          {/* Indicadores do Slideshow */}
          {images.length > 1 && (
            <div className="flex gap-3 mt-16">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    idx === currentIndex ? 'w-12 bg-[#800000]' : 'w-4 bg-[#800000]/20 hover:bg-[#800000]/40'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

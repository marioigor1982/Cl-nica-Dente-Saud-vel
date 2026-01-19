
import React from 'react';

interface HeroProps {
  image?: string;
}

const Hero: React.FC<HeroProps> = ({ image }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 md:pt-48 lg:pt-64 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {image ? (
          <img
            src={image}
            alt="Consultório Odontológico Moderno"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-slate-200 animate-pulse"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="bg-white/40 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/50 shadow-2xl max-w-2xl">
          <span className="text-[#800000] font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4 block">Bem-vindo à excelência</span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif text-[#800000] leading-tight mb-4 md:mb-6">
            Onde o seu <span className="text-[#B19CD9]">sorriso</span> é a nossa prioridade.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-xl leading-relaxed">
            Na Clínica Dente Saudável, combinamos tecnologia de ponta com um atendimento humanizado para transformar sua saúde bucal e elevar sua autoestima.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#tratamentos"
              className="bg-[#800000] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[#600000] transition-all text-center text-sm md:text-base"
            >
              Nossos Tratamentos
            </a>
            <a
              href="#contato"
              className="bg-white text-[#800000] border-2 border-[#800000] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-[#f8f8f8] transition-all text-center text-sm md:text-base"
            >
              Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

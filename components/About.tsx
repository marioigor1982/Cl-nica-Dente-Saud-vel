
import React from 'react';

interface AboutProps {
  image?: string;
}

const About: React.FC<AboutProps> = ({ image }) => {
  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="w-full lg:w-1/2 relative max-w-md lg:max-w-none mx-auto">
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-[#B19CD9]/20 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-[#800000]/10 rounded-full z-0"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              {image ? (
                <img
                  src={image}
                  alt="Dra. Sabrina Carlos Valverde"
                  className="w-full h-auto"
                />
              ) : (
                <div className="aspect-[4/5] bg-gray-100 animate-pulse"></div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#B19CD9] font-bold uppercase tracking-widest text-xs md:text-sm mb-2 block">Nossa História</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#800000] mb-6 leading-tight">Conheça a Dra. Sabrina Carlos Valverde</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Fundada sob a visão da Dra. Sabrina, a Clínica Dente Saudável nasceu do desejo de oferecer uma odontologia que vai além do consultório. Com anos de experiência e constante atualização acadêmica, a Dra. Sabrina acredita que cada sorriso conta uma história única.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#B19CD9] rounded-full p-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#800000]">Missão</h4>
                  <p className="text-sm text-gray-500">Transformar vidas através de sorrisos saudáveis.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#B19CD9] rounded-full p-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#800000]">Valores</h4>
                  <p className="text-sm text-gray-500">Ética, inovação e acolhimento humano.</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed italic border-l-4 border-[#B19CD9] pl-6 py-4 bg-gray-50 rounded-r-lg text-sm md:text-base">
              "Meu compromisso é com o seu bem-estar. Aqui, você não é apenas um paciente, você faz parte da nossa família."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

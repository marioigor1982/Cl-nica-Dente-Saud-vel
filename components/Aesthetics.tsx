
import React from 'react';

interface AestheticsProps {
  image?: string;
}

const Aesthetics: React.FC<AestheticsProps> = ({ image }) => {
  const items = [
    { name: "Clareamento Dental", desc: "Sorrisos mais brancos e radiantes com tecnologia a laser." },
    { name: "Lentes de Contato", desc: "Transformação estética com lâminas ultrafinas de porcelana." },
    { name: "Harmonização do Sorriso", desc: "Equilíbrio perfeito entre lábios, dentes e gengiva." },
    { name: "Odontologia Estética", desc: "Recuperação funcional com foco na beleza natural." },
  ];

  return (
    <section id="estetica" className="py-24 bg-[#B19CD9]/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              {image ? (
                <img
                  src={image}
                  alt="Estética Odontológica"
                  className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <div className="aspect-square bg-slate-100 animate-pulse"></div>
              )}
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block max-w-xs">
              <p className="text-[#800000] font-bold text-lg mb-2">Transformação real</p>
              <p className="text-sm text-gray-500 italic">"Minha autoestima mudou completamente após o tratamento na clínica. Super recomendado!"</p>
              <p className="text-xs text-[#B19CD9] mt-2 font-bold">— Maria Silva, Paciente</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-[#B19CD9] font-bold uppercase tracking-widest text-sm mb-2 block">Bem-estar</span>
            <h2 className="text-4xl font-serif text-[#800000] mb-8">Estética e Harmonização</h2>
            <div className="space-y-8">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#B19CD9] group-hover:bg-[#B19CD9] group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#800000]">{item.name}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 bg-[#800000] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[#600000] transition-all">
              Agendar Avaliação Estética
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aesthetics;

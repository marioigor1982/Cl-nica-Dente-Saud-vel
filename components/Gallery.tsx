
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://i.postimg.cc/bDC7bMBM/photo-1588776814546-1ffcf47267a5.jpg",
    "https://i.postimg.cc/YLvJx35s/photo-1606811841689-23dfddce3e95.jpg",
    "https://i.postimg.cc/0MWTm3Bh/photo-1629909613654-28e377c37b09.jpg",
    "https://i.postimg.cc/hzykxw5C/photo-1643660527072-9c702932f606.jpg",
    "https://i.postimg.cc/8JK2W30t/photo-1722407348833-35e0df48bf53.jpg",
    "https://i.postimg.cc/R6skf8DT/photo-1734518352225-22a52666268c.jpg",
    "https://i.postimg.cc/YGn5gVsn/premium-photo-1663088767412-b10c8dc27ad1.jpg",
    "https://i.postimg.cc/8JK2W30m/premium-photo-1675686363422-7d7ab88ee530.jpg",
    "https://i.postimg.cc/vgqJ9jN2/premium-photo-1675686363504-ba2df7786f16.jpg",
    "https://i.postimg.cc/xJxwH74Z/premium-photo-1675686363507-22a8d0e11b4c.jpg",
    "https://i.postimg.cc/DJj9sDMY/premium-photo-1675686363519-aa408ff068f4.jpg",
    "https://i.postimg.cc/ZvW1LHkh/premium-photo-1681966962522-546f370bc98e.jpg",
    "https://i.postimg.cc/njRy75Wf/premium-photo-1681967039743-37dc3a27f4ce.jpg",
    "https://i.postimg.cc/sQ6kS8N9/premium-photo-1682145288913-979906a9ebc8.jpg"
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#B19CD9] font-bold uppercase tracking-widest text-sm mb-2 block">Nosso Espaço</span>
          <h2 className="text-4xl font-serif text-[#800000]">Ambiente Preparado para Você</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Conheça nossa estrutura moderna, pensada para oferecer o máximo de conforto e segurança em cada detalhe.
          </p>
        </div>
        
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer group">
              <img 
                src={src} 
                alt={`Clínica Dente Saudável - Foto ${index + 1}`} 
                className="w-full h-auto object-cover group-hover:brightness-110 transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

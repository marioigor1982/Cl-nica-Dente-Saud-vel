import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import ServicesGrid from './components/ServicesGrid';
import Aesthetics from './components/Aesthetics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { generateLogo } from './services/geminiService';
import { ImageMap, ServiceItem } from './types';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageMap>({
    hero: '', 
    draSabrina: 'https://i.postimg.cc/C5LXyKDx/1768799361732.png', 
    aesthetics: 'https://i.postimg.cc/cCpM1TCG/photo-1670250492416-570b5b7343b1.jpg', 
    logo: ''
  });

  // Lista consolidada de 7 fotos de alta qualidade para o carrossel
  const heroPhotos = [
    'https://i.postimg.cc/QChjLZk3/premium-photo-1663088767412-b10c8dc27ad1.jpg',
    'https://i.postimg.cc/QChjLZkN/photo-1629909613654-28e377c37b09.jpg',
    'https://i.postimg.cc/90Cc3Ht5/photo_1722407348833_35e0df48bf53.jpg',
    'https://i.postimg.cc/Y0MtcBf7/premium_photo_1675686363504_ba2df7786f16.jpg',
    'https://i.postimg.cc/Bbp447Mt/premium_photo_1681966962522_546f370bc98e.jpg',
    'https://i.postimg.cc/rsMq62Cs/premium_photo_1681967039743_37dc3a27f4ce.jpg',
    'https://i.postimg.cc/hvcKFRbS/photo_1588776814546_1ffcf47267a5.jpg'
  ];

  useEffect(() => {
    const loadImages = async () => {
      const logoImg = await generateLogo();
      const logoUrl = logoImg || '';

      setImages(prev => ({
        ...prev,
        logo: logoUrl
      }));

      if (logoUrl) {
        const favicon = document.getElementById('dynamic-favicon') as HTMLLinkElement;
        if (favicon) {
          favicon.href = logoUrl;
        }
      }
    };

    loadImages();
  }, []);

  const treatments: ServiceItem[] = [
    { title: "Clínica Geral", icon: "🦷", description: "Cuidado completo para a saúde básica dos seus dentes e gengivas." },
    { title: "Limpeza e Prevenção", icon: "✨", description: "Remoção de tártaro e placas para evitar problemas futuros." },
    { title: "Tratamento de Canal", icon: "🔬", description: "Tecnologia avançada para salvar dentes comprometidos sem dor." },
    { title: "Ortodontia", icon: "📏", description: "Aparelhos modernos e discretos para alinhar seu sorriso." },
    { title: "Implantes Dentários", icon: "🔩", description: "Recupere sua função mastigatória e confiança com implantes premium." },
  ];

  const surgeries: ServiceItem[] = [
    { title: "Extração de Sisos", icon: "🏥", description: "Procedimentos seguros e rápidos para remover dentes do siso." },
    { title: "Cirurgias Periodontais", icon: "💉", description: "Tratamentos cirúrgicos para a saúde e estética da sua gengiva." },
    { title: "Implantes", icon: "🏗️", description: "Cirurgias de alta precisão para reabilitação oral completa." },
    { title: "Cirurgias Corretivas", icon: "🛠️", description: "Correções estruturais para melhor funcionalidade da face." },
  ];

  return (
    <main className="antialiased">
      <Header logo={images.logo} />
      <Hero images={heroPhotos} />
      <Gallery />
      <About image={images.draSabrina} />
      <ServicesGrid id="tratamentos" title="Tratamentos Odontológicos" subtitle="O que fazemos por você" items={treatments} bgColor="bg-gray-50" />
      <Aesthetics image={images.aesthetics} />
      <ServicesGrid id="cirurgias" title="Cirurgias Dentárias" subtitle="Segurança e Precisão" items={surgeries} />
      <Contact />
      <Footer logo={images.logo} />
      <WhatsAppButton />
    </main>
  );
};

export default App;
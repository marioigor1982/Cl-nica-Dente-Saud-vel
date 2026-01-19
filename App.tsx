
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
import { generateDentalImage, generateLogo } from './services/geminiService';
import { ImageMap, ServiceItem } from './types';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageMap>({
    hero: '',
    draSabrina: 'https://i.postimg.cc/C5LXyKDx/1768799361732.png', // Foto real fornecida
    aesthetics: '',
    logo: ''
  });

  const clinicPhotos = [
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

  useEffect(() => {
    const loadImages = async () => {
      // Carregamento das imagens de apoio e do logotipo
      const [aestheticImg, logoImg] = await Promise.all([
        generateDentalImage("High-end aesthetic dentistry results, beautiful healthy white smile, close up, professional lighting"),
        generateLogo()
      ]);

      const logoUrl = logoImg || '';

      setImages(prev => ({
        ...prev,
        aesthetics: aestheticImg || 'https://picsum.photos/1200/800?grayscale',
        logo: logoUrl
      }));

      // Atualiza o favicon na aba/guia do site
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
    { title: "Extração de Sisos", icon: "🏥", description: "Procedimentos seguros e rápidos para remoção de dentes do siso." },
    { title: "Cirurgias Periodontais", icon: "💉", description: "Tratamentos cirúrgicos para a saúde e estética da sua gengiva." },
    { title: "Implantes", icon: "🏗️", description: "Cirurgias de alta precisão para reabilitação oral completa." },
    { title: "Cirurgias Corretivas", icon: "🛠️", description: "Correções estruturais para melhor funcionalidade da face." },
  ];

  return (
    <main className="antialiased">
      <Header logo={images.logo} />
      <Hero images={clinicPhotos} />
      <Gallery />
      <About image={images.draSabrina} />
      
      <ServicesGrid 
        id="tratamentos" 
        title="Tratamentos Odontológicos" 
        subtitle="O que fazemos por você"
        items={treatments} 
        bgColor="bg-gray-50"
      />

      <Aesthetics image={images.aesthetics} />

      <ServicesGrid 
        id="cirurgias" 
        title="Cirurgias Dentárias" 
        subtitle="Segurança e Precisão"
        items={surgeries} 
      />

      <Contact />
      <Footer logo={images.logo} />
      <WhatsAppButton />
    </main>
  );
};

export default App;

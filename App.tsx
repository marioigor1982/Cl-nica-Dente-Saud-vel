
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
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
    draSabrina: '',
    aesthetics: '',
    logo: ''
  });

  useEffect(() => {
    const loadImages = async () => {
      // Carregamento paralelo das imagens e do logotipo
      const [heroImg, sabrinaImg, aestheticImg, logoImg] = await Promise.all([
        generateDentalImage("A modern and clean dental clinic reception, luxury atmosphere, bright, pastel colors"),
        generateDentalImage("Realistic professional portrait of a 55-year-old blonde woman, Dr. Sabrina, wearing a light pink dentist uniform, smiling warmly, arms crossed, clean and modern dental clinic background, high-end photography"),
        generateDentalImage("High-end aesthetic dentistry results, beautiful healthy white smile, close up, professional lighting"),
        generateLogo()
      ]);

      setImages({
        hero: heroImg || 'https://picsum.photos/1600/900?grayscale',
        draSabrina: sabrinaImg || 'https://picsum.photos/800/1000?grayscale',
        aesthetics: aestheticImg || 'https://picsum.photos/1200/800?grayscale',
        logo: logoImg || ''
      });
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
      <Hero image={images.hero} />
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

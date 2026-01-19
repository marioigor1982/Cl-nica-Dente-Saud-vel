
import React from 'react';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
  bgColor?: string;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ id, title, subtitle, items, bgColor = "bg-white" }) => {
  return (
    <section id={id} className={`py-24 ${bgColor}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#B19CD9] font-bold uppercase tracking-widest text-sm mb-2 block">{subtitle}</span>
          <h2 className="text-4xl font-serif text-[#800000]">{title}</h2>
          <div className="w-20 h-1 bg-[#B19CD9] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
              <div className="w-16 h-16 bg-[#B19CD9]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#800000] transition-colors">
                <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#800000] mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

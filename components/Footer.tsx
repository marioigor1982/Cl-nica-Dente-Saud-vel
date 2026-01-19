
import React from 'react';

interface FooterProps {
  logo?: string;
}

const Footer: React.FC<FooterProps> = ({ logo }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-28 h-28 flex items-center justify-center overflow-hidden">
                {logo ? (
                  <img src={logo} alt="Logo C.D.S" className="w-full h-full object-contain drop-shadow-sm" />
                ) : (
                  <div className="w-full h-full bg-[#800000] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">CDS</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-[#800000]">Dente Saudável</span>
                <span className="text-sm text-[#B19CD9] font-bold uppercase tracking-widest">Excelência Sorridente</span>
              </div>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed text-lg">
              Referência em odontologia moderna e humanizada em Montes Claros. Tecnologia e carinho para o seu melhor sorriso.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#800000] mb-8 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4 text-gray-500 font-semibold text-lg">
              <li><a href="#inicio" className="hover:text-[#B19CD9] transition-colors">Início</a></li>
              <li><a href="#quem-somos" className="hover:text-[#B19CD9] transition-colors">Quem Somos</a></li>
              <li><a href="#tratamentos" className="hover:text-[#B19CD9] transition-colors">Tratamentos</a></li>
              <li><a href="#contato" className="hover:text-[#B19CD9] transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#800000] mb-8 uppercase tracking-widest text-sm">Conecte-se</h4>
            <div className="flex gap-5 mb-8">
              <a href="#" className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#B19CD9] hover:text-white transition-all shadow-md">
                <span className="sr-only">Instagram</span>
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#800000] hover:text-white transition-all shadow-md">
                <span className="sr-only">Facebook</span>
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
            <p className="text-sm text-gray-400 font-medium">CRO-MG: 00.000</p>
          </div>
        </div>

        <div className="bg-[#B19CD9]/5 rounded-[2rem] p-8 flex flex-col md:flex-row justify-between items-center text-base text-gray-500 border border-gray-100 mt-8">
          <p>© {new Date().getFullYear()} Clínica Dente Saudável. Todos os direitos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0 font-bold">
            <a href="#" className="hover:text-[#800000] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#800000] transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

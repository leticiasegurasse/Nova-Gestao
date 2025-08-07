import logoSvg from '../assets/images/logos/icone.svg';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { ROUTES } from '../config/routes';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary-100)] border-t border-[var(--color-primary-100)]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Coluna Esquerda - Logo e Redes Sociais */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            {/* Logo e Nome da Empresa */}
            <div className="flex items-center space-x-3">
              <img 
                src={logoSvg}
                alt="Nova Gestão Médica" 
                className="h-10 w-10"
              />
              <span className="font-semibold text-lg text-[var(--color-primary-800)]">
                Nova Gestão Médica
              </span>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--color-primary-600)] transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--color-primary-600)] transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--color-primary-600)] transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--color-primary-600)] transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Coluna Central - Menu */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg text-[var(--color-primary-800)]">
              Menu
            </h3>
            <nav className="space-y-2">
                             <a href={ROUTES.HOME} className="block text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)] transition-colors duration-200">
                 Home
               </a>
               <a href={ROUTES.SERVICOS} className="block text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)] transition-colors duration-200">
                 Serviços
               </a>
               <a href="#" className="block text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)] transition-colors duration-200">
                 Blog
               </a>
               <a href={ROUTES.SOBRE} className="block text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)] transition-colors duration-200">
                 Sobre Nós
               </a>
               <a href={ROUTES.CONTATO} className="block text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)] transition-colors duration-200">
                 Contato
               </a>
               <a href={ROUTES.PRIVACY_POLICY} className="block text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)] transition-colors duration-200">
                 Policy
               </a>
            </nav>
          </div>

          {/* Coluna Direita - Informações de Contato */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg text-[var(--color-gray-800)]">
              Informações de Contato
            </h3>
                         <div className="space-y-3 flex flex-col items-center md:items-start">
               <div className="flex items-center space-x-3 justify-center md:justify-start">
                 <Phone className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                 <span className="text-[var(--color-primary-800)]">
                   +55 11 959 327 581
                 </span>
               </div>
               <div className="flex items-center space-x-3 justify-center md:justify-start">
                 <Mail className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                 <span className="text-[var(--color-primary-800)]">
                   admin@novagestaomedica.com
                 </span>
               </div>
               <div className="flex items-center space-x-3 justify-center md:justify-start">
                 <MapPin className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                 <span className="text-[var(--color-primary-800)]">
                   Av. Paulista, 1636 - Sala 1504
                 </span>
               </div>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer; 
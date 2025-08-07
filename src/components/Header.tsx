import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import iconeSvg from '../assets/images/logos/icone.svg';
import { ROUTES } from '../config/routes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveRoute = (route: string) => {
    return location.pathname === route;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-[var(--color-primary-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="flex-shrink-0">
              <img 
                src={iconeSvg}
                alt="Nova Gestão Médica" 
                className="h-10 w-10 md:h-12 md:w-12"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-lg md:text-xl leading-tight text-[var(--color-primary-800)]">
                Nova Gestão
              </div>
              <div className="font-semibold text-lg md:text-xl leading-tight text-[var(--color-primary-800)]">
                Médica
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to={ROUTES.HOME} 
              className={`transition-colors duration-200 font-medium ${
                isActiveRoute(ROUTES.HOME) 
                  ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1' 
                  : 'text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]'
              }`}
            >
              Início
            </Link>
            <Link 
              to={ROUTES.SERVICOS} 
              className={`transition-colors duration-200 font-medium ${
                isActiveRoute(ROUTES.SERVICOS) 
                  ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1' 
                  : 'text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]'
              }`}
            >
              Serviços
            </Link>
            <Link 
              to={ROUTES.SOBRE} 
              className={`transition-colors duration-200 font-medium ${
                isActiveRoute(ROUTES.SOBRE) 
                  ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1' 
                  : 'text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]'
              }`}
            >
              Sobre Nós
            </Link>
            <Link 
              to={ROUTES.CONTATO} 
              className={`transition-colors duration-200 font-medium ${
                isActiveRoute(ROUTES.CONTATO) 
                  ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1' 
                  : 'text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]'
              }`}
            >
              Contato
            </Link>
            <button className="px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)]">
              <span>Fale Conosco!</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="transition-colors duration-200 text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-[var(--color-primary-50)] border-[var(--color-primary-100)]">
              <Link 
                to={ROUTES.HOME} 
                className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                  isActiveRoute(ROUTES.HOME) 
                    ? 'text-[var(--color-primary)] bg-[var(--color-primary-50)] rounded-lg' 
                    : 'text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to={ROUTES.SERVICOS} 
                className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                  isActiveRoute(ROUTES.SERVICOS) 
                    ? 'text-[var(--color-primary)] bg-[var(--color-primary-50)] rounded-lg' 
                    : 'text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to={ROUTES.SOBRE} 
                className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                  isActiveRoute(ROUTES.SOBRE) 
                    ? 'text-[var(--color-primary)] bg-[var(--color-primary-50)] rounded-lg' 
                    : 'text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to={ROUTES.CONTATO} 
                className={`block px-3 py-2 transition-colors duration-200 font-medium ${
                  isActiveRoute(ROUTES.CONTATO) 
                    ? 'text-[var(--color-primary)] bg-[var(--color-primary-50)] rounded-lg' 
                    : 'text-[var(--color-primary-800)] hover:text-[var(--color-primary-600)]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <button className="w-full mt-4 px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)]">
                <span>Fale Conosco!</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 
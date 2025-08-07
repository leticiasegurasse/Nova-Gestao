import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-primary-50)] to-white flex items-center justify-center px-4">
      {/* Background com padrão de pontos */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-primary)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Número 404 */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-[var(--color-primary)] leading-none">
            404
          </h1>
        </div>

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-gray-800)] mb-4">
          Página não encontrada
        </h2>

        {/* Descrição */}
        <p className="text-lg md:text-xl text-[var(--color-gray-600)] mb-8 leading-relaxed">
          Ops! Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)]"
          >
            <Home className="w-5 h-5 mr-2" />
            Voltar ao Início
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200 border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </button>
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-[var(--color-gray-800)] mb-3">
            Precisa de ajuda?
          </h3>
          <p className="text-[var(--color-gray-600)] mb-4">
            Entre em contato conosco para obter suporte.
          </p>
          <Link
            to={ROUTES.CONTATO}
            className="inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 text-[var(--color-primary)] bg-[var(--color-primary-50)] hover:bg-[var(--color-primary-100)]"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

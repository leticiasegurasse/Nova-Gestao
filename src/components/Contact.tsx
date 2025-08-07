import { ArrowRight } from 'lucide-react';
import imgContato from '../assets/images/img_contato.svg';

const Contact = () => {
  return (
    <section className="pt-20 px-4 bg-gradient-to-b from-[var(--color-primary-100)] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Botão Seja bem vindo(a)! */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 rounded-lg border border-[var(--color-primary-200)] bg-white">
            <span className="text-sm font-medium text-[var(--color-primary-800)]">
              Seja bem vindo(a)!
            </span>
          </div>
        </div>

        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[var(--color-gray-800)]">
            Entre em contato
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[var(--color-gray-700)] mb-8">
            Porque quem entende a rotina médica, entrega mais.
          </p>
          <button className="px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)] flex items-center space-x-3 mx-auto">
            <span>Fale Conosco</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Coluna Direita - Imagem */}
        <div className="flex justify-center">
          <img 
            src={imgContato}
            alt="Médica sorrindo e fazendo gesto de rock"
            className="w-full max-w-md h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact; 
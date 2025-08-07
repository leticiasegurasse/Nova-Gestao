import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import imgFaq from '../assets/images/img_faq.avif';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-t from-[var(--color-primary-100)] via-[var(--color-primary-50)] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Botão Perguntas Frequentes */}
        <div className="text-center mb-8">
          <button className="px-6 py-2 rounded-lg font-medium text-sm transition-colors duration-200 text-[var(--color-primary-800)] bg-[var(--color-primary-100)] hover:bg-[var(--color-primary-200)]">
            Perguntas Frequentes
          </button>
        </div>

        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[var(--color-gray-800)]">
            As respostas para suas perguntas
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[var(--color-gray-700)]">
            Fazemos diferente porque pensamos diferente.
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Coluna Esquerda - Imagem FAQ */}
          <div className="relative">
            <div className="relative">
              <img 
                src={imgFaq}
                alt="Pessoas pensando sobre FAQ"
                className="w-full h-auto rounded-t-xl"
              />
            </div>
          </div>

          {/* Coluna Direita - Lista de Perguntas */}
          <div className="space-y-0">
            {/* Pergunta 1 */}
            <div className="border-b border-gray-200">
              <div 
                className="flex items-center justify-between cursor-pointer py-6"
                onClick={() => toggleFaq(0)}
              >
                <h3 className="text-lg font-medium text-[var(--color-gray-800)]">
                  O que é a Nova Gestão Médica?
                </h3>
                {openFaq === 0 ? (
                  <Minus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                )}
              </div>
              {openFaq === 0 && (
                <div className="pb-6">
                  <p className="text-[var(--color-gray-600)] leading-relaxed">
                    A Nova Gestão Médica é uma empresa que oferece soluções completas para médicos e instituições de saúde. Atuamos com equipes médicas de excelência, suporte jurídico especializado, auditoria assistencial, software de transcrição automática por IA e seguro médico. Nosso foco é descomplicar a prática médica e proteger quem cuida.
                  </p>
                </div>
              )}
            </div>

            {/* Pergunta 2 */}
            <div className="border-b border-gray-200">
              <div 
                className="flex items-center justify-between cursor-pointer py-6"
                onClick={() => toggleFaq(1)}
              >
                <h3 className="text-lg font-medium text-[var(--color-gray-800)]">
                  O que diferencia a telemedicina da Nova Gestão Médica?
                </h3>
                {openFaq === 1 ? (
                  <Minus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                )}
              </div>
              {openFaq === 1 && (
                <div className="pb-6">
                  <p className="text-[var(--color-gray-600)] leading-relaxed">
                    Nossas equipes de telemedicina são formadas por médicos experientes, com coordenação próxima e protocolos clínicos bem definidos. Aliamos excelência médica à tecnologia de ponta — como transcrição automática por IA — para oferecer segurança, resolutividade e conforto ao profissional.
                  </p>
                </div>
              )}
            </div>

            {/* Pergunta 3 */}
            <div className="border-b border-gray-200">
              <div 
                className="flex items-center justify-between cursor-pointer py-6"
                onClick={() => toggleFaq(2)}
              >
                <h3 className="text-lg font-medium text-[var(--color-gray-800)]">
                  Como funciona o seguro médico da Nova Gestão?
                </h3>
                {openFaq === 2 ? (
                  <Minus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                )}
              </div>
              {openFaq === 2 && (
                <div className="pb-6">
                  <p className="text-[var(--color-gray-600)] leading-relaxed">
                    Nosso seguro vai além da cobertura tradicional. Trabalhamos com os melhores escritórios de advocacia do país, oferecendo suporte técnico, segunda opinião de especialistas, análise jurimétrica e auditoria assistencial. Você não recebe só um número de protocolo — recebe acolhimento e estratégia.
                  </p>
                </div>
              )}
            </div>

            {/* Pergunta 4 */}
            <div className="border-b border-gray-200">
              <div 
                className="flex items-center justify-between cursor-pointer py-6"
                onClick={() => toggleFaq(3)}
              >
                <h3 className="text-lg font-medium text-[var(--color-gray-800)]">
                  Posso contratar os serviços da Nova Gestão mesmo sendo médico autônomo?
                </h3>
                {openFaq === 3 ? (
                  <Minus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                )}
              </div>
              {openFaq === 3 && (
                <div className="pb-6">
                  <p className="text-[var(--color-gray-600)] leading-relaxed">
                    Sim. Nossos serviços são pensados para atender tanto médicos autônomos quanto clínicas, hospitais e operadoras de saúde. Seja qual for o seu cenário, oferecemos soluções adaptadas à sua realidade.
                  </p>
                </div>
              )}
            </div>

            {/* Pergunta 5 */}
            <div className="border-b border-gray-200">
              <div 
                className="flex items-center justify-between cursor-pointer py-6"
                onClick={() => toggleFaq(4)}
              >
                <h3 className="text-lg font-medium text-[var(--color-gray-800)]">
                  Como posso contratar ou saber mais sobre os serviços?
                </h3>
                {openFaq === 4 ? (
                  <Minus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                )}
              </div>
              {openFaq === 4 && (
                <div className="pb-6">
                  <p className="text-[var(--color-gray-600)] leading-relaxed">
                    É simples. Basta preencher o formulário de contato no nosso site ou chamar nosso time no WhatsApp. Um especialista da Nova Gestão vai entender sua necessidade e apresentar a melhor solução — sem compromisso.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ; 
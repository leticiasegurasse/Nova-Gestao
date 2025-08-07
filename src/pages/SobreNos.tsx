import imgSobreNos from '../assets/images/img_sobrenos.avif';
import SectionTitle from '../components/SectionTitle';
import SobreCard from '../components/SobreCard';
import Contact from '../components/Contact';
import card1SobreNos from '../assets/images/card1_pg_sobre.avif';
import card2SobreNos from '../assets/images/card2_pg_sobre.avif';
import card3SobreNos from '../assets/images/card3_pg_sobre.avif';
import imgHospital from '../assets/images/hospital.avif';

const SobreNos = () => {
  return (
    <div className="min-h-screen">
      {/* Primeira Seção - Hero */}
      <section className="relative min-h-screen flex items-center">
        {/* Background com gradiente e padrão de pontos */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-50)] to-[var(--color-primary-100)]">
          {/* Padrão de pontos sutil */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-primary)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Coluna Esquerda - Texto */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-[var(--color-gray-800)]">Nova Gestão</span>
                <br />
                <span className="text-[var(--color-primary)]">Médica</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-gray-700)] leading-relaxed">
                Fazemos diferente, porque pensamos diferente.
              </p>
            </div>

            {/* Coluna Direita - Imagem */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img 
                src={imgSobreNos}
                alt="Equipe médica da Nova Gestão"
                className="w-full max-w-lg h-auto rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Segunda Seção */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="max-w-xl mx-auto">
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <SectionTitle title="Nosso Propósito" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[var(--color-gray-800)]">
                Porque trabalhar conosco?
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[var(--color-gray-700)]">
                Somos médicos que passaram por todos os lados da saúde — operadoras, hospitais, auditorias e tribunais. E foi vivendo tudo isso que entendemos: o cuidado também precisa de quem cuide. A Nova Gestão Médica nasceu pra isso. Pra estar ao lado de quem está na linha de frente. Com estratégia, com escuta e com coragem de fazer diferente.
            </p>
          </div>
        </div>
        {/* Conteúdo Principal */}
        <div className="grid lg:grid-cols-2 gap-12">
            {/* Coluna Esquerda - Imagem Principal */}
            <div className="relative">
              <img 
                src={imgHospital}
                alt="Médico sorrindo com estetoscópio"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Coluna Direita - Cards de Diferenciação */}
            <div className="space-y-6">
              
              <SobreCard 
                image={card1SobreNos}
                title="Experiência que Transforma"
                description="Nascemos da vivência prática em todas as frentes da saúde: operadoras, clinical trials, auditoria médica, gestão hospitalar e liderança de equipes. Conhecemos a engrenagem por dentro — e sabemos como fazê-la funcionar melhor."
                alt="Equipe médica colaborando"
              />

              <SobreCard 
                image={card2SobreNos}
                title="Gestão com Propósito e Proximidade"
                description="Não somos apenas gestores. Somos médicos que entendem médicos. Atuamos com estratégia, mas sem perder o afeto, a escuta e a empatia. Porque gente de jaleco também merece ter alguém por perto."
                alt="Médico usando tecnologia"
              />

              <SobreCard 
                image={card3SobreNos}
                title="Inovação com Responsabilidade"
                description="Aliamos tecnologia, inteligência de dados e conhecimento jurídico para proteger quem está na linha de frente. Oferecemos soluções completas com IA, defesa médica especializada e uma nova visão sobre o que significa cuidar."
                alt="Profissionais jurídicos"
              />

            </div>

          </div>
      </section>

      {/* Componente de Contato */}
      <Contact />
    </div>
  );
};

export default SobreNos;

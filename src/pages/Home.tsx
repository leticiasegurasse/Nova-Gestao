import hero1Svg from '../assets/images/hero1.svg';
import hero2Svg from '../assets/images/hero2.svg';
import hero3Svg from '../assets/images/hero3.svg';
import logoSvg from '../assets/images/logos/logo.svg';
import imgServico from '../assets/images/img_servico.webp';
import imgSobreNos from '../assets/images/img_sobrenos.avif';
import card1SobreNos from '../assets/images/card1_sobre_nos.avif';
import card2SobreNos from '../assets/images/card2_sobre_nos.avif';
import card3SobreNos from '../assets/images/card3_sobre_nos.avif';
import { Shield, Clock, Users, Stethoscope } from 'lucide-react';
import { testimonials } from '../mocks/testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import SobreCard from '../components/SobreCard';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background com gradiente e padrão de pontos */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-50)] to-[var(--color-primary-100)]">
          {/* Padrão de pontos sutil */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-primary)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-20 lg:pt-0">
            
            {/* Coluna Esquerda - Texto */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Título */}
               <div className="space-y-2">
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-gray-800)]">
                   A Equipe
                 </h1>
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-primary)]">
                   que você Confia!
                 </h1>
               </div>

               {/* Parágrafo */}
               <p className="text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed text-[var(--color-gray-700)]">
                 Cuidamos da medicina por todos os lados — para que o médico possa cuidar do que importa.
               </p>

              {/* Botões */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                 <button className="px-6 sm:px-8 py-3 rounded-lg font-medium text-base sm:text-lg transition-colors duration-200 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)]">
                   Entre em Contato
                 </button>
                 <button className="px-6 sm:px-8 py-3 rounded-lg font-medium text-base sm:text-lg transition-colors duration-200 border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white">
                   Serviços
                 </button>
               </div>
            </div>

            {/* Coluna Direita - Imagens */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="">
                <img 
                  src={hero1Svg}
                  alt="Médica com estetoscópio sorrindo"
                  className=""
                />
              </div>
              
              <div className="flex flex-col gap-4">
                
                <div className="">
                  <img 
                    src={hero2Svg}
                    alt="Cirurgiões realizando procedimento"
                    className=""
                    />
                </div>

                <div className="">
                  <img 
                    src={hero3Svg}
                    alt="Médica com jaleco e estetoscópio"
                    className=""
                    />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-20 px-4 bg-white">
        {/* Botão Serviços */}
        <div className="text-center mb-8">
          <button className="px-6 py-2 rounded-lg font-medium text-sm transition-colors duration-200 text-[var(--color-primary-800)] bg-[var(--color-primary-100)] hover:bg-[var(--color-primary-200)]">
            Serviços
          </button>
        </div>

        <img src={logoSvg} alt="Logo" className="w-96 mx-auto -mt-20" />

        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[var(--color-gray-800)]">
              Serviços para você
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-[var(--color-gray-800)]">
              Médico(a)!
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[var(--color-gray-700)]">
              Unimos oportunidades de carreira, tecnologia de <br />
              ponta, inteligência emocional e segurança jurídica.
            </p>
          </div>

          {/* Conteúdo dos Serviços */}
          <div className="flex flex-col lg:flex-row gap-4">
            
            {/* Coluna Esquerda - Cards de Serviços */}
            <div className="flex flex-col gap-4 w-1/2">
              
              {/* Card 1: Telemedicina e Plantão */}
              <div className="rounded-xl shadow-lg p-6 border transition-all duration-300 cursor-pointer bg-[var(--color-primary-50)] border-[var(--color-primary)] hover:bg-[var(--color-primary-100)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(35,140,210,0.15)]">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--color-primary)]">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-[var(--color-gray-800)]">
                      Telemedicina e Plantão
                    </h3>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      Atue com tranquilidade em equipes organizadas, protocolos bem definidos e suporte continuo. Da consulta por telemedicina ao plantão presencial, oferecemos estrutura, coordenação e respaldo para que você possa focar no que faz de melhor: cuidar de pessoas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Seguro e Defesa Médica */}
              <div className="rounded-xl shadow-lg p-6 border transition-all duration-300 cursor-pointer bg-[var(--color-primary-50)] border-[var(--color-primary)] hover:bg-[var(--color-primary-100)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(35,140,210,0.15)]">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--color-primary)]">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-[var(--color-gray-800)]">
                      Seguro e Defesa Médica
                    </h3>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      Proteja sua carreira com o respaldo de quem entende do assunto. Nossa cobertura inclui assessoria jurídica especializada, pareceres técnicos, auditoria assistencial e defesa personalizada. É mais do que um seguro—é segurança real para quem cuida.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Tecnologia Médica */}
              <div className="rounded-xl shadow-lg p-6 border transition-all duration-300 cursor-pointer bg-[var(--color-primary-50)] border-[var(--color-primary)] hover:bg-[var(--color-primary-100)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(35,140,210,0.15)]">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--color-primary)]">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-[var(--color-gray-800)]">
                      Tecnologia Médica
                    </h3>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      Ganhe tempo e segurança com soluções que trabalham por você. Com nossa IA de transcrição, você fala com o paciente e o sistema escreve por você. Menos digitação, mais presença, mais proteção. Tecnologia que simplifica e fortalece sua prática clínica.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Carreira na Gestão */}
              <div className="rounded-xl shadow-lg p-6 border transition-all duration-300 cursor-pointer bg-[var(--color-primary-50)] border-[var(--color-primary)] hover:bg-[var(--color-primary-100)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(35,140,210,0.15)]">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--color-primary)]">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-[var(--color-gray-800)]">
                      Carreira na Gestão
                    </h3>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      Seja protagonista da sua carreira com novas oportunidades. Atuamos junto aos melhores profissionais e ajudamos você a crescer com propósito, autonomia e suporte. Na Nova Gestão Médica, sua trajetória é valorizada em todas as etapas.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Coluna Direita - Imagem do Médico */}
            <div className="w-1/2">
              <img 
                src={imgServico}
                alt="Médico sorrindo com estetoscópio"
                className="rounded-xl shadow-lg"
                />
            </div>

          </div>
        </div>
      </section>

      {/* Seção O que nos diferencia? */}
      <section className="py-20 px-4 bg-[var(--color-primary-50)]">
        <div className="max-w-6xl mx-auto">
          {/* Botão Sobre Nós */}
          <div className="text-center mb-8">
            <button className="px-6 py-2 rounded-lg font-medium text-sm transition-colors duration-200 text-[var(--color-primary-800)] bg-[var(--color-primary-100)] hover:bg-[var(--color-primary-200)]">
              Sobre Nós
            </button>
          </div>

          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[var(--color-gray-800)]">
              O que nos diferencia?
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[var(--color-gray-700)]">
              Fazemos diferente porque pensamos diferente.
            </p>
          </div>

          {/* Conteúdo Principal */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Coluna Esquerda - Imagem Principal */}
            <div className="relative">
              <img 
                src={imgSobreNos}
                alt="Médico sorrindo com estetoscópio"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Coluna Direita - Cards de Diferenciação */}
            <div className="space-y-6">
              
              <SobreCard 
                image={card1SobreNos}
                title="Excelência Médica com Coordenação Ativa"
                description="Nossas equipes são formadas por médicos experientes, com suporte constante de uma coordenação assistencial próxima e resolutiva."
                alt="Equipe médica colaborando"
              />

              <SobreCard 
                image={card2SobreNos}
                title="Tecnologia que Trabalha por Você"
                description="Integramos soluções como IA e transcrição automática para reduzir a burocracia e aumentar a qualidade do atendimento."
                alt="Médico usando tecnologia"
              />

              <SobreCard 
                image={card3SobreNos}
                title="Defesa Jurídica Especializada"
                description="Parceria com os melhores escritórios e peritos do país. Segurança jurídica real, com análise técnica e acompanhamento estratégico de ponta a ponta."
                alt="Profissionais jurídicos"
              />

            </div>

          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-20 px-4 bg-[var(--color-primary-50)]">
        <div className="max-w-6xl mx-auto">
          {/* Botão Testemunhos */}
          <div className="text-center mb-8">
            <button className="px-6 py-2 rounded-lg font-medium text-sm transition-colors duration-200 text-[var(--color-primary-800)] bg-[var(--color-primary-100)] hover:bg-[var(--color-primary-200)]">
              Testemunhos
            </button>
          </div>

          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[var(--color-gray-800)]">
              Opiniões Honestas dos nossos Colegas
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-[var(--color-gray-700)]">
              Quem usa, confia. Quem confia, compartilha.
            </p>
          </div>

          {/* Container do Scroll Infinito com 3 Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Coluna 1 */}
            <div className="relative overflow-hidden h-screen">
              {/* Efeito de esfumado superior */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--color-primary-50)] to-transparent z-10 pointer-events-none"></div>
              {/* Efeito de esfumado inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-primary-50)] to-transparent z-10 pointer-events-none"></div>
              <div className="flex flex-col animate-scroll-up-slow">
                {testimonials.slice(0, 3).map((testimonial) => (
                  <div key={`col1-first-${testimonial.id}`} className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-6 m-4 border border-gray-100">
                    {testimonial.name && (
                      <h4 className="font-bold text-[var(--color-gray-800)] mb-1">
                        {testimonial.name}
                      </h4>
                    )}
                    <p className="text-sm text-[var(--color-gray-700)] mb-4">
                      {testimonial.specialty}
                    </p>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col animate-scroll-up-slow animation-delay-slow-15000">
                {testimonials.slice(0, 3).map((testimonial) => (
                  <div key={`col1-second-${testimonial.id}`} className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-6 m-4 border border-gray-100">
                    {testimonial.name && (
                      <h4 className="font-bold text-[var(--color-gray-800)] mb-1">
                        {testimonial.name}
                      </h4>
                    )}
                    <p className="text-sm text-[var(--color-gray-700)] mb-4">
                      {testimonial.specialty}
                    </p>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="relative overflow-hidden h-screen hidden lg:block">
              {/* Efeito de esfumado superior */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--color-primary-50)] to-transparent z-10 pointer-events-none"></div>
              {/* Efeito de esfumado inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-primary-50)] to-transparent z-10 pointer-events-none"></div>
              <div className="flex flex-col animate-scroll-up-center animation-delay-2000">
                {testimonials.slice(3, 6).map((testimonial) => (
                  <div key={`col2-first-${testimonial.id}`} className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-6 m-4 border border-gray-100">
                    {testimonial.name && (
                      <h4 className="font-bold text-[var(--color-gray-800)] mb-1">
                        {testimonial.name}
                      </h4>
                    )}
                    <p className="text-sm text-[var(--color-gray-700)] mb-4">
                      {testimonial.specialty}
                    </p>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col animate-scroll-up-center animation-delay-7000">
                {testimonials.slice(3, 6).map((testimonial) => (
                  <div key={`col2-second-${testimonial.id}`} className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-6 m-4 border border-gray-100">
                    {testimonial.name && (
                      <h4 className="font-bold text-[var(--color-gray-800)] mb-1">
                        {testimonial.name}
                      </h4>
                    )}
                    <p className="text-sm text-[var(--color-gray-700)] mb-4">
                      {testimonial.specialty}
                    </p>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna 3 */}
            <div className="relative overflow-hidden h-screen hidden lg:block">
              {/* Efeito de esfumado superior */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--color-primary-50)] to-transparent z-10 pointer-events-none"></div>
              {/* Efeito de esfumado inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-primary-50)] to-transparent z-10 pointer-events-none"></div>
              <div className="flex flex-col animate-scroll-up-slow animation-delay-slow-3000">
                {testimonials.slice(6, 9).map((testimonial) => (
                  <div key={`col3-first-${testimonial.id}`} className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-6 m-4">
                    {testimonial.name && (
                      <h4 className="font-bold text-[var(--color-gray-800)] mb-1">
                        {testimonial.name}
                      </h4>
                    )}
                    <p className="text-sm text-[var(--color-gray-700)] mb-4">
                      {testimonial.specialty}
                    </p>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                ))}
              </div>
                <div className="flex flex-col animate-scroll-up-slow animation-delay-slow-18000">
                {testimonials.slice(6, 9).map((testimonial) => (
                  <div key={`col3-second-${testimonial.id}`} className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-6 m-4 border border-gray-100">
                    {testimonial.name && (
                      <h4 className="font-bold text-[var(--color-gray-800)] mb-1">
                        {testimonial.name}
                      </h4>
                    )}
                    <p className="text-sm text-[var(--color-gray-700)] mb-4">
                      {testimonial.specialty}
                    </p>
                    <p className="leading-relaxed text-[var(--color-gray-600)]">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componente FAQ */}
      <FAQ />

      {/* Componente Contact */}
      <Contact />
    </div>
  );
};

export default Home; 
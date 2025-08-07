import imgServicos from '../assets/images/img_servico.webp';
import imgTelemedicina from '../assets/images/Telemedicina_e_Plantao.webp';
import imgCarreira from '../assets/images/carreira_na_gestao.webp';
import imgServico from '../assets/images/img_servico.webp';
import imgSobreNos from '../assets/images/img_sobrenos.avif';
import ServiceSection from '../components/ServiceSection';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Servicos = () => {
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
                <span className="text-[var(--color-gray-800)]">Serviços para</span>
                <br />
                <span className="text-[var(--color-primary)]">Médicos(as)!</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-gray-700)] leading-relaxed">
                Unimos oportunidades de carreira, tecnologia de ponta, inteligência emocional e segurança jurídica.
              </p>
            </div>

            {/* Coluna Direita - Imagem */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img 
                src={imgServicos}
                alt="Médico com prateleiras de serviços"
                className="w-full max-w-lg aspect-square object-cover rounded-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Segunda Seção - Serviços */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Botão "Venha Conosco!" */}
          <div className="text-center mb-8">
            <button className="px-6 py-2 rounded-lg font-medium text-sm transition-colors duration-200 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)]">
              Venha Conosco!
            </button>
          </div>

          {/* Título Principal */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-gray-800)]">
              Fazemos diferente,
              <br />
              porque pensamos
              <br />
              diferente.
            </h2>
          </div>

          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Telemedicina e Plantão */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={imgTelemedicina}
                  alt="Telemedicina e Plantão"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-800)] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    Telemedicina e Plantão
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2: Seguro e Defesa Médica */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={imgServico}
                  alt="Seguro e Defesa Médica"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-800)] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    Seguro e Defesa Médica
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3: Tecnologia Médica */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={imgSobreNos}
                  alt="Tecnologia Médica"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-800)] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    Tecnologia Médica
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4: Carreira na Gestão */}
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={imgCarreira}
                  alt="Carreira na Gestão"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-800)] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    Carreira na Gestão
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

             {/* Terceira Seção - Telemedicina e Plantão */}
       <ServiceSection
         image={imgTelemedicina}
         imageAlt="Médica em teleconsulta com laptop e despertador"
         title="Telemedicina e Plantão"
         description="Atue com tranquilidade em equipes organizadas, protocolos bem definidos e suporte contínuo. Da consulta por telemedicina ao plantão presencial, oferecemos estrutura, coordenação e respaldo para que você possa focar no que faz de melhor: cuidar de pessoas."
         blocks={[
           {
             title: "Médicos de Excelência, Atendimento com Resultado",
             description: "Nossas equipes de telemedicina e plantões presenciais são formadas por médicos experientes, treinados para atuar com resolutividade, empatia e domínio técnico. Trabalhamos com protocolos clínicos validados para garantir um cuidado seguro e eficiente — mesmo à distância."
           },
           {
             title: "Tecnologia que Facilita, Coordenação que Apoia",
             description: "Cada plantão e cada consulta online contam com o suporte de uma coordenação assistencial ativa, que acompanha indicadores, resolve demandas e atua junto com os médicos. Integrado à tecnologia de IA e prontuário por voz, o sistema permite mais foco no paciente e menos tempo com burocracia."
           },
           {
             title: "Flexibilidade e Carreira em Movimento",
             description: "Você escolhe sua carga horária e tipo de atuação: presencial, híbrida ou 100% online. Valorizamos sua autonomia e oferecemos estrutura para que você cresça profissionalmente com segurança, apoio técnico e tranquilidade jurídica."
           }
         ]}
       />

       {/* Quarta Seção - Seguro e Defesa Médica */}
       <ServiceSection
         image={imgServico}
         imageAlt="Seguro e Defesa Médica"
         title="Seguro e Defesa Médica"
         description="Proteção jurídica e tecnológica para sua prática médica. Combinamos inteligência artificial, expertise jurídica especializada e seguro médico personalizado para que você possa exercer sua profissão com tranquilidade e segurança."
         imagePosition="right"
         blocks={[
           {
             title: "Software Inteligente que Te Protege",
             description: "Oferecemos acesso ao nosso software de IA, que transcreve a consulta em tempo real e gera um registro clínico bem escrito, estruturado e juridicamente seguro. Você cuida do paciente — o Splitcare cuida da documentação."
           },
           {
             title: "Defesa com Quem Entende de Medicina",
             description: "Parceria com os melhores escritórios especializados em Direito Médico do Brasil. Nossa atuação conjunta garante estratégia jurídica sólida, com base técnica, pericial e linguagem clínica precisa."
           },
           {
             title: "Seguro Médico Descomplicado e Eficiente",
             description: "Um seguro que realmente entende a sua rotina. Cobre o que importa, sem letras miúdas, com acesso rápido à nossa equipe técnica, segunda opinião e acompanhamento completo em caso de processo."
           }
         ]}
       />

       {/* Quinta Seção - Tecnologia Médica */}
       <ServiceSection
         image={imgSobreNos}
         imageAlt="Tecnologia Médica"
         title="Tecnologia Médica"
         description="Ganhe tempo e segurança com soluções que trabalham por você. Com nossa IA de transcrição, você fala com o paciente e o sistema escreve por você. Menos digitação, mais presença, mais proteção. Tecnologia que simplifica e fortalece sua prática clínica."
         blocks={[
           {
             title: "Menos Teclado, Mais Tempo pra Viver",
             description: "Nosso Software conta com inteligência artificial escuta a consulta e preenche automaticamente o registro clínico. Você fala, ele escreve — e você ganha horas no seu dia."
           },
           {
             title: "Fácil de Usar. Difícil de Abrir Mão.",
             description: "Tecnologia intuitiva, com suporte humano de verdade. Sem curvas de aprendizado dolorosas: em poucos atendimentos, você já sente a diferença na rotina e na leveza."
           },
           {
             title: "Pensado pra Te Proteger, Não Só Pra Te Ajudar",
             description: "Enquanto você atende, nossa IA organiza as informações em linguagem clínica e jurídica adequada. O resultado? Um prontuário tecnicamente impecável e juridicamente defensável, caso precise."
           }
         ]}
       />

               {/* Sexta Seção - Carreira na Gestão */}
        <ServiceSection
          image={imgCarreira}
          imageAlt="Carreira na Gestão"
          title="Carreira na Gestão"
          description="Seja protagonista da sua carreira com novas oportunidades. Atuamos junto aos melhores profissionais e ajudamos você a crescer com propósito, autonomia e suporte. Na Nova Gestão Médica, sua trajetória é valorizada em todas as etapas."
          imagePosition="right"
          blocks={[
            {
              title: "Médico Também Pode Ser Gestor",
              description: "Acreditamos que quem entende da ponta tem muito a contribuir na liderança. Por isso, apoiamos médicos que desejam ocupar posições estratégicas e coordenar equipes com excelência."
            },
            {
              title: "Você na Gestão. A Gente no Suporte.",
              description: "Se quiser assumir um papel de liderança, você não estará sozinho. Damos o suporte técnico, operacional e estratégico necessário para que você cresça com segurança e autoridade."
            },
            {
              title: "Um Novo Jeito de Fazer Gestão Médica",
              description: "Esqueça os modelos engessados. Aqui, você participa das decisões, influencia processos e constrói com a gente uma gestão mais humana, clínica e próxima dos colegas."
            }
          ]}
        />

        {/* Seção FAQ */}
        <FAQ />

        {/* Seção Contato */}
        <Contact />
    </div>
  );
};

export default Servicos;

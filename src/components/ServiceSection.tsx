import ServiceBlock from './ServiceBlock';

interface ServiceSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  blocks: {
    title: string;
    description: string;
  }[];
  imagePosition?: 'left' | 'right';
}

const ServiceSection = ({ 
  image, 
  imageAlt, 
  title, 
  description, 
  blocks,
  imagePosition = 'left'
}: ServiceSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[var(--color-primary-50)] to-white relative">
      {/* Background com padrão de pontos na parte inferior */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-32 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-primary)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-gray-800)]">
            {title}
          </h2>
          <p className="text-lg md:text-xl mt-8 leading-relaxed text-[var(--color-gray-700)]">
            {description}
          </p>
        </div>

        {/* Conteúdo Principal - Duas Colunas */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Coluna da Imagem */}
          <div className={`flex justify-center ${imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <img 
              src={image}
              alt={imageAlt}
              className="w-full max-w-lg h-auto rounded-lg"
            />
          </div>

          {/* Coluna dos Blocos de Texto */}
          <div className="flex-1 space-y-8">
            {blocks.map((block, index) => (
              <ServiceBlock
                key={index}
                variant="primary"
                title={block.title}
                description={block.description}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

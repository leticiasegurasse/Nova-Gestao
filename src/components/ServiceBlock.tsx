interface ServiceBlockProps {
  title: string;
  description: string;
  variant?: 'primary' | 'default';
}

const ServiceBlock = ({ title, description, variant = 'default' }: ServiceBlockProps) => {
  const isPrimary = variant === 'primary';
  
  const titleColor = isPrimary 
    ? 'text-[var(--color-primary-800)]' 
    : 'text-[var(--color-gray-800)]';
    
  const descriptionColor = isPrimary 
    ? 'text-[var(--color-primary-600)]' 
    : 'text-[var(--color-gray-600)]';
    
  const descriptionSize = isPrimary 
    ? 'text-sm' 
    : 'text-lg';

  if (isPrimary) {
    return (
      <div className="relative bg-white rounded-lg p-6 border border-[var(--color-primary-200)] overflow-hidden">
        {/* Efeito de mancha azul */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-100)] rounded-full opacity-60 transform translate-x-16 -translate-y-16 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-primary-200)] rounded-full opacity-40 transform -translate-x-12 translate-y-12 blur-xl"></div>
        
        <div className="relative z-10">
          <h3 className={`text-2xl font-bold ${titleColor} mb-4`}>
            {title}
          </h3>
          <p className={`${descriptionSize} leading-relaxed ${descriptionColor}`}>
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className={`text-2xl font-bold ${titleColor} mb-4`}>
        {title}
      </h3>
      <p className={`${descriptionSize} leading-relaxed ${descriptionColor}`}>
        {description}
      </p>
    </div>
  );
};

export default ServiceBlock;

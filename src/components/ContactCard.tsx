import { ArrowRight } from 'lucide-react';
import type { ComponentType } from 'react';

interface ContactCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  variant?: 'primary' | 'white';
}

const ContactCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  onClick, 
  variant = 'white' 
}: ContactCardProps) => {
  const cardStyles = variant === 'primary' 
    ? 'bg-[var(--color-primary-50)] rounded-lg p-6 border border-[var(--color-primary-200)]'
    : 'bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center';

  const contentStyles = variant === 'primary'
    ? 'flex flex-col space-y-4'
    : 'flex flex-col items-center space-y-4';

  return (
    <div className={cardStyles}>
      <div className={contentStyles}>
        <div className="flex-shrink-0">
          <Icon className="h-8 w-8 text-[var(--color-primary)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-[var(--color-gray-800)] mb-2">
            {title}
          </h3>
          <p className="text-sm text-[var(--color-gray-600)] mb-4">
            {description}
          </p>
          <button 
            onClick={onClick}
            className="inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)] transition-colors duration-200"
          >
            {buttonText}
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard; 
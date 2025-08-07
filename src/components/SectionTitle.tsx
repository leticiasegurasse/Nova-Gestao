interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className = '' }: SectionTitleProps) => {
  return (
    <h3 className={`inline-flex items-center px-4 py-2 border border-[var(--color-primary)] rounded-lg text-sm font-medium text-[var(--color-primary)] mb-6 ${className}`}>
      {title}
    </h3>
  );
};

export default SectionTitle; 
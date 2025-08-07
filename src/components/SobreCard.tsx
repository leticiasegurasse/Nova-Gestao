interface SobreCardProps {
  image: string;
  title: string;
  description: string;
  alt: string;
}

const SobreCard = ({ image, title, description, alt }: SobreCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="flex-shrink-0">
          <img 
            src={image}
            alt={alt}
            className="w-28 h-28 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-[var(--color-gray-800)]">
            {title}
          </h3>
          <p className="leading-relaxed text-[var(--color-gray-600)]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreCard;

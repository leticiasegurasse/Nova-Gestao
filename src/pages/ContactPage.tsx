import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import ContactCard from '../components/ContactCard';
import SectionTitle from '../components/SectionTitle';
import Contact from '../components/Contact';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Formata a mensagem para WhatsApp
    const whatsappMessage = `*Nova Mensagem de Contato*
    
*Nome:* ${name}
*E-mail:* ${email}
*Mensagem:* ${message}`;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Abre o WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/5511959327581?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Primeira Seção - Hero com Formulário */}
      <section className="relative flex items-center py-10">
        {/* Background com gradiente e padrão de pontos */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-50)] to-[var(--color-primary-100)]">
          {/* Padrão de pontos sutil */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute inset-0 bg-[radial-gradient(circle,var(--color-primary)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Coluna Esquerda - Texto */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Título */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-gray-800)]">
                  Nova Gestão
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-primary)]">
                  Médica
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed text-[var(--color-gray-700)]">
                Fazemos diferente, porque pensamos diferente.
              </p>
            </div>

            {/* Coluna Direita - Formulário de Contato */}
            <div className="flex justify-center">
              <div className="bg-white rounded-xl shadow-lg p-8 w-full">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Campo Nome */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-gray-700)] mb-2">
                      Name
                    </label>
                       <input
                       type="text"
                       id="name"
                       name="name"
                       placeholder="Digite seu nome"
                       className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[var(--color-primary-50)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                     />
                  </div>

                  {/* Campo Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-gray-700)] mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Digite seu e-mail"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[var(--color-primary-50)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                    />
                  </div>

                  {/* Campo Mensagem */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-gray-700)] mb-2">
                      Tell us about your problem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Conte-nos sobre seu problema"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[var(--color-primary-50)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Botão de Envio */}
                    <button
                     type="submit"
                     className="w-full px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200 text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)]"
                   >
                     Enviar para WhatsApp
                   </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segunda Seção - Mapa e Informações de Contato */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <SectionTitle title="Venha Conosco" />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-gray-800)] mb-4">
              Venha nos visitar.
            </h2>
            <p className="text-lg text-[var(--color-gray-600)] max-w-2xl mx-auto">
              Pra estar ao lado de quem está na linha de frente. Com estratégia, com escuta e com coragem de fazer diferente.
            </p>
          </div>

          {/* Conteúdo - Mapa e Cards */}
          <div className="w-full flex justify-between gap-8">
            {/* Coluna Esquerda - Mapa */}
            <div className="w-1/2 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890123!2d-46.633333!3d-23.558333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ceb1eb771f%3A0xe904f6a669cd8bbe!2sAv.%20Paulista%2C%201636%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nova Gestão Médica - Localização"
              ></iframe>
            </div>

            {/* Coluna Direita - Cards de Informações */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Card Localização */}
               <ContactCard
                 icon={MapPin}
                 title="Localização"
                 description="Av. Paulista, 1636 - Sala, 1504 - São Paulo"
                 buttonText="Abrir Maps"
                 onClick={() => window.open('https://maps.google.com/?q=Av.+Paulista,+1636+-+Sala,+1504+-+São+Paulo', '_blank')}
                 variant="primary"
               />

               {/* Card Telefone */}
               <ContactCard
                 icon={Phone}
                 title="Telefone"
                 description="+55 11 959 327 581"
                 buttonText="Enviar Mensagem"
                 onClick={() => window.open('https://wa.me/5511959327581', '_blank')}
                 variant="primary"
               />

               {/* Card E-mail */}
               <ContactCard
                 icon={Mail}
                 title="E-mail"
                 description="admin@novagestaomedica.com"
                 buttonText="Abrir Email"
                 onClick={() => window.open('mailto:admin@novagestaomedica.com', '_blank')}
                 variant="primary"
               />

               {/* Card Website */}
               <ContactCard
                 icon={MessageCircle}
                 title="Website"
                 description="Nova Gestão Médica"
                 buttonText="Abrir Site"
                 onClick={() => window.open('/', '_blank')}
                 variant="primary"
               />
             </div>
                     </div>
         </div>
       </section>

       {/* Terceira Seção - Componente Contact */}
       <Contact />
     </div>
   );
 };

export default ContactPage; 
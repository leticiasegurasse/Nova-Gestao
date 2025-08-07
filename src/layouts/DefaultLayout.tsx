// Layout padrão para as páginas
import type { ReactNode } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  // Força scroll para o topo quando a rota muda
  useScrollToTop();

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      <Header />
      <main className="w-full mt-16 md:mt-20 mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout; 
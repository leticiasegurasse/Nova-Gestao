// Definição das rotas principais
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import { ROUTES } from '../config/routes';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* Rotas com layout padrão */}
      <Route path={ROUTES.HOME} element={
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      } />
      
      {/* Rota 404 - Sem layout para ter design próprio */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes; 
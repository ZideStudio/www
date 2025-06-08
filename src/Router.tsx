import { Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Home />} />
    <Route path="/project/:slug" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

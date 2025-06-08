import type React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Home />} />
    <Route path="/project/:slug" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

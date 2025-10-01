import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import HomePage from '../pages/HomePage';

// Navigation component
export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {/* Fallback route for undefined paths */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

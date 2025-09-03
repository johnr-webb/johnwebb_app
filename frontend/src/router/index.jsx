import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

// Navigation component
export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

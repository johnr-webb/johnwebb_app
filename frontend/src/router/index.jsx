import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UsersPage from '../features/users/pages/UsersPage';
import PostsPage from '../features/posts/pages/PostsPage';
import AboutPage from '../pages/AboutPage';

// Route configuration
export const routes = [
  {
    path: '/',
    element: <HomePage />,
    label: 'Home',
    inNav: false,
  },
  {
    path: '/users',
    element: <UsersPage />,
    label: 'Users',
    inNav: false,
  },
  {
    path: '/posts',
    element: <PostsPage />,
    label: 'Posts',
    inNav: false,
  },
  {
    path: '/about',
    element: <AboutPage />,
    label: 'About',
    inNav: true,
  },
];

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

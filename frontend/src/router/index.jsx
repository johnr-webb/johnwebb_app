import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UsersPage from '../features/users/pages/UsersPage';
import PostsPage from '../features/posts/pages/PostsPage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ThoughtsPage from '../pages/ThoughtsPage';
import ComplaintsPage from '../pages/ComplaintsPage';

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
    path: '/projects',
    element: <ProjectsPage />,
    label: 'Projects',
    inNav: true,
  },
  {
    path: '/my-thoughts',
    element: <ThoughtsPage />,
    label: 'My Thoughts',
    inNav: true,
  },
  {
    path: '/complaints',
    element: <ComplaintsPage />,
    label: 'Complaints',
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

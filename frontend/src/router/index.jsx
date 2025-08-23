import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UsersPage from '../features/users/pages/UsersPage';
import PostsPage from '../features/posts/pages/PostsPage';
import CalendarPage from '../features/calendar/pages/CalendarPage';

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
    inNav: true,
  },
  {
    path: '/posts',
    element: <PostsPage />,
    label: 'Posts',
    inNav: true,
  },
  {
    path: '/calendar',
    element: <CalendarPage />,
    label: 'Calendar',
    inNav: true,
  }
];

// Navigation component
export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};
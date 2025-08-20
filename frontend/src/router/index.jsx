import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/home/pages/HomePage';
import UsersPage from '../features/users/pages/UsersPage';
import PostsPage from '../features/posts/pages/PostsPage';

import { useEffect } from 'react';

console.log('Router initializing');

// Route configuration
export const routes = [
  {
    path: '/users',
    element: <UsersPage />,
    label: 'Users'
  },
  {
    path: '/posts',
    element: <PostsPage />,
    label: 'Posts'
  }
];

// Navigation component
export const AppRoutes = () => {
  console.log('AppRoutes rendering with routes:', routes);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
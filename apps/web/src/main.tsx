import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CharacterProvider } from './contexts/CharacterContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import App from './App';
import Dashboard from './app/routes/index';
import Session from './app/routes/session';
import Grimoire from './app/routes/grimoire';
import Character from './app/routes/character';
import Library from './app/routes/library';
import Lesson from './app/routes/lesson';
import Shop from './app/routes/shop';
import Auth from './app/routes/auth';
import './styles/globals.css';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'session',
        element: <Session />,
      },
      {
        path: 'grimoire',
        element: <Grimoire />,
      },
      {
        path: 'character',
        element: <Character />,
      },
      {
        path: 'library',
        element: <Library />,
      },
      {
        path: 'library/lesson/:lessonId',
        element: <Lesson />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <CharacterProvider>
        <RouterProvider router={router} />
      </CharacterProvider>
    </AuthProvider>
  </React.StrictMode>
);

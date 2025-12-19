import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import './global.css';
import { HelmetProvider } from 'react-helmet-async';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import NotFound from './pages/NotFound';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultNotFoundComponent: () => <NotFound />,
});

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router;
  }
}

const container = document.getElementById('root')!;
createRoot(container).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

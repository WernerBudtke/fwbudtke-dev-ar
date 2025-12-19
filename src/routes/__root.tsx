import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { withLayout } from '../components/withLayout';
import { Suspense } from 'react';

const RootRouteComponent = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center gap-4">
          <p>Loading...</p>
          <span className="loading loading-spinner text-primary"></span>
        </div>
      }
    >
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </Suspense>
  );
};

export const Route = createRootRoute({
  component: withLayout(RootRouteComponent),
});

import { AnyRoute, createRoute } from '@tanstack/react-router';

import Home from '@/feature/home/Home';
import { routeTree } from '@/routeTree.gen';

export const Route: AnyRoute = createRoute({
  getParentRoute: () => routeTree,
  path: '/home',
  component: Home
});

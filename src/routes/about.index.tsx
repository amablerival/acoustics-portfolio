import { AnyRoute, createRoute } from '@tanstack/react-router'

import { routeTree } from '@/routeTree.gen'

import About from '../feature/about/About'

export const Route: AnyRoute = createRoute({
  getParentRoute: () => routeTree,
  path: '/about',
  component: About
})

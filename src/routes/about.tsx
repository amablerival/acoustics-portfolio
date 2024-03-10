import { AnyRoute, createRoute } from '@tanstack/react-router'

import { routeTree } from '@/routeTree.gen'

import About from '../feature/about/about.component'

export const Route: AnyRoute = createRoute({
  getParentRoute: () => routeTree,
  path: '/about',
  component: About
})

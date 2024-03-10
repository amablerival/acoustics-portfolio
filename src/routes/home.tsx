import { AnyRoute, createRoute } from '@tanstack/react-router'

import { routeTree } from '@/routeTree.gen'

import Home from '../feature/home/home.component'

export const Route: AnyRoute = createRoute({
  getParentRoute: () => routeTree,
  path: '/home',
  component: Home
})

// import {
//   AnyRoute,
//   createLazyFileRoute,
//   LazyRoute
// } from '@tanstack/react-router'

// import Home from '../feature/home/home.component'

// const homeRoute: LazyRoute<AnyRoute> = createLazyFileRoute('/home')({
//   component: Home
// })

// export default homeRoute

/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as PlaygroundIndexImport } from './routes/playground.index'
import { Route as HomeIndexImport } from './routes/home.index'
import { Route as AboutIndexImport } from './routes/about.index'
import { Route as DetailsItemIdImport } from './routes/details.$itemId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PlaygroundIndexRoute = PlaygroundIndexImport.update({
  path: '/playground/',
  getParentRoute: () => rootRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  path: '/home/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const DetailsItemIdRoute = DetailsItemIdImport.update({
  path: '/details/$itemId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/details/$itemId': {
      id: '/details/$itemId'
      path: '/details/$itemId'
      fullPath: '/details/$itemId'
      preLoaderRoute: typeof DetailsItemIdImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/home/': {
      id: '/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof rootRoute
    }
    '/playground/': {
      id: '/playground/'
      path: '/playground'
      fullPath: '/playground'
      preLoaderRoute: typeof PlaygroundIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  DetailsItemIdRoute,
  AboutIndexRoute,
  HomeIndexRoute,
  PlaygroundIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/details/$itemId",
        "/about/",
        "/home/",
        "/playground/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/details/$itemId": {
      "filePath": "details.$itemId.tsx"
    },
    "/about/": {
      "filePath": "about.index.tsx"
    },
    "/home/": {
      "filePath": "home.index.tsx"
    },
    "/playground/": {
      "filePath": "playground.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

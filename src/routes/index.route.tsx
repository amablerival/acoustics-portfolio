import { AnyRoute, createFileRoute, redirect } from '@tanstack/react-router'

import { Route as homeRoute } from './home.route'

export const Route: AnyRoute = createFileRoute('/')({
  loader: () => redirect(homeRoute)
})

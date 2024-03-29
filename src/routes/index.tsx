import { AnyRoute, createFileRoute, redirect } from '@tanstack/react-router'

export const Route: AnyRoute = createFileRoute('/')({
  loader: async () => {
    redirect({ to: '/home' })
  }
})

import { createLazyFileRoute } from '@tanstack/react-router'

import Home from '@/feature/home/home.component'

export const Route = createLazyFileRoute('/')({
  component: Home
})

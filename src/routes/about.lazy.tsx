import { createLazyFileRoute } from '@tanstack/react-router'

import About from '@/feature/home/home.component'

export const Route = createLazyFileRoute('/about')({
  component: About
})

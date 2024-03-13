import { createLazyFileRoute } from '@tanstack/react-router'

import About from '@/feature/about/about.component'

export const Route = createLazyFileRoute('/about')({
  component: About
})

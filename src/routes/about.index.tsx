import { AnyRoute, createFileRoute } from '@tanstack/react-router'

import About from '../feature/about/About'

export const Route: AnyRoute = createFileRoute('/about/')({
  component: () => <About />
})

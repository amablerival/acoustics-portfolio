import { createFileRoute } from '@tanstack/react-router'

import Playground from '@/feature/playground/Playground'

export const Route = createFileRoute('/playground/')({
  component: () => <Playground />
})

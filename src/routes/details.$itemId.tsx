import { createFileRoute } from '@tanstack/react-router'

import Details from '@/feature/details/details.component'

export const Route = createFileRoute('/details/$itemId')({
  component: Details
})

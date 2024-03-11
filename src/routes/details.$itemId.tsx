import { createFileRoute } from '@tanstack/react-router'

import Details from '@/feature/details/Details'

export const Route = createFileRoute('/details/$itemId')({
  component: Details
})

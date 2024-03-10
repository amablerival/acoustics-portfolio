import { createRootRoute } from '@tanstack/react-router'

import App from '@/core/App'

export const Route = createRootRoute({
  component: () => <App />
})

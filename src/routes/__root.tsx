import { createRootRoute, RootRoute } from '@tanstack/react-router'

import App from '@/core/App'

export const Route: RootRoute = createRootRoute({
  component: () => <App />
})

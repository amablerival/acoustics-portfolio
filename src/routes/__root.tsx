import { createRootRoute } from '@tanstack/react-router';

import App from '@/core/App';

const NotFound = () => <div> NOT FOUND </div>;

export const Route = createRootRoute({
  component: () => <App />,
  notFoundComponent: () => <NotFound />
});

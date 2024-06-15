import { AnyRoute, createFileRoute } from '@tanstack/react-router';

import Home from '@/feature/home/Home';
export const Route: AnyRoute = createFileRoute('/home/')({
  component: () => <Home />
});

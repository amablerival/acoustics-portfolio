import Materials from '@/feature/materials/Materials';
import { AnyRoute, createFileRoute } from '@tanstack/react-router';

export const Route: AnyRoute = createFileRoute('/materiales/')({
  component: () => <Materials />
});

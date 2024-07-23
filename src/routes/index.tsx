import { AnyRoute, createFileRoute, redirect } from '@tanstack/react-router';

export const Route: AnyRoute = createFileRoute('/')({
  beforeLoad: () => {
    redirect({
      to: '/home',
      throw: true
    });
  }
});

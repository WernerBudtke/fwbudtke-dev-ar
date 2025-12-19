import { createFileRoute } from '@tanstack/react-router';
import Fun from '../pages/Fun';

export const Route = createFileRoute('/fun')({
  component: Fun,
});

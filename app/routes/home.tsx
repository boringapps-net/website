import { PortfolioView } from '../components/PortfolioView';
import type { Route } from './+types/home';

export const meta: Route.MetaFunction = () => [
  { title: 'BoringApps.net — Unsexy (actually useful) utility apps' },
  {
    name: 'description',
    content:
      'On-device utilities for macOS, iOS, and Android. Built by The IT Dept × Curiola.',
  },
];

export default function Home() {
  return <PortfolioView />;
}

import { LegalView } from '../components/LegalView';
import type { Route } from './+types/privacy';

export const meta: Route.MetaFunction = () => [
  { title: 'Privacy Policy — BoringApps.net' },
];

export default function Privacy() {
  return <LegalView tab="privacy" />;
}

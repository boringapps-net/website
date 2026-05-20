import { LegalView } from '../components/LegalView';
import type { Route } from './+types/terms';

export const meta: Route.MetaFunction = () => [
  { title: 'Terms of Service — BoringApps.net' },
];

export default function Terms() {
  return <LegalView tab="terms" />;
}

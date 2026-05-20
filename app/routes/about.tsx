import { AboutView } from '../components/AboutView';
import type { Route } from './+types/about';

export const meta: Route.MetaFunction = () => [
  { title: 'About — BoringApps.net' },
  {
    name: 'description',
    content:
      'BoringApps.net is a joint venture between The IT Dept Pty Ltd and CURIOLA PTY LTD building on-device utilities.',
  },
];

export default function About() {
  return <AboutView />;
}

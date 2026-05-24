import { data } from 'react-router';
import { AppLegalLayout, LegalSection } from '../components/AppLegalLayout';
import { APPS } from '../data/apps';
import type { Route } from './+types/app-privacy';

export async function loader({ params }: Route.LoaderArgs) {
  const app = APPS.find((entry) => entry.id === params.id);
  if (!app) {
    throw data(`No app with id "${params.id}"`, { status: 404 });
  }
  if (!app.privacyPolicy) {
    throw data(`${app.name} does not have a privacy policy hosted on this site.`, { status: 404 });
  }
  return { app, policy: app.privacyPolicy };
}

export const meta: Route.MetaFunction = ({ data }) => {
  if (!data) return [{ title: 'Privacy Policy — BoringApps.net' }];
  return [
    { title: `${data.app.name} Privacy Policy — BoringApps.net` },
    { name: 'description', content: `Privacy policy for ${data.app.name}, published by BoringApps.net.` },
  ];
};

export default function AppPrivacy({ loaderData }: Route.ComponentProps) {
  const { app, policy } = loaderData;
  return (
    <AppLegalLayout app={app} badge="Privacy Policy" title={policy.title} lastUpdated={policy.lastUpdated}>
      {policy.sections.map((section) => (
        <LegalSection key={section.heading} heading={section.heading} content={section.content} />
      ))}
    </AppLegalLayout>
  );
}

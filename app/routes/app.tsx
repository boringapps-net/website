import { data } from 'react-router';
import { AppDetail } from '../components/AppDetail';
import { APPS } from '../data/apps';
import type { Route } from './+types/app';

export async function loader({ params }: Route.LoaderArgs) {
  const app = APPS.find((entry) => entry.id === params.id);
  if (!app) {
    throw data(`No app with id "${params.id}"`, { status: 404 });
  }
  return { app };
}

export const meta: Route.MetaFunction = ({ data }) => {
  if (!data) {
    return [{ title: 'App not found — BoringApps.net' }];
  }
  return [
    { title: `${data.app.name} — BoringApps.net` },
    { name: 'description', content: data.app.tagline },
  ];
};

export default function AppRoute({ loaderData }: Route.ComponentProps) {
  return <AppDetail app={loaderData.app} />;
}

import type { Config } from '@react-router/dev/config';
import { APPS } from './app/data/apps';

const appRoutes = APPS.flatMap((app) => {
  const paths = [`/apps/${app.id}`];
  if (app.privacyPolicy) paths.push(`/apps/${app.id}/privacy`);
  if (app.support) paths.push(`/apps/${app.id}/support`);
  return paths;
});

export default {
  ssr: false,
  prerender: ['/', '/about', '/privacy', '/terms', ...appRoutes],
} satisfies Config;

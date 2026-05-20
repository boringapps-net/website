import type { Config } from '@react-router/dev/config';
import { APPS } from './app/data/apps';

export default {
  ssr: false,
  prerender: [
    '/',
    '/about',
    '/privacy',
    '/terms',
    ...APPS.map((app) => `/apps/${app.id}`),
  ],
} satisfies Config;

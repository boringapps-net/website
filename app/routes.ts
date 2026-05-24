import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('apps/:id', 'routes/app.tsx'),
  route('apps/:id/privacy', 'routes/app-privacy.tsx'),
  route('apps/:id/support', 'routes/app-support.tsx'),
  route('about', 'routes/about.tsx'),
  route('privacy', 'routes/privacy.tsx'),
  route('terms', 'routes/terms.tsx'),
] satisfies RouteConfig;

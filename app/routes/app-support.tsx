import { data } from 'react-router';
import { Github, Mail } from 'lucide-react';
import { AppLegalLayout, LegalSection } from '../components/AppLegalLayout';
import { APPS } from '../data/apps';
import type { Route } from './+types/app-support';

export async function loader({ params }: Route.LoaderArgs) {
  const app = APPS.find((entry) => entry.id === params.id);
  if (!app) {
    throw data(`No app with id "${params.id}"`, { status: 404 });
  }
  if (!app.support) {
    throw data(`${app.name} does not have a support page hosted on this site.`, { status: 404 });
  }
  return { app, support: app.support };
}

export const meta: Route.MetaFunction = ({ data }) => {
  if (!data) return [{ title: 'Support — BoringApps.net' }];
  return [
    { title: `${data.app.name} Support — BoringApps.net` },
    { name: 'description', content: `Support and contact information for ${data.app.name}.` },
  ];
};

export default function AppSupport({ loaderData }: Route.ComponentProps) {
  const { app, support } = loaderData;
  return (
    <AppLegalLayout app={app} badge="Support" title={`${app.name} Support`}>
      <p className="text-sm md:text-base text-gray-700 leading-relaxed font-sans">{support.intro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose">
        <a
          href={`mailto:${support.contactEmail}`}
          className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#E63946] text-white font-bold border-2 border-[#1A1A1A] px-4 py-3 text-xs font-mono transition-colors"
        >
          <Mail className="w-4 h-4" /> {support.contactEmail}
        </a>
        {support.sourceUrl && (
          <a
            href={support.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#1A1A1A] font-bold border-2 border-[#1A1A1A] px-4 py-3 text-xs font-mono transition-colors"
          >
            <Github className="w-4 h-4" /> Source &amp; issue tracker
          </a>
        )}
      </div>

      {support.sections.map((section) => (
        <LegalSection key={section.heading} heading={section.heading} content={section.content} />
      ))}
    </AppLegalLayout>
  );
}

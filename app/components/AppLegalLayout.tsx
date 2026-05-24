import { Link } from 'react-router';
import { ArrowLeft, Landmark } from 'lucide-react';
import type { AppMetadata } from '../types';

interface AppLegalLayoutProps {
  app: AppMetadata;
  badge: string;
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function AppLegalLayout({ app, badge, title, lastUpdated, children }: AppLegalLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 font-sans animate-fade-in text-[#1A1A1A]">
      <div>
        <Link
          to={`/apps/${app.id}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1A1A1A] hover:text-[#E63946] border-2 border-[#1A1A1A] px-4 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-150 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-[#E63946] group-hover:-translate-x-1 transition duration-200" />
          Back to {app.name}
        </Link>
      </div>

      <div className="space-y-3.5 border-b-2 border-[#1A1A1A] pb-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-[#1A1A1A] text-xs text-[#1A1A1A] font-mono font-bold select-none shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
          <div className="w-7 h-7 bg-white flex items-center justify-center border border-[#1A1A1A] rounded-none overflow-hidden">
            <img src={app.iconImage} alt="" className="w-full h-full object-cover" />
          </div>
          <span>
            <Landmark className="w-3 h-3 inline-block mr-1 text-[#E63946]" />
            {badge}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-none pt-2">
          {title}
        </h1>
        {lastUpdated && (
          <p className="text-xs font-mono text-gray-500 uppercase font-black">Last updated: {lastUpdated}</p>
        )}
      </div>

      <div className="bg-white border-2 border-[#1A1A1A] rounded-none p-6 md:p-10 space-y-8 select-text shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        {children}
      </div>
    </div>
  );
}

export function LegalSection({
  heading,
  content,
}: {
  heading: string;
  content: string | string[];
}) {
  return (
    <div className="space-y-3.5">
      <h3 className="text-base font-black text-[#1A1A1A] font-sans tracking-tight border-l-4 border-[#E63946] pl-3 uppercase">
        {heading}
      </h3>
      {Array.isArray(content) ? (
        <div className="space-y-2.5 text-xs md:text-sm text-gray-700 leading-relaxed font-sans">
          {content.map((p, idx) => (
            <p key={idx} className="whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-sans whitespace-pre-line">{content}</p>
      )}
    </div>
  );
}

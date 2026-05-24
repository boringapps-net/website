import { NavLink } from 'react-router';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from '../data/legal';
import { ShieldCheck, Scale, Landmark } from 'lucide-react';

interface LegalViewProps {
  tab: 'privacy' | 'terms';
}

export function LegalView({ tab }: LegalViewProps) {
  const doc = tab === 'privacy' ? PRIVACY_POLICY : TERMS_OF_SERVICE;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 font-sans animate-fade-in text-[#1A1A1A]">
      <div className="space-y-3.5 border-b-2 border-[#1A1A1A] pb-6 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border-2 border-[#1A1A1A] text-xs text-[#1A1A1A] font-mono font-bold select-none shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
          <Landmark className="w-3.5 h-3.5 text-[#E63946]" /> Legal
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-none pt-2">
          {doc.title}
        </h1>
        <p className="text-xs font-mono text-gray-500 uppercase font-black">
          Last updated: {doc.lastUpdated} | Governed by NSW, Australia
        </p>
      </div>

      <div className="flex flex-wrap gap-2 p-1 bg-white border-2 border-[#1A1A1A] font-mono text-xs select-none rounded-none">
        <NavLink
          to="/privacy"
          className={({ isActive }) =>
            `flex-1 min-w-[120px] py-3 px-4 rounded-none font-bold flex items-center justify-center gap-2 transition cursor-pointer border-2 ${
              isActive
                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                : 'text-gray-500 border-transparent hover:border-[#1A1A1A] hover:bg-gray-100'
            }`
          }
        >
          <ShieldCheck className="w-4 h-4" /> Privacy Policy
        </NavLink>
        <NavLink
          to="/terms"
          className={({ isActive }) =>
            `flex-1 min-w-[120px] py-3 px-4 rounded-none font-bold flex items-center justify-center gap-2 transition cursor-pointer border-2 ${
              isActive
                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                : 'text-gray-500 border-transparent hover:border-[#1A1A1A] hover:bg-gray-100'
            }`
          }
        >
          <Scale className="w-4 h-4" /> Terms of Service
        </NavLink>
      </div>

      <div className="bg-white border-2 border-[#1A1A1A] rounded-none p-6 md:p-10 space-y-8 select-text shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        <div className="space-y-8 text-[#1A1A1A]">
          {doc.sections.map((sect) => (
            <div key={sect.heading} className="space-y-3.5">
              <h3 className="text-base font-black text-[#1A1A1A] font-sans tracking-tight border-l-4 border-[#E63946] pl-3 uppercase">
                {sect.heading}
              </h3>
              {Array.isArray(sect.content) ? (
                <div className="space-y-2.5 text-xs md:text-sm text-gray-700 leading-relaxed font-sans">
                  {sect.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              ) : (
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-sans">{sect.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

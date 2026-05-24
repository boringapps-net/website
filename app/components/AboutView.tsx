import { CORPORATE_INFO } from '../data/legal';
import { Mail, Cpu, Lock, Zap } from 'lucide-react';

export function AboutView() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10 font-sans animate-fade-in text-[#1A1A1A]">
      <section className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
          About BoringApps.
        </h1>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          BoringApps.net is a small label run by two Australian developers. We ship a handful of native
          utilities for macOS, iOS, and Android — the kind of tools that do one thing well, run on your
          device, and stay out of the way.
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Nothing here is venture-backed, sub-funded, or strategically rebranded. It&apos;s just two of us
          building software we want to use, and putting it under one roof so it&apos;s easier to find.
        </p>
      </section>

      <section className="bg-white border-2 border-[#1A1A1A] rounded-none p-6 md:p-8 space-y-5 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        <h2 className="text-base font-black uppercase tracking-tight border-l-4 border-[#E63946] pl-3">
          What we believe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#F4F4F1] border-2 border-[#1A1A1A] space-y-2">
            <Cpu className="w-5 h-5 text-[#E63946]" />
            <h3 className="font-black text-xs uppercase">Native, on device</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Real platform UI, real platform performance. No wrappers around a web view.
            </p>
          </div>
          <div className="p-4 bg-[#F4F4F1] border-2 border-[#1A1A1A] space-y-2">
            <Lock className="w-5 h-5 text-emerald-600" />
            <h3 className="font-black text-xs uppercase">Your data, your device</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              No accounts, no analytics, no telemetry. Nothing phones home unless the app exists specifically
              to talk to your own servers.
            </p>
          </div>
          <div className="p-4 bg-[#F4F4F1] border-2 border-[#1A1A1A] space-y-2">
            <Zap className="w-5 h-5 text-sky-600" />
            <h3 className="font-black text-xs uppercase">One-off, not monthly</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              We&apos;d rather charge once than send you a renewal email every year.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3 text-xs font-mono text-gray-600">
        <h2 className="text-base font-black uppercase tracking-tight border-l-4 border-[#E63946] pl-3 text-[#1A1A1A] font-sans">
          The companies behind it
        </h2>
        <ul className="space-y-1.5 pt-2">
          {CORPORATE_INFO.partners.map((partner) => (
            <li key={partner.abn}>
              <span className="text-[#1A1A1A] font-bold">{partner.name}</span>{' '}
              <span className="text-gray-500">— ABN {partner.abn}, {partner.address}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t-2 border-[#1A1A1A] pt-8">
        <a
          href={`mailto:${CORPORATE_INFO.contactEmail}`}
          className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#E63946] text-white font-bold border-2 border-[#1A1A1A] px-5 py-3 text-xs font-mono transition-colors shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] hover:shadow-[5px_5px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-150"
        >
          <Mail className="w-4 h-4" /> {CORPORATE_INFO.contactEmail}
        </a>
      </section>
    </div>
  );
}

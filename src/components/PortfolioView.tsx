import { useState } from 'react';
import { APPS } from '../data/apps';
import {
  Monitor,
  Smartphone,
  ChevronRight,
  Cpu,
  ShieldAlert,
  Zap,
  Lock,
  Clock,
} from 'lucide-react';

interface PortfolioViewProps {
  onSelectApp: (appId: string) => void;
  onNavigate: (pageId: 'home' | 'app' | 'privacy' | 'terms' | 'about') => void;
}

type PlatformFilter = 'all' | 'mac' | 'windows' | 'ios' | 'android';

export function PortfolioView({ onSelectApp }: PortfolioViewProps) {
  const [filter, setFilter] = useState<PlatformFilter>('all');

  const filteredApps = APPS.filter((app) => {
    if (filter === 'all') return true;
    return app.platforms.includes(filter);
  });

  return (
    <div className="space-y-16 py-8 animate-fade-in font-sans text-[#1A1A1A]">
      {/* 1. Hero Manifest Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#1A1A1A] text-xs font-mono font-bold select-none text-[#1A1A1A] shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
          <span className="w-2.5 h-2.5 bg-[#E63946]" />
          The IT Dept × Curiola Joint Venture
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1A1A1A] font-sans leading-none pt-4">
          WE BUILD <span className="line-through decoration-[#E63946] decoration-[6px]">UNSEXY</span> <br />
          <span className="text-white bg-[#1A1A1A] px-2.5 py-1 inline-block mt-2">ACTUALLY USEFUL</span> APPS.
        </h1>

        <p className="text-base md:text-lg text-[#1A1A1A]/90 max-w-2xl mx-auto leading-relaxed font-sans">
          On-device utilities for macOS, iOS, and Android. No accounts, no cloud, no telemetry — just tools that
          do one job and get out of the way.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto text-left">
          <div className="bg-white border-2 border-[#1A1A1A] p-4 space-y-1 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Processing</span>
            <span className="block text-xs font-extrabold text-[#1A1A1A]">100% on-device</span>
          </div>
          <div className="bg-white border-2 border-[#1A1A1A] p-4 space-y-1 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Telemetry</span>
            <span className="block text-xs font-extrabold text-[#1A1A1A]">Zero</span>
          </div>
          <div className="bg-white border-2 border-[#1A1A1A] p-4 space-y-1 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Distribution</span>
            <span className="block text-xs font-extrabold text-[#1A1A1A]">Apple & Google Stores</span>
          </div>
          <div className="bg-white border-2 border-[#1A1A1A] p-4 space-y-1 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Venture</span>
            <span className="block text-xs font-extrabold text-[#1A1A1A]">Dual Pty Ltd</span>
          </div>
        </div>
      </section>

      {/* 2. Platform Filtering Controls */}
      <section className="space-y-6 max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1A1A1A] pb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-tight font-sans">Portfolio</h2>
            <p className="text-xs text-slate-500">Pick an app to see what it does, screenshots, and where to download it.</p>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-white border-2 border-[#1A1A1A] font-mono text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 transition select-none cursor-pointer rounded-none font-bold ${filter === 'all' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-gray-100'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('mac')}
              className={`px-3 py-1.5 transition flex items-center gap-1 cursor-pointer rounded-none font-bold ${filter === 'mac' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-gray-100'}`}
            >
              <Monitor className="w-3.5 h-3.5" /> macOS
            </button>
            <button
              onClick={() => setFilter('ios')}
              className={`px-3 py-1.5 transition flex items-center gap-1 cursor-pointer rounded-none font-bold ${filter === 'ios' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-gray-100'}`}
            >
              <Smartphone className="w-3.5 h-3.5" /> iOS
            </button>
            <button
              onClick={() => setFilter('android')}
              className={`px-3 py-1.5 transition flex items-center gap-1 cursor-pointer rounded-none font-bold ${filter === 'android' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-gray-100'}`}
            >
              <Smartphone className="w-3.5 h-3.5" /> Android
            </button>
          </div>
        </div>

        {/* 3. Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((app) => (
            <div
              id={`app-card-${app.id}`}
              key={app.id}
              onClick={() => onSelectApp(app.id)}
              className="group bg-white border-2 border-[#1A1A1A] p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200 cursor-pointer overflow-hidden relative rounded-none"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-[#E63946] border-b-2 border-[#1A1A1A]" />

              <div className="pt-2">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-white flex items-center justify-center border-2 border-[#1A1A1A] rounded-none shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] group-hover:-translate-x-[1px] group-hover:-translate-y-[1px] transition duration-200 overflow-hidden">
                    <img src={app.iconImage} alt={`${app.name} icon`} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <div className="flex gap-1">
                      {app.platforms.map((p) => (
                        <span key={p} className="text-[9px] font-mono tracking-wider font-extrabold uppercase bg-white text-[#1A1A1A] px-2 py-0.5 border border-[#1A1A1A]">
                          {p}
                        </span>
                      ))}
                    </div>
                    {app.status === 'shipped' ? (
                      <span className="text-[9px] font-mono tracking-wider font-extrabold uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 border border-emerald-900 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Shipping
                      </span>
                    ) : (
                      <span className="text-[9px] font-mono tracking-wider font-extrabold uppercase bg-amber-100 text-amber-900 px-2 py-0.5 border border-amber-900 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <h3 className="text-lg font-black text-[#1A1A1A] font-sans tracking-tight group-hover:text-[#E63946] transition">
                    {app.name}
                  </h3>
                  <span className="block text-[11px] font-mono text-gray-500 tracking-tight leading-normal uppercase font-bold">
                    {app.tagline}
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed pt-1.5">
                    {app.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-[#1A1A1A] flex items-center justify-between text-[11px] font-mono select-none">
                <span className="text-[#1A1A1A]/80 font-bold">{app.pricing}</span>
                <span className="text-[#E63946] font-black inline-flex items-center gap-1 group-hover:translate-x-1.5 transition duration-200">
                  DETAILS <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}

          {filteredApps.length === 0 && (
            <div className="col-span-full py-16 text-center border-2 border-dashed border-[#1A1A1A] bg-white">
              <ShieldAlert className="w-8 h-8 text-[#E63946] mx-auto mb-3" />
              <p className="text-[#1A1A1A] text-sm font-bold">No apps for this platform yet.</p>
              <button onClick={() => setFilter('all')} className="mt-2 text-xs text-[#E63946] underline font-bold">
                Show all apps
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Manifesto */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white border-2 border-[#1A1A1A] p-8 md:p-12 relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
          <div className="absolute top-0 right-0 p-8 text-slate-100 pointer-events-none select-none opacity-50">
            <Zap className="w-64 h-64 text-[#E63946]/10" />
          </div>

          <div className="max-w-2xl space-y-6 relative z-10">
            <h2 className="text-2xl md:text-3.5xl font-black text-[#1A1A1A] tracking-tight">
              BORING SOFTWARE IS INCREDIBLY SEXY.
            </h2>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We define "boring" as software that just works. Tools that do one thing well, run on the device,
              and don't ask for your email address. No subscriptions, no dashboards, no nags.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-xs font-mono font-bold">
              <div className="flex items-center gap-2">
                <Lock className="text-emerald-600 w-4.5 h-4.5" />
                <span>Offline-first</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="text-[#E63946] w-4.5 h-4.5" />
                <span>Native, not a wrapper</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-sky-600 w-4.5 h-4.5" />
                <span>No subscriptions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

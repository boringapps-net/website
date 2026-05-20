import { useState } from 'react';
import { motion } from 'motion/react';
import { AppMetadata } from '../types';
import { APPS } from '../data/apps';
import { CORPORATE_INFO } from '../data/legal';
import { 
  Files, 
  Shrink, 
  TableProperties, 
  ClipboardX, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  Monitor, 
  Smartphone, 
  ChevronRight, 
  Cpu, 
  ShieldAlert, 
  Sparkles,
  Zap,
  Lock
} from 'lucide-react';

// Safe explicit mapper for our icons to prevent tree-shaking failures
export function getAppIcon(name: string, className?: string) {
  switch (name) {
    case 'Files': return <Files className={className} />;
    case 'Shrink': return <Shrink className={className} />;
    case 'TableProperties': return <TableProperties className={className} />;
    case 'ClipboardX': return <ClipboardX className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    default: return <HelpCircle className={className} />;
  }
}

interface PortfolioViewProps {
  onSelectApp: (appId: string) => void;
  onNavigate: (pageId: 'home' | 'app' | 'privacy' | 'terms' | 'about') => void;
}

type PlatformFilter = 'all' | 'mac' | 'windows' | 'ios' | 'android';

export function PortfolioView({ onSelectApp, onNavigate }: PortfolioViewProps) {
  const [filter, setFilter] = useState<PlatformFilter>('all');

  const filteredApps = APPS.filter(app => {
    if (filter === 'all') return true;
    return app.platforms.includes(filter);
  });

  return (
    <div className="space-y-16 py-8 animate-fade-in font-sans text-[#1A1A1A]">
      
      {/* 1. Hero Manifest Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto px-4">
        {/* Joint Venture Core Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#1A1A1A] text-xs font-mono font-bold select-none text-[#1A1A1A] shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
          <span className="w-2.5 h-2.5 bg-[#E63946]" />
          The IT Dept × Curiola Joint Venture
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1A1A1A] font-sans leading-none pt-4">
          WE BUILD <span className="line-through decoration-[#E63946] decoration-[6px]">UNSEXY</span> <br /> 
          <span className="text-white bg-[#1A1A1A] px-2.5 py-1 inline-block mt-2">ACTUALLY USEFUL</span> APPS.
        </h1>

        <p className="text-base md:text-lg text-[#1A1A1A]/90 max-w-2xl mx-auto leading-relaxed font-sans">
          No cloud permissions. No database matching. Standard, lightweight, blistering desktop and mobile tools. Process your big data, files, hashes, and clipboards strictly locally.
        </p>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto text-left">
          <div className="bg-white border-2 border-[#1A1A1A] p-4 space-y-1 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Processing Engine</span>
            <span className="block text-xs font-extrabold text-[#1A1A1A]">100% On-Device CPU</span>
          </div>
          <div className="bg-white border-2 border-[#1A1A1A] p-4 space-y-1 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Security Audit</span>
            <span className="block text-xs font-extrabold text-[#1A1A1A]">Zero Telemetry Trackers</span>
          </div>
          <div className="bg-white border-2 border-[#1A1A1A] p-4 space-y-1 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Licensing Model</span>
            <span className="block text-xs font-extrabold text-[#1A1A1A]">Lifetime Paid License</span>
          </div>
          <div className="bg-white border-2 border-[#1A1A1A] p-4 space-y-1 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold">Entity Audits</span>
            <span className="block text-xs font-extrabold text-[#1A1A1A]">Dual Pty Ltd Managed</span>
          </div>
        </div>
      </section>

      {/* 2. Platform Filtering Controls */}
      <section className="space-y-6 max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1A1A1A] pb-6 gap-4">
          <div>
            <h2 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-tight font-sans">Corporate Native Utility Portfolio</h2>
            <p className="text-xs text-slate-500">Click any software engine tool to inspect its core parameters and try the interactive sandbox.</p>
          </div>
          
          <div className="flex flex-wrap gap-1.5 p-1 bg-white border-2 border-[#1A1A1A] font-mono text-xs">
            <button 
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 transition select-none cursor-pointer rounded-none font-bold ${filter === 'all' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-gray-100'}`}
            >
              All Assets
            </button>
            <button 
              onClick={() => setFilter('mac')}
              className={`px-3 py-1.5 transition flex items-center gap-1 cursor-pointer rounded-none font-bold ${filter === 'mac' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-gray-100'}`}
            >
              <Monitor className="w-3.5 h-3.5" /> macOS
            </button>
            <button 
              onClick={() => setFilter('windows')}
              className={`px-3 py-1.5 transition flex items-center gap-1 cursor-pointer rounded-none font-bold ${filter === 'windows' ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-gray-100'}`}
            >
              <Monitor className="w-3.5 h-3.5" /> Windows
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

        {/* 3. The Interactive Application Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((app) => (
            <div 
              id={`app-card-${app.id}`}
              key={app.id}
              onClick={() => onSelectApp(app.id)}
              className="group bg-white border-2 border-[#1A1A1A] p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-200 cursor-pointer overflow-hidden relative rounded-none"
            >
              {/* Decorative Geometric Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-[6px] bg-[#E63946] border-b-2 border-[#1A1A1A]" />

              <div className="pt-2">
                {/* Brand Icon Header */}
                <div className="flex items-start justify-between">
                  {/* Flat sharp icon container */}
                  <div className={`w-12 h-12 bg-white flex items-center justify-center border-2 border-[#1A1A1A] rounded-none shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] group-hover:-translate-x-[1px] group-hover:-translate-y-[1px] transition duration-200 ${app.accentColor}`}>
                    {getAppIcon(app.iconName, "w-6 h-6")}
                  </div>
                  
                  {/* Supported Platform Monospace List */}
                  <div className="flex gap-1">
                    {app.platforms.map((p) => (
                      <span key={p} className="text-[9px] font-mono tracking-wider font-extrabold uppercase bg-white text-[#1A1A1A] px-2 py-0.5 border border-[#1A1A1A]">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Listing Details */}
                <div className="mt-5 space-y-2">
                  <h3 className="text-lg font-black text-[#1A1A1A] font-sans tracking-tight group-hover:text-[#E63946] transition">
                    {app.name}
                  </h3>
                  <span className="block text-[11px] font-mono text-gray-500 tracking-tight leading-normal uppercase font-bold">
                    {app.tagline}
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed pt-1.5 truncate-multi">
                    {app.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="mt-6 pt-4 border-t-2 border-[#1A1A1A] flex items-center justify-between text-[11px] font-mono select-none">
                <span className="text-[#1A1A1A]/80 font-bold">{app.pricing}</span>
                <span className="text-[#E63946] font-black inline-flex items-center gap-1 group-hover:translate-x-1.5 transition duration-200">
                  SANDBOX DEMO <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}

          {filteredApps.length === 0 && (
            <div className="col-span-full py-16 text-center border-2 border-dashed border-[#1A1A1A] bg-white">
              <ShieldAlert className="w-8 h-8 text-[#E63946] mx-auto mb-3" />
              <p className="text-[#1A1A1A] text-sm font-bold">No native software engines match this specific platform search filter.</p>
              <button onClick={() => setFilter('all')} className="mt-2 text-xs text-[#E63946] underline font-bold">
                Show All Apps
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Why Boring / Sexy Apps Manifesto */}
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
              We define "Boring" as software that just works. Tools that resolve immediate business friction, process messy binary payloads, protect your clipboard telemetry, and schedule script automations with 100% device ownership.
            </p>

            <blockquote className="border-l-4 border-[#E63946] pl-4 py-1 text-gray-800 italic font-medium text-xs md:text-sm">
              "We built BoringApps.net to escape subscription bloat and cloud database over-architecture. If it can be compiled natively and execute locally inside Apple or Windows memory bands, it belongs there—period."
              <span className="block text-[10px] text-gray-500 font-mono mt-1.5 not-italic font-bold">— Melbourne Joint Venture Development Panel</span>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-xs font-mono font-bold">
              <div className="flex items-center gap-2">
                <Lock className="text-emerald-600 w-4.5 h-4.5" />
                <span>Zero Cloud Storage / Offline-First</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="text-[#E63946] w-4.5 h-4.5" />
                <span>Highly Multi-threaded Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-sky-600 w-4.5 h-4.5" />
                <span>No Monthly Subscription Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { CORPORATE_INFO } from '../data/legal';
import { Landmark, Mail, ShieldAlert, Cpu, Award, Terminal, Handshake } from 'lucide-react';

interface AboutViewProps {
  onNavigateToPolicy: (policyName: 'privacy' | 'terms') => void;
}

export function AboutView({ onNavigateToPolicy }: AboutViewProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 font-sans animate-fade-in text-[#1A1A1A]">
      
      {/* 1. Header Hero Banner */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-[#1A1A1A] text-xs text-[#1A1A1A] font-mono font-extrabold shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
          <Handshake className="w-4 h-4 text-[#E63946]" /> Established Joint Product Initiative
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-none">
          A Strategic Joint Venture
        </h1>
        <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto leading-relaxed font-medium">
          How two independent Australian technology corporations combined mechanics to build robust, on-device Native utilities.
        </p>
      </section>

      {/* 2. Co-Founder Entity Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* Partner 1: The IT Dept Pty Ltd */}
        <div className="bg-white border-2 border-[#1A1A1A] rounded-none p-6 space-y-5 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <div className="space-y-3.5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-extrabold">Co-Venturer A</span>
              <span className="px-2 py-0.5 bg-green-100 text-green-800 font-mono text-[9px] border border-green-800 font-bold">Registered</span>
            </div>
            <h3 className="text-xl font-black text-[#1A1A1A] font-sans transition">{CORPORATE_INFO.partners[0].name}</h3>
            <p className="text-xs text-gray-700 leading-relaxed font-sans">
              The IT Dept is a Melbourne-based bespoke infrastructure, systems, and enterprise development agency. Specializing in secure hardware nodes, deployment sandboxes, and offline compliance networks.
            </p>
          </div>
          <div className="pt-4 border-t-2 border-[#1A1A1A] font-mono text-[11px] text-gray-500 space-y-1 bg-gray-50 -mx-6 -mb-6 p-6">
            <div className="flex justify-between">
              <span className="font-bold">ABN Number:</span>
              <span className="text-[#1A1A1A] font-black">{CORPORATE_INFO.partners[0].abn}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Jurisdiction Base:</span>
              <span className="text-gray-750 font-bold">{CORPORATE_INFO.partners[0].address}</span>
            </div>
          </div>
        </div>

        {/* Partner 2: CURIOLA PTY LTD */}
        <div className="bg-white border-2 border-[#1A1A1A] rounded-none p-6 space-y-5 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <div className="space-y-3.5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-extrabold">Co-Venturer B</span>
              <span className="px-2 py-0.5 bg-green-100 text-green-800 font-mono text-[9px] border border-green-800 font-bold">Registered</span>
            </div>
            <h3 className="text-xl font-black text-[#1A1A1A] font-sans transition">{CORPORATE_INFO.partners[1].name}</h3>
            <p className="text-xs text-gray-700 leading-relaxed font-sans">
              Curiola is a native product workshop specializing in ultra-fast algorithmic optimizations and ergonomic client interfaces. Crafting highly memory-efficient compilers for macOS systems and iOS.
            </p>
          </div>
          <div className="pt-4 border-t-2 border-[#1A1A1A] font-mono text-[11px] text-gray-500 space-y-1 bg-gray-50 -mx-6 -mb-6 p-6">
            <div className="flex justify-between">
              <span className="font-bold">ABN Number:</span>
              <span className="text-[#1A1A1A] font-black">{CORPORATE_INFO.partners[1].abn}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Jurisdiction Base:</span>
              <span className="text-gray-750 font-bold">{CORPORATE_INFO.partners[1].address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Alliance Manifesto */}
      <section className="bg-white border-2 border-[#1A1A1A] rounded-none p-6 md:p-10 space-y-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        <h3 className="text-lg font-black text-[#1A1A1A] font-sans uppercase tracking-tight border-l-4 border-[#E63946] pl-3">
          Our Collaboration Core Tenets
        </h3>
        
        <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed font-sans">
          <p className="font-medium text-[#1A1A1A]">
            When BoringApps.net was structured, both boards codified three primary engineering covenants that regulate every utility, script, binary, or configuration file we compile:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 bg-[#F4F4F1] border-2 border-[#1A1A1A] space-y-2 rounded-none">
              <Cpu className="w-6 h-6 text-[#E63946]" />
              <h4 className="font-black text-[#1A1A1A] text-xs uppercase">Silicon Direct</h4>
              <p className="text-[11px] text-gray-605 leading-relaxed">We write pure native calculations directly matching Apple M-Silicon or Windows multi-threading channels. No bloated web bundles.</p>
            </div>
            <div className="p-4 bg-[#F4F4F1] border-2 border-[#1A1A1A] space-y-2 rounded-none">
              <Award className="w-6 h-6 text-emerald-600" />
              <h4 className="font-black text-[#1A1A1A] text-xs uppercase">Financial Finality</h4>
              <p className="text-[11px] text-gray-605 leading-relaxed">We prefer standard one-off licenses. Trade once, keep the binary forever. No cyclic monthly billing structures.</p>
            </div>
            <div className="p-4 bg-[#F4F4F1] border-2 border-[#1A1A1A] space-y-2 rounded-none">
              <Terminal className="w-6 h-6 text-sky-600" />
              <h4 className="font-black text-[#1A1A1A] text-xs uppercase">Sovereignty</h4>
              <p className="text-[11px] text-gray-605 leading-relaxed">Subject cleanly to the Privacy Act 1988 (Cth) of Australia. No hidden transfers to secondary storage hubs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Support Contact Actions */}
      <section className="bg-[#E63946] p-8 rounded-none border-2 border-[#1A1A1A] text-center space-y-5 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        <h3 className="text-xl font-black text-white uppercase tracking-tight">Reach Out Directly</h3>
        <p className="text-xs md:text-sm text-white/95 max-w-md mx-auto leading-relaxed font-medium">
          For institutional bulk licensing, government agency contracts, custom tool creation, or legal reviews, direct queries to:
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 font-mono text-xs">
          <a href={`mailto:${CORPORATE_INFO.contactEmail}`} className="flex items-center gap-1.5 bg-white text-[#1A1A1A] hover:bg-gray-100 font-bold border-2 border-[#1A1A1A] px-5 py-2.5 rounded-none transition shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
            <Mail className="w-4 h-4 text-[#E63946]" /> Legal: {CORPORATE_INFO.contactEmail}
          </a>
          <a href={`mailto:${CORPORATE_INFO.supportEmail}`} className="flex items-center gap-1.5 bg-white text-[#1A1A1A] hover:bg-gray-100 font-bold border-2 border-[#1A1A1A] px-5 py-2.5 rounded-none transition shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
            <Mail className="w-4 h-4 text-sky-600" /> Support: {CORPORATE_INFO.supportEmail}
          </a>
        </div>
      </section>

    </div>
  );
}

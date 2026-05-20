import { useState, useEffect } from 'react';
import { LegalDocument } from '../types';
import { PRIVACY_POLICY, TERMS_OF_SERVICE, CORPORATE_INFO } from '../data/legal';
import { ShieldCheck, Scale, Info, Check, Mail, Landmark } from 'lucide-react';

interface LegalViewProps {
  initialTab?: 'privacy' | 'terms' | 'about';
}

export function LegalView({ initialTab = 'privacy' }: LegalViewProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'about'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialTab]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 font-sans animate-fade-in text-[#1A1A1A]">
      {/* 1. Header Information */}
      <div className="space-y-3.5 border-b-2 border-[#1A1A1A] pb-6 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border-2 border-[#1A1A1A] text-xs text-[#1A1A1A] font-mono font-bold select-none shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
          <Landmark className="w-3.5 h-3.5 text-[#E63946]" /> Australian Commonwealth Compliance Vault
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-none pt-2">
          {activeTab === 'privacy' && 'Australian Privacy Policy (APP Code)'}
          {activeTab === 'terms' && 'End User Terms & Lifetime Licenses'}
          {activeTab === 'about' && 'Joint Venture Corporate Portfolio'}
        </h1>
        <p className="text-xs font-mono text-gray-550 uppercase font-black">
          Last Reviewed: {PRIVACY_POLICY.lastUpdated} | Governing Laws: New South Wales & Victoria, Commonwealth of Australia
        </p>
      </div>

      {/* 2. Document Selection Tab Switcher */}
      <div className="flex flex-wrap gap-2 p-1 bg-white border-2 border-[#1A1A1A] font-mono text-xs select-none rounded-none">
        <button
          onClick={() => setActiveTab('privacy')}
          className={`flex-1 min-w-[120px] py-3 px-4 rounded-none font-bold flex items-center justify-center gap-2 transition cursor-pointer border-2 ${
            activeTab === 'privacy' 
              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
              : 'text-gray-500 border-transparent hover:border-[#1A1A1A] hover:bg-gray-100'
          }`}
        >
          <ShieldCheck className="w-4 h-4" /> Privacy Policy
        </button>
        <button
          onClick={() => setActiveTab('terms')}
          className={`flex-1 min-w-[120px] py-3 px-4 rounded-none font-bold flex items-center justify-center gap-2 transition cursor-pointer rounded-none border-2 ${
            activeTab === 'terms' 
              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
              : 'text-gray-500 border-transparent hover:border-[#1A1A1A] hover:bg-gray-100'
          }`}
        >
          <Scale className="w-4 h-4" /> Terms of Service
        </button>
        <button
          onClick={() => setActiveTab('about')}
          className={`flex-1 min-w-[120px] py-3 px-4 rounded-none font-bold flex items-center justify-center gap-2 transition cursor-pointer rounded-none border-2 ${
            activeTab === 'about' 
              ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
              : 'text-gray-500 border-transparent hover:border-[#1A1A1A] hover:bg-gray-100'
          }`}
        >
          <Info className="w-4 h-4" /> Joint Venture Bio
        </button>
      </div>

      {/* 3. Render Selected Policy Page Content */}
      <div className="bg-white border-2 border-[#1A1A1A] rounded-none p-6 md:p-10 space-y-8 select-text shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        {activeTab === 'privacy' && (
          <div className="space-y-8 text-[#1A1A1A]">
            {PRIVACY_POLICY.sections.map((sect) => (
              <div key={sect.heading} className="space-y-3.5">
                <h3 className="text-base font-black text-[#1A1A1A] font-sans tracking-tight border-l-4 border-[#E63946] pl-3 uppercase">
                  {sect.heading}
                </h3>
                {Array.isArray(sect.content) ? (
                  <div className="space-y-2.5 text-xs md:text-sm text-gray-750 leading-relaxed font-sans">
                    {sect.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs md:text-sm text-gray-755 leading-relaxed font-sans">{sect.content}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-8 text-[#1A1A1A]">
            {TERMS_OF_SERVICE.sections.map((sect) => (
              <div key={sect.heading} className="space-y-3.5">
                <h3 className="text-base font-black text-[#1A1A1A] font-sans tracking-tight border-l-4 border-[#E63946] pl-3 uppercase">
                  {sect.heading}
                </h3>
                {Array.isArray(sect.content) ? (
                  <div className="space-y-2.5 text-xs md:text-sm text-gray-755 leading-relaxed font-sans">
                    {sect.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs md:text-sm text-gray-755 leading-relaxed font-sans">{sect.content}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-8 text-[#1A1A1A]">
            {/* Short Bio */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1A1A1A] uppercase tracking-tight">A Pragmatic Software Coalition</h2>
              <p className="text-xs md:text-sm text-gray-750 leading-relaxed">
                BoringApps.net is a structural partnership and joint product initiative co-launched by two prominent Australian boutique tech ventures: <strong>{CORPORATE_INFO.partners[0].name}</strong> and <strong>{CORPORATE_INFO.partners[1].name}</strong>.
              </p>
              <p className="text-xs md:text-sm text-gray-750 leading-relaxed">
                By combining expert platform mechanics with zero-cloud sandbox boundaries, the collaborative target is to construct a modular toolsuite covering heavy local tasks: regex indexing, offline quantizing compression, crontab automation logging, file checking, and system security clipboard screening.
              </p>
            </div>

            {/* Corporate Entity Verification Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CORPORATE_INFO.partners.map((partner) => (
                <div key={partner.abn} className="bg-[#F4F4F1] p-5 rounded-none border-2 border-[#1A1A1A] space-y-3 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                  <div className="text-[#E63946] font-mono text-[10px] uppercase font-bold tracking-wider">Verified Entity</div>
                  <h3 className="text-sm font-extrabold text-[#1A1A1A]">{partner.name}</h3>
                  <div className="space-y-1.5 font-mono text-xs text-slate-500">
                    <div className="flex justify-between">
                      <span>Australian ABN:</span>
                      <span className="text-[#1A1A1A] font-black">{partner.abn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Jurisdiction:</span>
                      <span className="text-[#1A1A1A] font-bold">{partner.address}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pty Ltd Status:</span>
                      <span className="text-emerald-700 font-extrabold">Active / Registered</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Licensing Compliance Guarantee List */}
            <div className="bg-[#F4F4F1] p-5 rounded-none border-2 border-[#1A1A1A] space-y-4 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-extrabold">Collaborative Standards & Warranties</h4>
              <ul className="space-y-3 text-xs md:text-sm text-gray-750">
                <li className="flex gap-2.5 items-start">
                  <span className="bg-emerald-100 p-0.5 rounded-none text-emerald-800 shrink-0 mt-0.5 border border-emerald-800 font-bold">
                    <Check className="w-3 h-3" />
                  </span>
                  <span><strong>Australian Consumer Law (ACL):</strong> Every single license of ours holds mandatory guarantees under ACL, covering technical fitness and descriptions.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="bg-emerald-100 p-0.5 rounded-none text-emerald-800 shrink-0 mt-0.5 border border-emerald-800 font-bold">
                    <Check className="w-3 h-3" />
                  </span>
                  <span><strong>Secure Device Sandboxing:</strong> Our joint system architectures do not store credentials, process clipboard lists, or read local directories inside remote databases.</span>
                </li>
              </ul>
            </div>

            {/* Support Information */}
            <div className="pt-6 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <span className="text-gray-550 font-bold">Regulatory Questions? Talk to our legal officer:</span>
              <a href={`mailto:${CORPORATE_INFO.contactEmail}`} className="flex items-center gap-1.5 text-[#E63946] hover:underline transition shrink-0 uppercase tracking-widest text-[11px] font-bold">
                <Mail className="w-4 h-4" /> {CORPORATE_INFO.contactEmail}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

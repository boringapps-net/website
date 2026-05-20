import { useState, useEffect, FormEvent } from 'react';
import { AppMetadata } from '../types';
import { getAppIcon } from './PortfolioView';
import { InteractiveMockup } from './InteractiveMockup';
import { 
  ArrowLeft, 
  Download, 
  ShoppingBag, 
  Cpu, 
  Lock, 
  Check, 
  AlertCircle, 
  FileCheck, 
  RefreshCw,
  Copy
} from 'lucide-react';

interface AppDetailProps {
  app: AppMetadata;
  onBack: () => void;
}

export function AppDetail({ app, onBack }: AppDetailProps) {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'complete'>('idle');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showCheckoutSim, setShowCheckoutSim] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'processing' | 'success'>('form');
  const [scannedHashCopied, setScannedHashCopied] = useState(false);

  useEffect(() => {
    // Reset status flags when changing apps
    setDownloadState('idle');
    setDownloadProgress(0);
    setShowCheckoutSim(false);
    setCheckoutStep('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [app]);

  const handleDownload = () => {
    if (downloadState !== 'idle') return;
    setDownloadState('downloading');
    setDownloadProgress(0);

    const intv = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intv);
          setDownloadState('complete');
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCheckoutStep('processing');
    setTimeout(() => {
      setCheckoutStep('success');
    }, 1500);
  };

  const handleCopyHash = () => {
    navigator.clipboard.writeText('SHA256_' + app.id.toUpperCase() + '_98ac71f2a3b4e5f');
    setScannedHashCopied(true);
    setTimeout(() => setScannedHashCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 animate-fade-in font-sans text-[#1A1A1A]">
      
      {/* 1. Breadcrumbs Nav */}
      <div>
        <button 
          id="detail-back-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1A1A1A] hover:text-[#E63946] border-2 border-[#1A1A1A] px-4 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-150 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-[#E63946] group-hover:-translate-x-1 transition duration-200" />
          Back to Portfolio App Catalog
        </button>
      </div>

      {/* 2. Main High-Density Dual Column Product Display Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Product Info Specs & Actions (Cols 1-5) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-4">
            {/* App Icon header and title */}
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 bg-white flex items-center justify-center border-2 border-[#1A1A1A] rounded-none shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] ${app.accentColor}`}>
                {getAppIcon(app.iconName, "w-8 h-8")}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tighter uppercase font-sans">
                  {app.name}
                </h1>
                <div className="flex gap-1.5 items-center mt-1">
                  {app.platforms.map((p) => (
                    <span key={p} className="text-[9px] font-mono tracking-wider font-extrabold uppercase bg-white text-[#1A1A1A] px-2 py-0.5 border border-[#1A1A1A]">
                      {p}
                    </span>
                  ))}
                  <div className="h-2.5 w-[2px] bg-[#1A1A1A] mx-1" />
                  <span className="text-[10px] text-[#1A1A1A] font-mono font-bold bg-white border border-[#1A1A1A] px-1.5 py-0.5 rounded-none">{app.currentVersion}</span>
                </div>
              </div>
            </div>

            <p className="font-mono text-xs text-gray-500 uppercase font-black not-italic border-l-2 border-[#E63946] pl-2.5 py-0.5">
              "{app.tagline}"
            </p>

            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              {app.extendedDescription}
            </p>
          </div>

          {/* Feature list bullets */}
          <div className="bg-white border-2 border-[#1A1A1A] rounded-none p-5 space-y-4 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#1A1A1A] font-extrabold">Key Specifications</h3>
            <ul className="space-y-3">
              {app.features.map((feat) => (
                <li key={feat} className="flex gap-2.5 items-start text-xs text-gray-800">
                  <span className="bg-green-100 p-0.5 border border-green-800 rounded-none text-green-900 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="leading-relaxed font-sans">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary CTA buying buttons */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4 font-mono">
              <button
                id="cta-buy-lic"
                onClick={() => { setShowCheckoutSim(true); setCheckoutStep('form'); }}
                className="w-full bg-[#E63946] text-white font-black py-3 px-4 rounded-none border-2 border-[#1A1A1A] text-xs flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] hover:shadow-[5px_5px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-200 cursor-pointer text-center select-none"
              >
                <ShoppingBag className="w-4 h-4" /> Buy License
              </button>

              <button
                id="cta-download-bin"
                disabled={downloadState === 'downloading'}
                onClick={handleDownload}
                className="w-full bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-gray-50 font-bold py-3 px-4 rounded-none text-xs flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] hover:shadow-[5px_5px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-200 cursor-pointer text-center select-none disabled:opacity-50"
              >
                <Download className="w-4 h-4 text-[#E63946]" /> Download Offline
              </button>
            </div>

            {/* Inline simulated download indicator */}
            {downloadState === 'downloading' && (
              <div className="p-3 bg-white rounded-none border-2 border-[#1A1A1A] text-xs font-mono space-y-1.5 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5 font-bold">
                    <RefreshCw className="w-3 h-3 animate-spin text-[#E63946]" />
                    Downloading native installation bundle...
                  </span>
                  <span className="font-extrabold">{downloadProgress}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 border border-[#1A1A1A] rounded-none overflow-hidden">
                  <div className="bg-[#E63946] h-full transition-all duration-100" style={{ width: `${downloadProgress}%` }} />
                </div>
              </div>
            )}

            {downloadState === 'complete' && (
              <div className="p-3 bg-green-50 rounded-none border-2 border-green-800 text-xs font-mono text-green-905 flex items-center justify-between gap-2.5 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                <span className="flex items-center gap-1.5 text-[11px] font-bold">
                  <FileCheck className="w-4 h-4 text-green-850" /> Native Package Cleared. Integrity OK.
                </span>
                <button 
                  onClick={handleCopyHash}
                  className="px-2.5 py-1 rounded-none bg-white border-2 border-[#1A1A1A] font-bold text-[10px] text-[#1A1A1A] hover:bg-gray-100 transition shadow-[1px_1px_0px_0px_rgba(26,26,26,1)]"
                >
                  {scannedHashCopied ? 'Hash Copied' : 'Get SHA256'}
                </button>
              </div>
            )}
          </div>

          {/* Spec details rows */}
          <div className="table-row-group text-xs font-mono divide-y-2 divide-[#1A1A1A] border-t-2 border-[#1A1A1A]">
            <div className="grid grid-cols-2 py-2 text-gray-700">
              <span className="text-gray-400 font-bold">Pricing Model:</span>
              <span className="text-right text-[#1A1A1A] font-extrabold">{app.pricing}</span>
            </div>
            <div className="grid grid-cols-2 py-2 text-gray-700">
              <span className="text-gray-400 font-bold">File Payload:</span>
              <span className="text-right text-[#1A1A1A] font-extrabold">{app.fileSize}</span>
            </div>
            <div className="grid grid-cols-2 py-2 text-gray-700">
              <span className="text-gray-400 font-bold">Target System Req:</span>
              <span className="text-right text-[#1A1A1A] font-extrabold">{app.systemRequirements}</span>
            </div>
            <div className="grid grid-cols-2 py-2 text-gray-700">
              <span className="text-gray-400 font-bold">Released Date:</span>
              <span className="text-right text-[#1A1A1A] font-extrabold">{app.releaseDate}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Code Simulator Playground (Cols 6-12) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs pb-1">
            <span className="text-[#1A1A1A] font-bold flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-[#E63946]" /> Dynamic Desktop Simulator Sandbox
            </span>
            <span className="text-emerald-700 font-black flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#E63946]" /> Offline Sandboxed Mode
            </span>
          </div>
          
          <InteractiveMockup type={app.screenshotType} accentColor={app.accentColor} />

          <p className="text-[11px] font-mono text-gray-500 text-center leading-normal font-bold">
            * This sandbox is compiled inside client memory to represent local calculations performed by the core native desktop application engine.
          </p>
        </div>

      </div>

      {/* 3. Simulated Commerce Gateway Modal Overlay */}
      {showCheckoutSim && (
        <div className="fixed inset-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border-4 border-[#1A1A1A] max-w-md w-full p-6 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] space-y-5 flex flex-col justify-between rounded-none">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 bg-white flex items-center justify-center border-2 border-[#1A1A1A] ${app.accentColor}`}>
                  {getAppIcon(app.iconName, "w-4.5 h-4.5")}
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1A1A1A] font-sans tracking-tight uppercase">Checkout Sandbox</h3>
                  <p className="text-[10px] text-gray-505 font-mono">License order: {app.name}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowCheckoutSim(false)}
                className="text-xs font-mono font-bold text-gray-500 hover:text-[#E63946] border-2 border-[#1A1A1A] px-2 py-1 rounded-none bg-white cursor-pointer select-none"
              >
                Cancel
              </button>
            </div>

            {checkoutStep === 'form' && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-gray-500 font-mono mb-1 uppercase tracking-wider text-[10px] font-extrabold">Email Address</label>
                    <input 
                      required
                      type="email" 
                      defaultValue="nick@npratley.net"
                      className="w-full bg-white border-2 border-[#1A1A1A] rounded-none px-3 py-2 text-[#1A1A1A] font-mono focus:border-[#E63946] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 font-mono mb-1 uppercase tracking-wider text-[10px] font-extrabold">Full Name</label>
                    <input 
                      required
                      type="text" 
                      defaultValue="Nick Pratley"
                      className="w-full bg-white border-2 border-[#1A1A1A] rounded-none px-3 py-2 text-[#1A1A1A] focus:border-[#E63946] focus:outline-none font-bold"
                    />
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-none border border-yellow-800 font-mono text-[10px] text-yellow-905 leading-normal font-bold">
                    This is a simulated secure sandbox order transaction process. Clicking Purchase will issue a mock license key instantly.
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-[#1A1A1A] flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-550 font-bold">Total Purchase due:</span>
                  <span className="text-[#E63946] font-black text-sm">{app.pricing.split('•')[1] || app.pricing}</span>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#E63946] hover:bg-[#1A1A1A] text-white font-extrabold border-2 border-[#1A1A1A] py-3 rounded-none text-xs font-mono cursor-pointer transition select-none"
                >
                  Verify Mock Purchase
                </button>
              </form>
            )}

            {checkoutStep === 'processing' && (
              <div className="py-8 text-center space-y-3 font-mono text-xs">
                <RefreshCw className="w-8 h-8 text-[#E63946] animate-spin mx-auto" />
                <p className="text-gray-700 font-bold">Confirming Australian tax audits & invoice numbers...</p>
              </div>
            )}

            {checkoutStep === 'success' && (
              <div className="space-y-4 text-center py-4 font-mono text-xs text-[#1A1A1A]">
                <div className="w-10 h-10 rounded-none bg-green-50 border-2 border-green-800 flex items-center justify-center text-green-850 mx-auto">
                  <Check className="w-5 h-5 font-bold" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-[#1A1A1A] text-sm">Mock Transaction Confirmed</h4>
                  <p className="text-gray-500 font-bold">Thank you for validating of BoringApps.net.</p>
                </div>
                
                <div className="bg-slate-50 p-3 rounded-none border-2 border-[#1A1A1A] space-y-2 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                  <div className="text-[10px] uppercase font-mono text-gray-500 font-bold">Your Lifetime License Key:</div>
                  <div className="text-[#1A1A1A] select-all font-mono break-all font-black p-1 bg-white text-[11px] border border-[#1A1A1A]">
                    B_KEY_{app.id.toUpperCase()}_JV_COMPLIANT_9293112_82A5
                  </div>
                </div>

                <button 
                  onClick={() => setShowCheckoutSim(false)}
                  className="w-full bg-white hover:bg-gray-100 border-2 border-[#1A1A1A] text-[#1A1A1A] py-2.5 rounded-none text-xs cursor-pointer font-bold select-none transition"
                >
                  Close Sandbox Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

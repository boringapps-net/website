import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AppMetadata } from '../types';
import {
  ArrowLeft,
  Check,
  ExternalLink,
  Clock,
  Apple,
  Mail,
} from 'lucide-react';

interface AppDetailProps {
  app: AppMetadata;
}

export function AppDetail({ app }: AppDetailProps) {
  const [activeShot, setActiveShot] = useState(0);

  useEffect(() => {
    setActiveShot(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [app]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 animate-fade-in font-sans text-[#1A1A1A]">
      <div>
        <Link
          id="detail-back-btn"
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1A1A1A] hover:text-[#E63946] border-2 border-[#1A1A1A] px-4 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-150 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-[#E63946] group-hover:-translate-x-1 transition duration-200" />
          Back to Portfolio
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: product info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white flex items-center justify-center border-2 border-[#1A1A1A] rounded-none shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
                <img src={app.iconImage} alt={`${app.name} icon`} className="w-full h-full object-cover" />
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
                  {app.currentVersion && (
                    <>
                      <div className="h-2.5 w-[2px] bg-[#1A1A1A] mx-1" />
                      <span className="text-[10px] text-[#1A1A1A] font-mono font-bold bg-white border border-[#1A1A1A] px-1.5 py-0.5 rounded-none">
                        v{app.currentVersion}
                      </span>
                    </>
                  )}
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

          <div className="bg-white border-2 border-[#1A1A1A] rounded-none p-5 space-y-4 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#1A1A1A] font-extrabold">What's in it</h3>
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

          {/* CTAs */}
          <div className="space-y-3">
            {app.status === 'shipped' && app.appStoreUrl ? (
              <div className="space-y-3">
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  aria-label={`Download ${app.name} on the Mac App Store`}
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-mac-app-store/black/en-us?h=60"
                    alt="Download on the Mac App Store"
                    className="h-14"
                  />
                </a>
                {app.websiteUrl && (
                  <a
                    href={app.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1A1A1A] hover:text-[#E63946] border-2 border-[#1A1A1A] px-3 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-150"
                  >
                    Project site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ) : (
              <div className="bg-amber-50 border-2 border-[#1A1A1A] p-4 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs font-extrabold uppercase tracking-wider text-amber-900">
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </div>
                <p className="text-xs text-gray-700 font-sans leading-relaxed">
                  {app.name} hasn't shipped yet — we're targeting TestFlight first, then the App Store and
                  Google Play. Drop us a line if you want to be on the early build list.
                </p>
                <a
                  href="mailto:hello@boringapps.net"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white bg-[#1A1A1A] hover:bg-[#E63946] px-3 py-2 border-2 border-[#1A1A1A] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" /> Get on the list
                </a>
              </div>
            )}
          </div>

          {/* Spec rows */}
          <div className="text-xs font-mono divide-y-2 divide-[#1A1A1A] border-t-2 border-[#1A1A1A]">
            <div className="grid grid-cols-2 py-2 text-gray-700">
              <span className="text-gray-400 font-bold">Pricing:</span>
              <span className="text-right text-[#1A1A1A] font-extrabold">{app.pricing}</span>
            </div>
            <div className="grid grid-cols-2 py-2 text-gray-700">
              <span className="text-gray-400 font-bold">System requirements:</span>
              <span className="text-right text-[#1A1A1A] font-extrabold">{app.systemRequirements}</span>
            </div>
            {app.releaseDate && (
              <div className="grid grid-cols-2 py-2 text-gray-700">
                <span className="text-gray-400 font-bold">Released:</span>
                <span className="text-right text-[#1A1A1A] font-extrabold">{app.releaseDate}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: screenshots gallery / coming-soon panel */}
        <div className="lg:col-span-7 space-y-4">
          {app.screenshots && app.screenshots.length > 0 ? (
            <ScreenshotGallery
              screenshots={app.screenshots}
              appName={app.name}
              activeIndex={activeShot}
              onSelect={setActiveShot}
            />
          ) : (
            <ComingSoonPanel app={app} />
          )}
        </div>
      </div>
    </div>
  );
}

function ScreenshotGallery({
  screenshots,
  appName,
  activeIndex,
  onSelect,
}: {
  screenshots: { src: string; alt: string }[];
  appName: string;
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const active = screenshots[activeIndex];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between font-mono text-xs pb-1">
        <span className="text-[#1A1A1A] font-bold flex items-center gap-1">
          <Apple className="w-3.5 h-3.5 text-[#E63946]" /> {appName} — App Store screenshots
        </span>
        <span className="text-gray-500 font-bold">{activeIndex + 1} / {screenshots.length}</span>
      </div>

      <div className="w-full bg-[#1A1A1A] border-4 border-[#1A1A1A] rounded-none overflow-hidden shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
        <img
          key={active.src}
          src={active.src}
          alt={active.alt}
          className="w-full h-auto block"
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            onClick={() => onSelect(i)}
            className={`relative bg-white border-2 ${i === activeIndex ? 'border-[#E63946]' : 'border-[#1A1A1A]'} overflow-hidden shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition cursor-pointer`}
            aria-label={`Show screenshot ${i + 1}`}
          >
            <img src={shot.src} alt={shot.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ComingSoonPanel({ app }: { app: AppMetadata }) {
  return (
    <div className="bg-white border-4 border-dashed border-[#1A1A1A] rounded-none p-10 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] flex flex-col items-center justify-center text-center space-y-5 min-h-[420px]">
      <div className="w-24 h-24 bg-white flex items-center justify-center border-2 border-[#1A1A1A] rounded-none shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
        <img src={app.iconImage} alt={`${app.name} icon`} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-900 px-2 py-1">
          <Clock className="w-3 h-3" /> Coming Soon
        </div>
        <h3 className="text-xl font-black uppercase tracking-tight">No build yet — but the engine is real.</h3>
        <p className="text-sm text-gray-700 max-w-md mx-auto font-sans leading-relaxed">
          {app.name} is in active development. Screenshots and a TestFlight link will land here once we cut
          the first build.
        </p>
      </div>
    </div>
  );
}

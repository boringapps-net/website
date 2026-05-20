import { Link } from 'react-router';
import { APPS } from '../data/apps';
import { CORPORATE_INFO } from '../data/legal';
import { ShieldCheck, Scale, Globe, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] border-t-4 border-[#1A1A1A] text-gray-300 py-12 px-6 md:px-12 mt-auto font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2 space-y-4">
          <Link
            id="footer-logo"
            to="/"
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 bg-white text-[#1A1A1A] flex items-center justify-center font-mono font-black text-xs group-hover:bg-[#E63946] group-hover:text-white transition duration-150">
              B
            </div>
            <span className="font-sans font-black text-base text-white">
              BoringApps<span className="text-[#E63946] font-normal">.net</span>
            </span>
          </Link>

          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            We build unsexy (actually, beautiful, secure and blazing-fast) native utilities that run completely
            on your local CPU. No unnecessary telemetry, no cloud subscriptions, no memory leaks. Just robust
            software.
          </p>

          <div className="pt-2 text-[11px] text-gray-500 font-mono space-y-1 block border-t border-gray-800">
            <span className="block font-bold text-gray-400">Joint Venture Corporate Registry:</span>
            <span className="block">
              • {CORPORATE_INFO.partners[0].name} (ABN {CORPORATE_INFO.partners[0].abn})
            </span>
            <span className="block">
              • {CORPORATE_INFO.partners[1].name} (ABN {CORPORATE_INFO.partners[1].abn})
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase font-mono tracking-wider text-white font-extrabold mb-4 border-b border-gray-800 pb-1">
            Our Utility Suite
          </h4>
          <ul className="space-y-2.5 text-xs font-mono">
            {APPS.map((app) => (
              <li key={app.id}>
                <Link
                  id={`footer-app-${app.id}`}
                  to={`/apps/${app.id}`}
                  className="hover:text-[#E63946] transition text-gray-400 cursor-pointer text-left"
                >
                  {app.name}{' '}
                  <span className="text-gray-500 text-[10px]">— {app.platforms.join(' / ')}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-mono tracking-wider text-white font-extrabold mb-4 border-b border-gray-800 pb-1 font-sans">
            Regulatory Documents
          </h4>
          <ul className="space-y-2.5 text-xs font-mono">
            <li>
              <Link
                id="footer-nav-privacy"
                to="/privacy"
                className="hover:text-white flex items-center gap-1.5 transition text-left cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-gray-500" /> Australian Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                id="footer-nav-terms"
                to="/terms"
                className="hover:text-white flex items-center gap-1.5 transition text-left cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5 text-gray-500" /> End User Terms & Licenses
              </Link>
            </li>
            <li>
              <Link
                id="footer-nav-about"
                to="/about"
                className="hover:text-white flex items-center gap-1.5 transition text-left cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-gray-500" /> About Joint-Venture (JV)
              </Link>
            </li>
            <li className="pt-2 border-t border-gray-800 flex items-center gap-1.5 text-[11px] text-gray-500">
              <Mail className="w-3.5 h-3.5 shrink-0" /> {CORPORATE_INFO.contactEmail}
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
        <p>
          &copy; {currentYear} {CORPORATE_INFO.jointVentureName}. All rights reserved strictly throughout
          Australia.
        </p>
        <div className="flex gap-4">
          <span>Processed Fully Offline</span>
          <span>•</span>
          <span>Commonwealth Compliance Verified</span>
        </div>
      </div>
    </footer>
  );
}

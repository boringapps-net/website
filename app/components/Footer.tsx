import { Link } from 'react-router';
import { APPS } from '../data/apps';
import { CORPORATE_INFO } from '../data/legal';
import { ShieldCheck, Scale, User, Mail } from 'lucide-react';
import { Logo } from './Logo';

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
            <Logo variant="light" className="w-8 h-8 border border-white/20" />
            <span className="font-sans font-black text-base text-white">
              BoringApps<span className="text-[#E63946] font-normal">.net</span>
            </span>
          </Link>

          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            Native utilities for macOS, iOS, and Android. Run on-device, no cloud, no telemetry — boring
            software that does one job and gets out of the way.
          </p>

          <div className="pt-2 text-[11px] text-gray-500 font-mono space-y-1 block border-t border-gray-800">
            <span className="block">
              A small project by {CORPORATE_INFO.partners[0].name} and {CORPORATE_INFO.partners[1].name}.
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase font-mono tracking-wider text-white font-extrabold mb-4 border-b border-gray-800 pb-1">
            Apps
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
            Site
          </h4>
          <ul className="space-y-2.5 text-xs font-mono">
            <li>
              <Link
                id="footer-nav-about"
                to="/about"
                className="hover:text-white flex items-center gap-1.5 transition text-left cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-gray-500" /> About
              </Link>
            </li>
            <li>
              <Link
                id="footer-nav-privacy"
                to="/privacy"
                className="hover:text-white flex items-center gap-1.5 transition text-left cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-gray-500" /> Privacy
              </Link>
            </li>
            <li>
              <Link
                id="footer-nav-terms"
                to="/terms"
                className="hover:text-white flex items-center gap-1.5 transition text-left cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5 text-gray-500" /> Terms
              </Link>
            </li>
            <li className="pt-2 border-t border-gray-800">
              <a
                href={`mailto:${CORPORATE_INFO.contactEmail}`}
                className="hover:text-white flex items-center gap-1.5 transition text-[11px] text-gray-500"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" /> {CORPORATE_INFO.contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
        <p>&copy; {currentYear} BoringApps.net. All rights reserved.</p>
        <div className="flex gap-4">
          <span>On-device, offline-first</span>
          <span>•</span>
          <span>No telemetry</span>
        </div>
      </div>
    </footer>
  );
}

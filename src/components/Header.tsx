import { PageId } from '../types';
import { Layers, ShieldCheck, Mail, HelpCircle, Code } from 'lucide-react';

interface HeaderProps {
  currentPageId: PageId;
  onNavigate: (pageId: PageId, selectedAppId?: string) => void;
}

export function Header({ currentPageId, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-[#1A1A1A] px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          id="nav-logo"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center font-mono font-extrabold text-base text-white group-hover:bg-[#E63946] transition duration-150 shadow-[2px_2px_0px_0px_rgba(26,26,26,0.3)] group-hover:shadow-[2px_2px_0px_0px_rgba(230,57,70,0.3)]">
            B
          </div>
          <div>
            <h1 className="font-sans font-black text-xl tracking-tighter text-[#1A1A1A] leading-none">
              BoringApps<span className="text-[#E63946]">.net</span>
            </h1>
            <span className="block text-[9px] font-mono text-gray-500 tracking-wider uppercase mt-1">
              Pty Ltd Joint Venture
            </span>
          </div>
        </button>

        {/* Global Links */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs md:text-sm">
          <button
            id="nav-catalog"
            onClick={() => onNavigate('home')}
            className={`px-3 py-2 border-2 font-bold font-sans transition cursor-pointer select-none rounded-none ${
              currentPageId === 'home' || currentPageId === 'app'
                ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                : 'border-transparent text-gray-650 hover:border-[#1A1A1A] hover:bg-white text-[#1A1A1A]'
            }`}
          >
            App Portfolio
          </button>
          
          <button
            id="nav-about-jv"
            onClick={() => onNavigate('about')}
            className={`px-3 py-2 border-2 font-bold font-sans transition cursor-pointer select-none rounded-none ${
              currentPageId === 'about'
                ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                : 'border-transparent text-gray-650 hover:border-[#1A1A1A] hover:bg-white text-[#1A1A1A]'
            }`}
          >
            Joint Venture
          </button>

          <div className="h-5 w-[2px] bg-[#1A1A1A] mx-2 hidden md:block" />

          <button
            id="nav-privacy"
            onClick={() => onNavigate('privacy')}
            className={`px-3 py-2 border-2 font-mono text-[11px] transition hidden sm:inline-flex items-center cursor-pointer select-none rounded-none ${
              currentPageId === 'privacy'
                ? 'bg-[#E63946] border-[#1A1A1A] text-white font-bold'
                : 'border-transparent text-gray-500 hover:border-[#1A1A1A] hover:bg-white text-[#1A1A1A]'
            }`}
          >
            Privacy APP
          </button>

          <button
            id="nav-terms"
            onClick={() => onNavigate('terms')}
            className={`px-3 py-2 border-2 font-mono text-[11px] transition hidden sm:inline-flex items-center cursor-pointer select-none rounded-none ${
              currentPageId === 'terms'
                ? 'bg-[#E63946] border-[#1A1A1A] text-white font-bold'
                : 'border-transparent text-gray-500 hover:border-[#1A1A1A] hover:bg-white text-[#1A1A1A]'
            }`}
          >
            T&C Licenses
          </button>
        </nav>
      </div>
    </header>
  );
}

import { NavLink, useLocation } from 'react-router';
import { Logo } from './Logo';

export function Header() {
  const location = useLocation();
  const onPortfolio = location.pathname === '/' || location.pathname.startsWith('/apps/');

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-[#1A1A1A] px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink
          to="/"
          id="nav-logo"
          className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
        >
          <Logo className="w-10 h-10 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_rgba(26,26,26,0.3)] group-hover:shadow-[2px_2px_0px_0px_rgba(230,57,70,0.4)] group-hover:-translate-x-[1px] group-hover:-translate-y-[1px] transition-all duration-150" />
          <h1 className="font-sans font-black text-xl tracking-tighter text-[#1A1A1A] leading-none">
            BoringApps<span className="text-[#E63946]">.net</span>
          </h1>
        </NavLink>

        <nav className="flex items-center gap-1 sm:gap-2 text-xs md:text-sm">
          <NavLink
            id="nav-catalog"
            to="/"
            className={() =>
              `px-3 py-2 border-2 font-bold font-sans transition cursor-pointer select-none rounded-none ${
                onPortfolio
                  ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                  : 'border-transparent text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-white'
              }`
            }
          >
            App Portfolio
          </NavLink>

          <NavLink
            id="nav-about"
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 border-2 font-bold font-sans transition cursor-pointer select-none rounded-none ${
                isActive
                  ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                  : 'border-transparent text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-white'
              }`
            }
          >
            About
          </NavLink>

          <div className="h-5 w-[2px] bg-[#1A1A1A] mx-2 hidden md:block" />

          <NavLink
            id="nav-privacy"
            to="/privacy"
            className={({ isActive }) =>
              `px-3 py-2 border-2 font-mono text-[11px] transition hidden sm:inline-flex items-center cursor-pointer select-none rounded-none ${
                isActive
                  ? 'bg-[#E63946] border-[#1A1A1A] text-white font-bold'
                  : 'border-transparent text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-white'
              }`
            }
          >
            Privacy
          </NavLink>

          <NavLink
            id="nav-terms"
            to="/terms"
            className={({ isActive }) =>
              `px-3 py-2 border-2 font-mono text-[11px] transition hidden sm:inline-flex items-center cursor-pointer select-none rounded-none ${
                isActive
                  ? 'bg-[#E63946] border-[#1A1A1A] text-white font-bold'
                  : 'border-transparent text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-white'
              }`
            }
          >
            Terms
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

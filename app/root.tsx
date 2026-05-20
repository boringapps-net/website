import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
} from 'react-router';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { Route } from './+types/root';

import './app.css';

export const links: Route.LinksFunction = () => [
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'alternate icon', href: '/favicon.ico', sizes: 'any' },
  { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap',
  },
];

export const meta: Route.MetaFunction = () => [
  { title: 'BoringApps.net — Unsexy (actually useful) utility apps' },
  {
    name: 'description',
    content:
      'On-device utilities for macOS, iOS, and Android. No accounts, no cloud, no telemetry — just tools that do one job and get out of the way.',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-geo-bg text-[#1A1A1A] font-sans selection:bg-[#E63946] selection:text-white">
      <Header />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-8 py-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 bg-white border-2 border-[#1A1A1A] hover:bg-[#E63946] hover:text-white p-3 rounded-none hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer text-[#1A1A1A] transition-all duration-150"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title = 'Something went wrong';
  let message = 'An unexpected error occurred.';

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message = error.status === 404 ? "We couldn't find that page." : error.data || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-geo-bg text-[#1A1A1A] font-sans px-6">
      <div className="max-w-md w-full bg-white border-2 border-[#1A1A1A] p-8 shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] space-y-4 text-center">
        <h1 className="text-3xl font-black uppercase tracking-tight">{title}</h1>
        <p className="text-sm text-gray-700">{message}</p>
        <a
          href="/"
          className="inline-block bg-[#E63946] text-white font-black px-4 py-2 border-2 border-[#1A1A1A] text-xs shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] hover:shadow-[5px_5px_0px_0px_rgba(26,26,26,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}

import { AppMetadata } from '../types';

export const APPS: AppMetadata[] = [
  {
    id: 'machole',
    name: 'Machole',
    tagline: 'Screen recorder with you in it.',
    description:
      'A persistent, always-on-top camera overlay and screen recorder for macOS — built for clean product demos.',
    extendedDescription:
      "Machole records your screen with your face baked in. A small circular camera overlay floats above every other window, so when you record a tutorial, demo, or async update, viewers see what you're doing AND who's doing it — no post-production, no awkward picture-in-picture, no fighting with OBS. Capture a full display, a single window, or a drag-selected area, with microphone and system audio mixed in automatically.",
    features: [
      'Always-on circular camera overlay with five gradient themes and three sizes.',
      'Record a full screen, a single window, or a drag-selected area, with a 3-2-1 countdown.',
      'Microphone plus system audio mixed into one .mp4, saved wherever you choose.',
      'On-device background blur, auto-frame, and close-up framing — nothing leaves your Mac.',
      'Persistent controls panel with global shortcuts: ⌘⇧R record, ⌘⇧P pause, ⌘⇧M mute, ⌘⇧E camera.',
      'Zero accounts, zero analytics, zero telemetry — designed for the Mac App Store sandbox.',
    ],
    iconImage: '/apps/machole/icon.png',
    platforms: ['mac'],
    status: 'shipped',
    primaryColor: 'from-rose-500 to-pink-600',
    accentColor: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    screenshots: [
      { src: '/apps/machole/screenshots/01-hero.png', alt: 'Machole camera overlay floating above a Mac desktop' },
      { src: '/apps/machole/screenshots/02-picker.png', alt: 'Source picker — screen, window, or custom area' },
      { src: '/apps/machole/screenshots/03-controls.png', alt: 'Recording controls panel and timer' },
      { src: '/apps/machole/screenshots/04-themes.png', alt: 'Five animated gradient themes for the camera ring' },
    ],
    appStoreUrl: 'https://apps.apple.com/app/id6770940835',
    websiteUrl: 'https://greenthread-ai.github.io/machole/',
    pricing: '$29.99 once-off — lifetime license on the Mac App Store',
    releaseDate: 'May 2026',
    currentVersion: '1.0.0',
    systemRequirements: 'macOS 13.0 Ventura or later (Apple Silicon & Intel)',
  },
  {
    id: 'repsense',
    name: 'Repsense',
    tagline: 'Coach-grade strength training, on your phone.',
    description:
      'A constraint-based strength training app that handles exercise selection, load management, and progression so you can focus on lifting.',
    extendedDescription:
      'Repsense is a strength training app with coach-grade logic baked in. It picks your exercises, suggests your working weights, and tracks your progression based on how each set actually felt — using RPE/RIR, e1RM estimates, and per-role weight tracking. New exercises calibrate themselves over a couple of sessions; established lifts progress in a way that respects volume ceilings and triggers deloads before you stall.',
    features: [
      'Session template cycling (A/B/C rotation) across 2-, 3-, and 4-day splits.',
      'Per-role weight tracking — Bench as Primary and Bench as Secondary progress independently.',
      'Effort-based progression: Easy / Controlled / Hard / Pain maps to RPE 6 / 7 / 8 / stop.',
      'Automatic deload detection from weekly hard-rep ceilings and RPE drift.',
      'Calibration state machine for new exercises — promotes after two clean exposures.',
      'Plate math, e1RM rolling averages, and equipment / injury filtering, all offline.',
    ],
    iconImage: '/apps/repsense/icon.png',
    platforms: ['ios', 'android'],
    status: 'coming-soon',
    primaryColor: 'from-emerald-500 to-teal-600',
    accentColor: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    pricing: 'TBA — TestFlight coming soon',
    systemRequirements: 'iOS 15+, Android 12+',
  },
];

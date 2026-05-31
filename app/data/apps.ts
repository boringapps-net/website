import { AppMetadata } from '../types';

export const APPS: AppMetadata[] = [
  {
    id: 'screenhole',
    name: 'ScreenHole',
    tagline: 'Screen recorder with you in it.',
    description:
      'A persistent, always-on-top camera overlay and screen recorder for macOS — built for clean product demos.',
    extendedDescription:
      "ScreenHole records your screen with your face baked in. A small circular camera overlay floats above every other window, so when you record a tutorial, demo, or async update, viewers see what you're doing AND who's doing it — no post-production, no awkward picture-in-picture, no fighting with OBS. Capture a full display, a single window, or a drag-selected area, with microphone and system audio mixed in automatically.",
    features: [
      'Always-on circular camera overlay with five gradient themes and three sizes.',
      'Record a full screen, a single window, or a drag-selected area, with a 3-2-1 countdown.',
      'Microphone plus system audio mixed into one .mp4, saved wherever you choose.',
      'On-device background blur, auto-frame, and close-up framing — nothing leaves your Mac.',
      'Persistent controls panel with global shortcuts: ⌘⇧R record, ⌘⇧P pause, ⌘⇧M mute, ⌘⇧E camera.',
      'Zero accounts, zero analytics, zero telemetry — designed for the Mac App Store sandbox.',
    ],
    iconImage: '/apps/screenhole/icon.png',
    platforms: ['mac'],
    status: 'shipped',
    primaryColor: 'from-rose-500 to-pink-600',
    accentColor: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20',
    screenshots: [
      { src: '/apps/screenhole/screenshots/01-hero.png', alt: 'ScreenHole camera overlay floating above a Mac desktop' },
      { src: '/apps/screenhole/screenshots/02-picker.png', alt: 'Source picker — screen, window, or custom area' },
      { src: '/apps/screenhole/screenshots/03-controls.png', alt: 'Recording controls panel and timer' },
      { src: '/apps/screenhole/screenshots/04-themes.png', alt: 'Five animated gradient themes for the camera ring' },
    ],
    appStoreUrl: 'https://apps.apple.com/app/id6770940835',
    websiteUrl: 'https://greenthread-ai.github.io/machole/',
    pricing: '$29.99 once-off — lifetime license on the Mac App Store',
    releaseDate: 'May 2026',
    currentVersion: '1.0.0',
    systemRequirements: 'macOS 13.0 Ventura or later (Apple Silicon & Intel)',
    privacyPolicy: {
      title: 'ScreenHole — Privacy Policy',
      lastUpdated: 'May 31, 2026',
      sections: [
        {
          heading: '1. Summary',
          content: [
            'ScreenHole ("the app", "we", "us") does not collect, transmit, or store any of your data on our servers. We do not have servers.',
            'The app runs entirely on your Mac. Your camera, microphone, and screen are captured and processed locally; recordings are written only to the location you choose at save time.',
            'ScreenHole is published by Curiola Pty Ltd, a company registered in Australia, and listed on boringapps.net.',
          ],
        },
        {
          heading: '2. Camera',
          content:
            'ScreenHole accesses your camera to display your face in the on-screen overlay and, if you choose, include it in screen recordings. The camera feed — including any on-device background blur, auto-frame, or close-up processing — is handled entirely on your Mac. It is never transmitted off your device.',
        },
        {
          heading: '3. Microphone',
          content:
            'ScreenHole accesses your microphone to capture audio for screen recordings and to drive the audio-reactive pulse on the overlay. Audio is processed entirely on your Mac. It is never transmitted off your device.',
        },
        {
          heading: '4. Screen recording',
          content:
            'ScreenHole accesses your screen, application windows, or selected areas to record them. Recordings exist only in the location you choose when you save them. They are never transmitted off your Mac.',
        },
        {
          heading: '5. Files you create',
          content:
            'Recordings written by ScreenHole live wherever you choose to save them. The app does not upload, copy, or share these files with any third party.',
        },
        {
          heading: '6. What ScreenHole sends over the network',
          content:
            'Nothing. The app makes no network requests at runtime. There are no analytics requests, no crash report uploads, no licence checks, and no update pings.',
        },
        {
          heading: '7. What we do not do',
          content: [
            '• We do not collect personally identifiable information.',
            '• We do not use analytics or telemetry SDKs of any kind.',
            '• We do not use third-party crash reporters.',
            '• We do not track you across apps or websites.',
            '• We do not sell, share, or process any data.',
            '• We do not have user accounts or require sign-in.',
            '• We do not run any backend service that the app talks to.',
          ],
        },
        {
          heading: '8. App Store privacy declarations',
          content:
            'The "Privacy" section on ScreenHole\'s Mac App Store listing is set to "No data collected". The statements in this policy match those declarations. If you find a discrepancy, please email us — we want to know.',
        },
        {
          heading: '9. Children\'s privacy',
          content:
            'ScreenHole does not knowingly collect any information from anyone — children included — because it does not collect information at all.',
        },
        {
          heading: '10. Changes to this policy',
          content:
            'If we materially change how the app handles data, this page will be updated and the "Last updated" date above will change. Because ScreenHole doesn\'t collect or transmit data today, any change in that direction would be a substantive one and would be communicated in the app\'s release notes.',
        },
        {
          heading: '11. Contact',
          content: [
            'If you have questions about this policy or the app\'s behaviour, please contact:',
            'Curiola Pty Ltd',
            'Email: hello@boringapps.net',
            'Web: https://boringapps.net/apps/screenhole',
          ],
        },
      ],
    },
    support: {
      intro:
        'ScreenHole is built and maintained by Curiola Pty Ltd. It runs entirely on your Mac — there is no account to recover and no server to be down. Most things you might want to know are covered below; if not, email us.',
      contactEmail: 'hello@boringapps.net',
      sections: [
        {
          heading: 'Permissions & setup',
          content: [
            'ScreenHole needs three macOS permissions, granted under System Settings → Privacy & Security: Camera (for the overlay), Microphone (for recording audio and the pulse animation), and Screen Recording (to capture your screen).',
            'After you enable Screen Recording, macOS requires ScreenHole to be restarted before the permission takes effect — the app will prompt you to do so.',
            'All three are requested as they are first needed. ScreenHole only starts recording once the access it needs is granted.',
          ],
        },
        {
          heading: 'Common questions',
          content: [
            'Where are my recordings saved? — Wherever you choose in the Save dialog when a recording finishes. ScreenHole never uploads or copies them anywhere else.',
            'Why does my face appear in the recording? — That\'s the point: the camera overlay is captured as part of the screen. The controls, picker, countdown, and area-select windows are content-protected, so they stay out of the recording — only your overlay and your chosen screen content are captured.',
            'Can I record system audio? — Yes. ScreenHole mixes microphone and system audio into the recording; toggle system audio on or off in the controls before you start. (System-audio capture needs macOS 13 or later.)',
            'What format are recordings? — An .mp4 (H.264) where macOS can encode it, falling back to .webm when it can\'t. If a system ffmpeg is installed, ScreenHole re-encodes the finished recording to a smaller .mp4; if ffmpeg is missing the original is saved unchanged, so a recording is never lost.',
            'What are the keyboard shortcuts? — ⌘⇧R record, ⌘⇧P pause, ⌘⇧M mute, ⌘⇧E toggle camera.',
            'Does anything leave my Mac? — No. Camera, microphone, and screen capture are all processed locally, and the app makes no network calls.',
          ],
        },
        {
          heading: 'Report a bug or request a feature',
          content:
            'Email hello@boringapps.net with your macOS version, the version of ScreenHole, and a description of what you saw vs what you expected. A screenshot of the moment the issue happened helps. We read every message.',
        },
        {
          heading: 'Direct contact',
          content:
            'For licensing questions, bulk-licence enquiries, partnership or press, or anything not covered above, email hello@boringapps.net.',
        },
      ],
    },
  },
  {
    id: 'whisply',
    name: 'Whisply',
    tagline: 'Local audio transcription, native and offline.',
    description:
      'A native macOS transcription app that turns audio and video into text on-device — drag a file in, get a clean transcript out. No cloud round-trip, no upload, no account.',
    extendedDescription:
      "Whisply runs OpenAI's Whisper model entirely on your Mac via whisper.cpp — every byte of audio stays on your device. Drag any .mp3, .wav, .m4a, .flac, .ogg, or video file onto the window and Whisply transcribes it locally; play back from any sentence with click-to-seek; export the result as plain text, Markdown with timestamps, or SRT subtitles. There's a built-in recorder for the microphone and a separate one for meeting audio (Zoom, Meet, Teams) via ScreenCaptureKit — useful when you want the transcript of a call without trusting anyone else with the recording.",
    features: [
      'On-device transcription via whisper.cpp — no cloud round-trip, no upload, no API key.',
      'Drag-and-drop or Cmd+O to import; multi-file queue processes in order with cancel + per-file progress.',
      'Built-in recorder: microphone, or system audio (Zoom / Google Meet / Teams) via ScreenCaptureKit.',
      'Inline audio player with click-to-seek timestamps and the playing segment highlighted as you go.',
      'Export to plain text, Markdown with timestamps, or SRT subtitles. Cmd+E from any transcript.',
      'Video support too — drop a .mp4, .mov, .mkv, .avi, or .webm and Whisply pulls the audio out (ffmpeg helps if installed).',
      'SwiftUI + SwiftData, signed for the Mac App Store sandbox. No accounts, no analytics, no telemetry.',
    ],
    plannedFeatures: [
      'Speaker diarisation — automatically detect who said what and label segments with Speaker 1 / Speaker 2 / etc.',
      'Per-speaker filtering — jump straight to one speaker\'s lines, or export a single speaker\'s transcript on its own.',
    ],
    iconImage: '/apps/whisply/icon.png',
    platforms: ['mac'],
    status: 'coming-soon',
    primaryColor: 'from-amber-500 to-orange-600',
    accentColor: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    pricing: 'AU$14.99 once-off — on the Mac App Store',
    systemRequirements: 'macOS 14 Sonoma or later (Apple Silicon & Intel)',
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
    status: 'shipped',
    primaryColor: 'from-emerald-500 to-teal-600',
    accentColor: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    screenshots: [
      { src: '/apps/repsense/screenshots/iphone/01-today.png', alt: "Today's workout, ready to go" },
      { src: '/apps/repsense/screenshots/iphone/02-set-logging.png', alt: 'Easy, Controlled, Hard, Pain — log how each set felt' },
      { src: '/apps/repsense/screenshots/iphone/03-deload.png', alt: 'Real deload detection — knows when to back off' },
      { src: '/apps/repsense/screenshots/iphone/04-suggestion.png', alt: 'Smart weight suggestions with plate-aware increments' },
      { src: '/apps/repsense/screenshots/iphone/05-history.png', alt: 'Every rep tracked — progression at a glance' },
      { src: '/apps/repsense/screenshots/iphone/06-summary.png', alt: 'Post-workout recap in seconds' },
      { src: '/apps/repsense/screenshots/iphone/07-settings.png', alt: 'Built around your kit — equipment, increments, constraints' },
    ],
    appStoreUrl: 'https://apps.apple.com/app/id6771250351',
    pricing: 'AU$9.99 once-off — on the App Store',
    releaseDate: 'May 2026',
    currentVersion: '1.0.0',
    systemRequirements: 'iOS 16+, Android 12+',
    privacyPolicy: {
      title: 'Repsense — Privacy Policy',
      lastUpdated: 'May 25, 2026',
      sections: [
        {
          heading: '1. Summary',
          content: [
            'Repsense ("the app", "we", "us") does not collect, transmit, or store any of your data on our servers. We do not have servers.',
            'The app runs entirely on your device. Workout history, bodyweight, settings, and exercise state are written to a local SQLite database that lives only on the device you installed the app on.',
            'Repsense is published by The IT Dept Pty Ltd (ABN 12 665 405 505), a company registered in Australia, under the BoringApps project (boringapps.net).',
          ],
        },
        {
          heading: '2. What Repsense stores on your device',
          content: [
            '• Workout sessions, set logs, effort ratings, and progression history.',
            '• Bodyweight entries you record.',
            '• Profile settings: available equipment, plate increments, units (kg / lb), injuries.',
            '• Exercise calibration state and per-role guide weights.',
            'All of this lives in a single SQLite file (`repsense.db`) inside the app\'s private storage. It is removed when you uninstall the app.',
          ],
        },
        {
          heading: '3. What Repsense sends over the network',
          content: [
            'Nothing. The app makes no network requests at runtime. No accounts, no analytics, no telemetry, no crash reporters, no licence checks, no update pings.',
            'If you choose to back up your device through the operating system\'s normal mechanisms (iCloud Backup on iOS, Google\'s app data backup on Android), your Repsense database may be included in that backup. That is between you and your OS vendor; we never see it.',
          ],
        },
        {
          heading: '4. What we do not do',
          content: [
            '• We do not collect personally identifiable information.',
            '• We do not use analytics or telemetry SDKs of any kind.',
            '• We do not use third-party crash reporters.',
            '• We do not track you across apps or websites.',
            '• We do not sell, share, or process any data.',
            '• We do not have user accounts.',
            '• We do not run any backend service that the app talks to.',
          ],
        },
        {
          heading: '5. App Store privacy declarations',
          content:
            'The "Privacy" section on Repsense\'s App Store and Google Play listings is set to "No data collected". The statements in this policy match those declarations. If you find a discrepancy, please email us — we want to know.',
        },
        {
          heading: '6. Children\'s privacy',
          content:
            'Repsense is a strength training tool aimed at adult and adolescent lifters. It does not knowingly collect any information from anyone — children included — because it does not collect information at all.',
        },
        {
          heading: '7. Third-party services',
          content:
            'Repsense does not integrate with any third-party services. There are no fitness-platform integrations, no social sharing, no leaderboards, no remote sync.',
        },
        {
          heading: '8. Changes to this policy',
          content:
            'If we materially change how the app handles data, this page will be updated and the "Last updated" date above will change. Because Repsense doesn\'t collect or transmit data today, any change in that direction would be a substantive one and would be communicated in the app\'s release notes.',
        },
        {
          heading: '9. Contact',
          content: [
            'If you have questions about this policy or the app\'s behaviour, please contact:',
            'The IT Dept Pty Ltd',
            'Email: hello@boringapps.net',
            'Web: https://boringapps.net/apps/repsense',
          ],
        },
      ],
    },
    support: {
      intro:
        'Repsense is built and maintained by The IT Dept Pty Ltd. It runs entirely on your device — there is no account to recover and no server to be down. Most things you might want to know are covered below; if not, email us.',
      contactEmail: 'hello@boringapps.net',
      sections: [
        {
          heading: 'Common questions',
          content: [
            'How does Repsense decide what I lift? — Onboarding asks for your available equipment, units, and any injuries. From there the engine picks exercises that fit your kit, suggests starting weights, and adapts each session based on how the last one felt (Easy / Controlled / Hard / Pain).',
            'Where is my data stored? — In a single SQLite file inside the app\'s private storage on your device. It never leaves your phone or tablet. Uninstalling the app deletes the file.',
            'Can I back it up? — Whatever your OS does for app data backups (iCloud Backup on iOS, Google\'s native app backup on Android) will include the Repsense database. There is no in-app export today; tell us if that matters to you.',
            'Why is the app suggesting a deload? — Repsense triggers a deload when accumulated fatigue, RPE drift, and weekly volume against per-pattern ceilings all line up. It is your call whether to accept it — tap "Not Now" if you want to push through.',
            'A new exercise is starting really light. Is that a bug? — No. New or reintroduced lifts go through a brief calibration: two clean exposures at moderate effort, then the app promotes them into the main programme with realistic loads.',
            'What if my plates don\'t snap to 2.5 kg? — Settings → Weight Configuration lets you set the increment per equipment type (barbell, dumbbell, machine / cable). Micro-plate fans can drop it below the defaults.',
          ],
        },
        {
          heading: 'Report a bug or request a feature',
          content:
            'Email hello@boringapps.net with the device + iOS / Android version, the version of Repsense (Settings → About), and a description of what you saw vs what you expected. If you can include a screenshot of the moment the issue happened, even better. We read every message.',
        },
        {
          heading: 'Direct contact',
          content:
            'For licensing questions, bulk-licence enquiries, partnership or press, or anything not covered above, email hello@boringapps.net.',
        },
      ],
    },
  },
  {
    id: 'sextant',
    name: 'Sextant',
    tagline: 'Kubernetes for iPhone and iPad.',
    description:
      'A native Kubernetes client for your phone. Browse pods, tail logs, exec in, manage Helm releases, port-forward — all over a direct device-to-cluster connection with no backend in between.',
    extendedDescription:
      "Sextant talks directly to your clusters' Kubernetes API servers from your phone. Browse every built-in resource and any CRD the cluster exposes, view Helm releases (values, manifests, revision history), tail container logs, exec into pods, open port-forwards and reach internal services in Safari. There is no Sextant cloud, no Sextant backend, no account to create — your phone is the kubectl. The full client source is published so you can verify exactly what it does on your device.",
    features: [
      'Browse pods, deployments, services, nodes, events, and any CRD your cluster exposes.',
      'Tail container logs live; exec into a pod and run a shell.',
      'Helm release management — values, rendered manifests, NOTES.txt, full revision history.',
      'Port-forward to a pod or service and open the local endpoint in Safari.',
      'Credentials live in the iOS Keychain (Android Keystore on Android) and never leave the device.',
      'Built-in demo cluster — a fully-functional in-memory Kubernetes environment to try every feature before connecting your own.',
      'iPad-optimised: permanent sidebar in landscape, drawer in portrait, full Liquid Glass on iOS 26.',
      'Zero analytics, zero telemetry, zero crash reporters. Open source under FSL-1.1-MIT.',
    ],
    iconImage: '/apps/sextant/icon.png',
    platforms: ['ios', 'android'],
    status: 'shipped',
    primaryColor: 'from-blue-500 to-indigo-600',
    accentColor: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    screenshots: [
      { src: '/apps/sextant/screenshots/iphone/01-dashboard.png', alt: 'Cluster dashboard — your cluster at a glance' },
      { src: '/apps/sextant/screenshots/iphone/02-pods-list.png', alt: 'Browse every pod, every resource, every CRD' },
      { src: '/apps/sextant/screenshots/iphone/03-pod-detail.png', alt: 'Inspect a pod in detail — containers, conditions, restarts' },
      { src: '/apps/sextant/screenshots/iphone/04-logs.png', alt: 'Stream container logs live from your phone' },
      { src: '/apps/sextant/screenshots/iphone/05-helm-list.png', alt: 'Helm releases — values, manifests, history' },
      { src: '/apps/sextant/screenshots/iphone/06-helm-detail.png', alt: 'Helm release detail with revision history and notes' },
      { src: '/apps/sextant/screenshots/iphone/07-exec.png', alt: 'Exec straight into a running container' },
      { src: '/apps/sextant/screenshots/iphone/08-drawer.png', alt: 'Switch clusters and namespaces from the sidebar' },
    ],
    sourceUrl: 'https://github.com/boringapps-net/sextant',
    appStoreUrl: 'https://apps.apple.com/au/app/sextant/id6772725984',
    pricing: 'AU$14.99 once-off — on the App Store',
    releaseDate: 'May 2026',
    currentVersion: '1.0.0',
    systemRequirements: 'iOS 16.4+, iPadOS 16.4+, Android 8+',
    privacyPolicy: {
      title: 'Sextant — Privacy Policy',
      lastUpdated: 'May 24, 2026',
      sections: [
        {
          heading: '1. Summary',
          content: [
            'Sextant ("the app", "we", "us") does not collect, transmit, or store any of your data on our servers. We do not have servers.',
            'The app runs entirely on your device and connects only to the Kubernetes clusters that you explicitly configure. Your credentials never leave your device.',
            'Sextant is published by The IT Dept Pty Ltd (ABN 12 665 405 505), a company registered in Australia, under the BoringApps project (boringapps.net).',
          ],
        },
        {
          heading: '2. What Sextant stores on your device',
          content: [
            '• Cluster connection metadata (cluster name, server URL, namespace selection, UI preferences) is stored in your device\'s standard app storage.',
            '• Cluster credentials (bearer tokens, kubeconfig passwords, client certificates, custom CA bundles) are stored in the iOS Keychain (or Android Keystore on Android). These never leave your device.',
            'All of this data is removed when you uninstall the app.',
          ],
        },
        {
          heading: '3. What Sextant sends over the network',
          content: [
            'When you interact with one of your configured clusters, Sextant makes HTTPS requests directly from your device to that cluster\'s Kubernetes API server. The URL, the authentication credentials, and the request payload are all defined by your cluster configuration — not by us. We never see, intercept, or proxy this traffic.',
            'The app makes no other network requests. There are no analytics requests, no crash report uploads, no licence checks, no update pings.',
          ],
        },
        {
          heading: '4. What we do not do',
          content: [
            '• We do not collect personally identifiable information.',
            '• We do not use analytics or telemetry SDKs of any kind.',
            '• We do not use third-party crash reporters.',
            '• We do not track you across apps or websites.',
            '• We do not sell, share, or process any data.',
            '• We do not have user accounts.',
            '• We do not run any backend service that the app talks to.',
          ],
        },
        {
          heading: '5. Verifying these claims',
          content:
            'The Sextant source code is publicly available at github.com/boringapps-net/sextant under the Functional Source License (FSL-1.1-MIT). You — or anyone you trust to read code — can audit the entire app and verify that the statements in this policy are accurate. The README\'s "Why the source is here" section lists the specific files to look at.',
        },
        {
          heading: '6. Children\'s privacy',
          content:
            'Sextant is a professional tool for software engineers and is not directed at children under 13. We do not knowingly collect any information from anyone.',
        },
        {
          heading: '7. Third-party services',
          content:
            'Sextant does not integrate with any third-party services. The only network destinations the app communicates with are the Kubernetes API server URLs that you yourself enter into the cluster configuration.',
        },
        {
          heading: '8. Changes to this policy',
          content:
            'If we materially change how the app handles data, this page will be updated and the "Last Updated" date above will change. Because Sextant doesn\'t collect or transmit data today, any change in that direction would be a substantive one and would be communicated in the app\'s release notes.',
        },
        {
          heading: '9. Contact',
          content: [
            'If you have questions about this policy or the app\'s behaviour, please contact:',
            'Nick Pratley — The IT Dept Pty Ltd',
            'Email: hello@boringapps.net',
            'Web: https://boringapps.net/apps/sextant',
          ],
        },
      ],
    },
    support: {
      intro:
        "Sextant is built and maintained by The IT Dept Pty Ltd. The full source is published — most questions can be answered by reading the code, and bugs are tracked publicly on GitHub.",
      contactEmail: 'hello@boringapps.net',
      sourceUrl: 'https://github.com/boringapps-net/sextant',
      sections: [
        {
          heading: 'Report a bug or request a feature',
          content: [
            'Open an issue on GitHub: github.com/boringapps-net/sextant/issues. Include the cluster type (GKE, EKS, AKS, k3s, kind, on-prem etc.), the Kubernetes server version, and a screenshot if the bug is visual.',
            'For anything privacy- or security-sensitive — including suspected vulnerabilities — email hello@boringapps.net directly instead of filing a public issue.',
          ],
        },
        {
          heading: 'Common questions',
          content: [
            'Does Sextant store my credentials? — Bearer tokens, kubeconfig passwords, and client certificates are written to the iOS Keychain (Android Keystore on Android) and never leave your device. See src/lib/storage/clusters.ts in the public source.',
            'Why won\'t my cluster connect? — Sextant connects directly from your phone to the API server URL you entered, so the server must be reachable from your device\'s network. Common causes: the API server is behind a VPN, the certificate chain isn\'t trusted (paste your custom CA into the cluster config), or the bearer token has expired. The error toast usually identifies which.',
            'Does Sextant work with my managed Kubernetes? — Yes — GKE, EKS, AKS, OpenShift, k3s, kind, microk8s, Rancher, and any on-prem distribution that speaks the Kubernetes API. Authenticate with bearer tokens, basic auth, client certificates, or any kubeconfig you can paste in.',
            'Can I try Sextant without exposing my cluster? — Yes. The built-in Demo Cluster is a fully-functional in-memory Kubernetes environment seeded with pods, deployments, services, events, and Helm releases. Tap "Use Demo Cluster" on the onboarding screen.',
          ],
        },
        {
          heading: 'Direct contact',
          content:
            'For licensing questions, partnership enquiries, or anything not covered above, email hello@boringapps.net.',
        },
      ],
    },
  },
];

import { LegalDocument } from '../types';

export const CORPORATE_INFO = {
  brandName: 'BoringApps.net',
  partners: [
    {
      name: 'The IT Dept Pty Ltd',
      abn: '12 665 405 505',
      address: 'Sydney, NSW, Australia',
    },
    {
      name: 'CURIOLA PTY LTD',
      abn: '85 683 066 748',
      address: 'Melbourne, VIC, Australia',
    },
  ],
  contactEmail: 'hello@boringapps.net',
};

export const PRIVACY_POLICY: LegalDocument = {
  title: 'Privacy Policy',
  lastUpdated: 'May 24, 2026',
  sections: [
    {
      heading: '1. Summary',
      content: [
        'BoringApps.net is a small project run by two Australian developers — Nick Pratley (The IT Dept Pty Ltd, ABN 12 665 405 505) and the team behind CURIOLA PTY LTD (ABN 85 683 066 748).',
        "Our apps run on your device. We don't operate a backend, we don't run analytics, and we don't collect or transmit your data. Each app may have its own privacy policy that goes into the detail for that app — this page covers the website itself and our overall stance.",
      ],
    },
    {
      heading: '2. What this website collects',
      content: [
        'This site is a static set of pages describing our apps. It does not set tracking cookies, it does not run analytics, and it does not log visitors. It uses only the standard hosting access logs the static host keeps for short-term operational reasons.',
        'If you email us at hello@boringapps.net, we keep your email and the contents of your message for as long as we need to answer you.',
      ],
    },
    {
      heading: '3. What our apps collect',
      content: [
        'The short answer: nothing leaves your device unless an app explicitly tells you it will.',
        'For app-specific detail, see the privacy policy linked on each app\'s page. The summary for each currently-shipped app:',
        '• ScreenHole — records audio and video locally and saves to wherever you choose on your Mac. No network calls at runtime.',
        '• Sextant — talks directly from your phone to the Kubernetes clusters you configure. Your credentials live in the iOS Keychain (or Android Keystore) and never leave the device. No analytics, telemetry, or crash reporters. Full source published.',
        '• Repsense — workout history is stored locally in an on-device SQLite database. No accounts, no sync, no analytics.',
      ],
    },
    {
      heading: '4. Purchases and the app stores',
      content: [
        'If you buy one of our paid apps via the App Store or Google Play, the store handles your payment — we never see your card details. The platform passes us aggregate sales data and anonymous crash records, which we use only to fix bugs.',
        'If you buy a license directly through this site, we record the transaction (email address, license key, timestamp) so we can email you the key and validate it. We don\'t share that information with anyone else.',
      ],
    },
    {
      heading: '5. Your rights',
      content: [
        'You\'re entitled to ask what we have on file, ask us to correct it, or ask us to delete it. If you\'re in Australia these rights come from the Privacy Act 1988 (Cth); if you\'re in the EEA they come from the GDPR. Either way the request goes to the same place — hello@boringapps.net.',
      ],
    },
    {
      heading: '6. Changes',
      content:
        'If we change how we handle data we\'ll update this page and bump the "Last updated" date above. Material changes that affect a shipped app will also show up in that app\'s release notes.',
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocument = {
  title: 'Terms of Service',
  lastUpdated: 'May 24, 2026',
  sections: [
    {
      heading: '1. Who we are',
      content: [
        'BoringApps.net is a label used by two small Australian companies — The IT Dept Pty Ltd (ABN 12 665 405 505) and CURIOLA PTY LTD (ABN 85 683 066 748) — to publish their utility apps together.',
        'By using this site or any app we publish under the BoringApps brand, you agree to these terms. If you don\'t, don\'t use them.',
      ],
    },
    {
      heading: '2. Licenses',
      content: [
        'Buying a license for one of our paid apps gives you a personal, non-transferable right to install and run the software on your own devices. Commercial use is fine.',
        'The source code, trade marks, and design of the apps stay ours unless we\'ve explicitly published the source under a permissive licence (Sextant, for example, is published under FSL-1.1-MIT — see the licence terms on its repository).',
      ],
    },
    {
      heading: '3. Refunds and consumer rights',
      content: [
        'If you bought via the App Store or Google Play, refund requests go through the store. We\'ll honour anything the store decides.',
        'If you bought directly from us and something doesn\'t work as described, get in touch at hello@boringapps.net and we\'ll refund you. Australian customers also have the statutory guarantees set out in the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) — those can\'t be excluded.',
      ],
    },
    {
      heading: '4. Limits',
      content: [
        'Our apps process files, network traffic, and user-supplied configuration on your device. We try hard to make them reliable, but we can\'t guarantee they\'ll handle every edge case in your environment.',
        'We\'re not liable for indirect or consequential losses, and our total liability for any one app is capped at what you paid for it.',
      ],
    },
    {
      heading: '5. Reverse engineering',
      content:
        'For closed-source apps, please don\'t decompile, repackage, or redistribute the binaries. For open-source apps (currently Sextant), follow the licence published in the repository.',
    },
    {
      heading: '6. Governing law',
      content:
        'These terms are governed by the law of New South Wales, Australia.',
    },
  ],
};

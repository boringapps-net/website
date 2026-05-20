import { LegalDocument } from '../types';

export const CORPORATE_INFO = {
  jointVentureName: 'BoringApps.net',
  partners: [
    {
      name: 'The IT Dept Pty Ltd',
      abn: '12 665 405 505',
      address: 'Sydney, NSW, Australia'
    },
    {
      name: 'CURIOLA PTY LTD',
      abn: '85 683 066 748',
      address: 'Melbourne, VIC, Australia'
    }
  ],
  contactEmail: 'legal@boringapps.net',
  supportEmail: 'support@boringapps.net'
};

export const PRIVACY_POLICY: LegalDocument = {
  title: 'Privacy Policy',
  lastUpdated: 'May 20, 2026',
  sections: [
    {
      heading: '1. Overview of Our Offline-First Privacy Guarantee',
      content: [
        'At BoringApps.net (a collaboration between The IT Dept Pty Ltd and CURIOLA PTY LTD), we believe that utility applications should be run where they belong: on your computer or mobile screen—not in the cloud. Our core design ethos is "offline-first".',
        'When you use Machole, Repsense, or any other utility under the BoringApps brand, your camera, microphone, screen captures, workout history, and other inputs are processed 100% locally on your device. Recordings, training data, and personal content are never transmitted to our servers, stored in commercial databases of ours, or rented/sold to third-party institutions.'
      ]
    },
    {
      heading: '2. Joint Venture Structure & ABN Disclosures',
      content: [
        'BoringApps.net operates as a joint venture initiative co-funded and managed under Australian regulations by the following registered entities:',
        '• The IT Dept Pty Ltd (ABN 12 665 405 505) based in Melbourne / Sydney, Australia.',
        '• CURIOLA PTY LTD (ABN 85 683 066 748) based in Melbourne, Australia.',
        'Under this collaborative structure, both Pty Ltd corporations act as joint-controllers and operators of the product channels, digital storefronts, and commercial transactions.'
      ]
    },
    {
      heading: '3. What Limited Information We Collect',
      content: [
        'Although our utility applications process all user-data locally, we may gather sparse metadata to handle licensing and improve overall product reliability:',
        '• Transaction and Licensing Metadata: If you purchase a lifetime license or pro tier through our web checkout or mobile app stores, we process purchase tokens, subscription timestamps, and payment platform identifiers (primarily administered securely via Google Play Billing, Apple App Store Checkout, or Stripe). We never see or store your payment card numbers.',
        '• Store Telemetry & Crash Reporting: By default, platform app stores (Apple App Store and Google Play Console) automatically assemble crash records and anonymous system specifications when a program fails. This telemetry is aggregated, strictly de-identified, and strictly accessible only to our development team to resolve memory bugs.',
        '• Optional Support Inquiries: When you transmit support tickets, legal complaints, or custom feature requests to support@boringapps.net, we process your email address, name, and any text logs you provide solely to remediate your issue.'
      ]
    },
    {
      heading: '4. Australian Privacy Principles (APPs) Accordance',
      content: [
        'As registered Australian proprietary corporations, we strive to conform strictly with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). Under these guidelines, you possess strong rights to verify what limited personal connection metrics we retain (such as licensing details or support emails), request corrections, or demand complete database scrubbing.',
        'If you belong to the European Economic Area (EEA), you enjoy parallel General Data Protection Regulation (GDPR) rights to easily inspect, revoke, download, or delete any licensing metadata stored on our authentication nodes. Direct all security queries to legal@boringapps.net.'
      ]
    },
    {
      heading: '5. Technical Cookies on Our Website',
      content: [
        'BoringApps.net uses clean, light-weight, native browser storage (localStorage) only to persist configuration layouts (like active page states, interface themes, or simulator configurations). We do not employ third-party advertising trackers, targeting cookies, or behavioral beacons, ensuring high-speed access.'
      ]
    },
    {
      heading: '6. Modifications and Amendments',
      content: 'We reserve the structural right to adapt this Privacy Policy at any time to align with legal developments or app updates. The current active version is perpetually visible alongside the relevant Australian Business Numbers in our web document vault.'
    }
  ]
};

export const TERMS_OF_SERVICE: LegalDocument = {
  title: 'Terms of Service',
  lastUpdated: 'May 20, 2026',
  sections: [
    {
      heading: '1. Agreement to Terms and Licensing Scope',
      content: [
        'By utilizing our website (BoringApps.net) or installing any utility software issued under the BoringApps brand, you agree to these legally binding Terms of Service.',
        'These terms represent a contract between you (the licensee) and the joint venture partners: The IT Dept Pty Ltd (ABN 12 665 405 505) and CURIOLA PTY LTD (ABN 85 683 066 748). If you do not agree, do not use our services.'
      ]
    },
    {
      heading: '2. Grant of Intellectual Property Licenses',
      content: [
        '• For Purchased Utilities: Buying a license to Machole, Repsense, or any other BoringApps utility grants you a non-exclusive, non-transferable, and revocable personal installation license to execute the software on compatible personal or professional devices.',
        '• Commercial Use: Unless clearly designated otherwise in custom enterprise plans, standard lifetime licenses extend fully both to individual consumer and commercial professional development work.',
        '• Intellectual Property: All application assets, brand designs, core codebase, algorithmic patterns, names, and trademark vectors remain the absolute proprietary intellectual property of The IT Dept Pty Ltd and CURIOLA PTY LTD.'
      ]
    },
    {
      heading: '3. Australian Consumer Law & Guarantee Frameworks',
      content: [
        'Our commercial software packages arrive with exhaustive statutory guarantees that cannot be excluded under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)). This includes visual standards of merchantability, functional matches to marketing descriptions, and fitness for stated unsexy software tasks.',
        '• Faults: You are entitled to a complete refund or replacement licensing key for any terminal software failures that constitute a major technical breakdown. We respect consumer refund windows on respective storefronts.',
        '• International Customers: Users placing transactions outside the Commonwealth of Australia acknowledge standard digital commerce protections but recognize that local statutory warranties are anchored primarily under Australian federal frameworks.'
      ]
    },
    {
      heading: '4. Limitation of Liability & Indemnification Warnings',
      content: [
        'Our utilities are designed specifically to run offline, modifying local file pathways, renaming files, parsing system schedulers, and sanitizing clipboard text based on user directions. Because directory operations and task automation are inherently subject to user input configuration errors (such as incorrect regex criteria or accidental deletion schedules):',
        '• We assume NO responsibility for accidental file-structure overrides, data deletion, cron configuration system lockups, or cryptographic hash mismatches stemming from manual operator configurations.',
        '• To the absolute maximum threshold permitted by Australian Federal Law and state jurisdictions, the aggregate commercial liability of The IT Dept Pty Ltd and CURIOLA PTY LTD shall not exceed the original Australian dollar transaction cost paid by you for the specific application license of ours.'
      ]
    },
    {
      heading: '5. Code Decompilation & Reverse-Engineering',
      content: [
        'By running our software packages, you agree not to reproduce, dismantle, reverse-engineer, decompile, or bypass cryptographic license managers within any BoringApps product. You shall not redistribute altered binaries as competitor products, or run unlicensed modifications on multi-user corporate nodes.'
      ]
    },
    {
      heading: '6. Governing Jury Selection & Arbitration State',
      content: 'These agreements, terms, and licenses are governed, construed, and enforced exclusively in accordance with the laws of the State of New South Wales (NSW) and the State of Victoria (VIC), Australia. All parties irrevocably submit to the non-exclusive jurisdiction of the respective localized courts.'
    }
  ]
};

export type PageId = 'home' | 'app' | 'privacy' | 'terms' | 'about';

export interface AppMetadata {
  id: string;
  name: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  features: string[];
  iconName: string; // Used to look up Lucide icons dynamically
  platforms: ('ios' | 'android' | 'mac' | 'windows' | 'web')[];
  primaryColor: string; // Tailwind class like "from-amber-500 to-orange-600"
  accentColor: string;  // Tailwind text color like "text-amber-500"
  bgColor: string;      // Tailwind bg like "bg-amber-50/10"
  borderColor: string;  // Tailwind border like "border-amber-500/20"
  screenshotType: 'renamer' | 'compressor' | 'csv' | 'clipboard' | 'cron' | 'integrity';
  pricing: string;
  releaseDate: string;
  currentVersion: string;
  systemRequirements: string;
  fileSize: string;
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string | string[];
  }[];
}

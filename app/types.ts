export type Platform = 'ios' | 'android' | 'mac' | 'windows' | 'web';

export type AppStatus = 'shipped' | 'coming-soon';

export interface AppMetadata {
  id: string;
  name: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  features: string[];
  iconImage: string;
  platforms: Platform[];
  status: AppStatus;
  primaryColor: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  screenshots?: { src: string; alt: string }[];
  appStoreUrl?: string;
  websiteUrl?: string;
  pricing: string;
  releaseDate?: string;
  currentVersion?: string;
  systemRequirements: string;
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string | string[];
  }[];
}

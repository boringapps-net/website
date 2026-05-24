export type Platform = 'ios' | 'android' | 'mac' | 'windows' | 'web';

export type AppStatus = 'shipped' | 'coming-soon';

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string | string[];
  }[];
}

export interface SupportContent {
  intro: string;
  contactEmail: string;
  sourceUrl?: string;
  sections: {
    heading: string;
    content: string | string[];
  }[];
}

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
  sourceUrl?: string;
  pricing: string;
  releaseDate?: string;
  currentVersion?: string;
  systemRequirements: string;
  privacyPolicy?: LegalDocument;
  support?: SupportContent;
}

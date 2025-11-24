export const NAVIGATION_ITEMS = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
] as const;

export const API_ENDPOINTS = {
  CONTACT: '/contact',
  PROJECTS: '/projects',
  SERVICES: '/services',
} as const;

export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 0.8,
  VERY_SLOW: 1.0,
} as const;

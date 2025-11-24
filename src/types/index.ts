import { IconType } from 'react-icons';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
  category: 'Full Stack' | 'Frontend' | 'Backend';
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
  color?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

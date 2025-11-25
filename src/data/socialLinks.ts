import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
  color?: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    href: 'https://github.com/haseebpirhar',
    label: 'GitHub',
    color: 'hover:text-gray-400',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/haseeb-khan-583323325/',
    label: 'LinkedIn',
    color: 'hover:text-blue-400',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/haseebpirhar',
    label: 'Twitter',
    color: 'hover:text-blue-300',
  },
  {
    icon: FaInstagram,
    href: 'https://instagram.com/haseebpirhar2006/#',
    label: 'Instagram',
    color: 'hover:text-pink-400',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/+923367862574',
    label: 'WhatsApp',
    color: 'hover:text-green-400',
  }
];

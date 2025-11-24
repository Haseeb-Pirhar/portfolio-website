export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export const services: Service[] = [
  {
    icon: 'code',
    title: 'Web Development',
    description:
      'Creating responsive and modern websites with the latest technologies like React, Next.js, and TypeScript.',
    features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning'],
    gradient: 'from-blue-500/10 to-purple-500/10',
  },
  {
    icon: 'mobile',
    title: 'Mobile Apps',
    description:
      'Building cross-platform mobile applications with React Native and modern mobile technologies.',
    features: ['Cross Platform', 'Native Performance', 'App Store Ready'],
    gradient: 'from-green-500/10 to-blue-500/10',
  },
  {
    icon: 'globe',
    title: 'UI/UX Design',
    description:
      'Designing beautiful and intuitive user interfaces that provide exceptional user experiences.',
    features: ['User Research', 'Prototyping', 'Design Systems'],
    gradient: 'from-yellow-500/10 to-orange-500/10',
  },
];

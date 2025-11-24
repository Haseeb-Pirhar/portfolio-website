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

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    description:
      'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example-ecommerce.com',
    codeUrl: 'https://github.com/haseebpirhar/ecommerce-platform',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
    image: '/images/project2.jpg',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    demoUrl: 'https://example-tasks.com',
    codeUrl: 'https://github.com/haseebpirhar/task-manager',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A comprehensive weather application with forecasts, maps, and detailed analytics.',
    image: '/images/project3.jpg',
    technologies: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
    demoUrl: 'https://example-weather.com',
    codeUrl: 'https://github.com/haseebpirhar/weather-dashboard',
    featured: true,
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Social Media App',
    description:
      'A modern social media platform with real-time messaging, post sharing, and user profiles.',
    image: '/images/Hero3.jpg',
    technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'AWS'],
    demoUrl: 'https://example-social.com',
    codeUrl: 'https://github.com/haseebpirhar/social-media-app',
    featured: false,
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website with modern animations and beautiful design.',
    image: '/images/project1.jpg',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    demoUrl: 'https://haseebpirhar.com',
    codeUrl: 'https://github.com/haseebpirhar/portfolio',
    featured: false,
    category: 'Frontend',
  },
  {
    id: 6,
    title: 'Chat Application',
    description:
      'Real-time chat application with group messaging, file sharing, and video calls.',
    image: '/images/project2.jpg',
    technologies: ['React', 'Socket.io', 'WebRTC', 'Express'],
    demoUrl: 'https://example-chat.com',
    codeUrl: 'https://github.com/haseebpirhar/chat-app',
    featured: true,
    category: 'Full Stack',
  },
];

import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiEye, HiCode, HiStar } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      codeUrl: '#',
      featured: true,
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
      image: '/images/project2.jpg',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      demoUrl: '#',
      codeUrl: '#',
      featured: false,
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A comprehensive weather application with forecasts, maps, and detailed analytics.',
      image: '/images/project3.jpg',
      technologies: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
      demoUrl: '#',
      codeUrl: '#',
      featured: true,
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A modern social media platform with real-time messaging, post sharing, and user profiles.',
      image: '/images/Hero3.jpg',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'AWS'],
      demoUrl: '#',
      codeUrl: '#',
      featured: false,
      category: 'Full Stack'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern animations and beautiful design.',
      image: '/images/project1.jpg',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
      demoUrl: '#',
      codeUrl: '#',
      featured: false,
      category: 'Frontend'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with group messaging, file sharing, and video calls.',
      image: '/images/project2.jpg',
      technologies: ['React', 'Socket.io', 'WebRTC', 'Express'],
      demoUrl: '#',
      codeUrl: '#',
      featured: true,
      category: 'Full Stack'
    },
  ];

  const getPlaceholderImage = (index: number) => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='100%25' height='100%25' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23d1d5db' text-anchor='middle' dy='.3em'%3EProject ${index + 1}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section id="projects" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-accent/5 rounded-full blur-2xl"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Code Symbols */}
        <div className="absolute inset-0">
          {['<', '>', '{', '}', '(', ')'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10 text-4xl font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-primary/20"
            >
              My Work
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Here are some of my recent projects that showcase my skills and experience
              in building modern web applications with cutting-edge technologies.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-accent to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                  >
                    <HiStar className="text-sm" />
                    Featured
                  </motion.div>
                )}

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/30 rounded-3xl overflow-hidden transition-all duration-500 group-hover:bg-gray-800/70 group-hover:shadow-2xl group-hover:shadow-primary/10">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = getPlaceholderImage(index);
                      }}
                    />
                    
                    {/* Overlay with Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-primary transition-all duration-300 border border-white/30"
                        >
                          <HiEye className="text-xl" />
                        </motion.a>
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-secondary transition-all duration-300 border border-white/30"
                        >
                          <FaGithub className="text-xl" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="text-gray-300 mb-4 leading-relaxed text-sm"
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex flex-wrap gap-2 mb-4"
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-lg text-xs font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex space-x-3"
                    >
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary text-white py-2 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-primary/20 hover:border-primary/50"
                      >
                        <HiEye className="text-lg" />
                        Demo
                      </motion.a>
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-700/50 hover:bg-gray-600 text-white py-2 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-gray-600/50 hover:border-gray-500"
                      >
                        <HiCode className="text-lg" />
                        Code
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <HiCode className="text-6xl text-primary mx-auto mb-4" />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Have a Project in Mind?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  I'm always excited to work on new projects and collaborate with amazing people.
                  Let's build something great together!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Start a Project
                      <HiExternalLink className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>

                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-600 text-gray-300 hover:border-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:bg-primary/10"
                  >
                    <FaGithub className="text-lg" />
                    View All Projects
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
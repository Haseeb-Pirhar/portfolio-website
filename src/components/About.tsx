import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiLightBulb, HiHeart } from 'react-icons/hi';

const About: React.FC = () => {
  const skills = [
    'React.js', 'TypeScript', 'JavaScript', 'Node.js',
    'Tailwind CSS', 'MongoDB', 'Express.js', 'Next.js',
    'Git', 'Figma', 'PostgreSQL', 'AWS'
  ];

  const highlights = [
    {
      icon: <HiCode className="text-3xl text-primary" />,
      number: "50+",
      label: "Projects Completed"
    },
    {
      icon: <HiLightBulb className="text-3xl text-secondary" />,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: <HiHeart className="text-3xl text-accent" />,
      number: "100%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <section id="about" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 4,
                  delay: i * 0.02,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
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
              Get To Know Me
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"
            ></motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative z-10">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/Hero3.jpg"
                    alt="Haseeb Pirhar - About Me"
                    className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      console.log('Image failed to load, using fallback');
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect width='100%25' height='100%25' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23d1d5db' text-anchor='middle' dy='.3em'%3EHaseeb Pirhar%3C/text%3E%3C/svg%3E`;
                    }}
                    onLoad={() => {
                      console.log('About image loaded successfully');
                    }}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <HiCode className="text-white text-2xl" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-accent to-primary/80 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <HiLightBulb className="text-white text-xl" />
                </motion.div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl -z-10 blur-xl"></div>
              <div className="absolute top-4 left-4 w-full h-full border-2 border-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl -z-20"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
                >
                  I'm a Passionate
                  <span className="block text-primary">Web Developer</span>
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-300 text-lg leading-relaxed mb-8"
                >
                  With over 5 years of experience in web development, I specialize in creating
                  modern, responsive, and user-friendly websites. My passion lies in
                  transforming ideas into beautiful and functional digital experiences that
                  users love to interact with.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-6 py-8"
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 + index * 0.2 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-1"
                    >
                      {item.number}
                    </motion.div>
                    <div className="text-gray-400 text-sm font-medium">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10">Let's Work Together</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-center mb-12">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Skills & Technologies
              </h4>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Here are the technologies and tools I work with to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 px-4 py-3 rounded-xl text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10">
                    <span className="text-gray-300 group-hover:text-white font-medium text-sm transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
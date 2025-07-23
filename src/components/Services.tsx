import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiDeviceMobile, HiGlobeAlt, HiArrowRight } from 'react-icons/hi';

const Services: React.FC = () => {
  const services = [
    {
      icon: <HiCode className="text-5xl text-primary" />,
      title: 'Web Development',
      description: 'Creating responsive and modern websites with the latest technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning'],
      gradient: 'from-blue-500/10 to-purple-500/10'
    },
    {
      icon: <HiDeviceMobile className="text-5xl text-secondary" />,
      title: 'Mobile Apps',
      description: 'Building cross-platform mobile applications with React Native and modern mobile technologies.',
      features: ['Cross Platform', 'Native Performance', 'App Store Ready'],
      gradient: 'from-green-500/10 to-blue-500/10'
    },
    {
      icon: <HiGlobeAlt className="text-5xl text-accent" />,
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      gradient: 'from-yellow-500/10 to-orange-500/10'
    },
  ];

  return (
    <section id="services" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-32 right-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-2xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
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
              What I Offer
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
              My Services
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
              I offer a comprehensive range of services to help bring your digital ideas to life
              with cutting-edge technology and modern design principles.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {/* Card Background */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/30 p-8 rounded-3xl transition-all duration-500 group-hover:bg-gray-800/70 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                        {service.icon}
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300"
                    >
                      {service.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="text-gray-300 leading-relaxed mb-6"
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <motion.ul
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="space-y-3 mb-6"
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 + featureIndex * 0.1 }}
                          className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-full bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg hover:shadow-xl border border-primary/20 hover:border-primary/50"
                    >
                      <span className="mr-2">Learn More</span>
                      <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's work together to bring your ideas to life with cutting-edge technology
                  and exceptional design.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get Started Today
                    <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
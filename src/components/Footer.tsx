import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiCode } from 'react-icons/hi';
import { smoothScroll } from '../utils/smoothScroll';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'API Development',
    'E-commerce Solutions',
    'Technical Consulting'
  ];

  const handleNavClick = (href: string) => {
    smoothScroll(href);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black border-t border-gray-700/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Responsive sizing */}
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-accent/3 rounded-full blur-2xl"></div>

        {/* Floating Code Elements - Hide on mobile for performance */}
        <div className="absolute inset-0 hidden sm:block">
          {['</>', '{}', '()', '[]', '&&', '||'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-white/5 text-lg sm:text-xl lg:text-2xl font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.05, 0.1, 0.05],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Responsive Grid - Single column on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              
              {/* Brand Section - Full width on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="sm:col-span-2 lg:col-span-1 text-center sm:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-6"
                >
                  <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <HiCode className="text-white text-lg sm:text-xl" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Haseeb Pirhar
                    </h3>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base max-w-md mx-auto sm:mx-0"
                >
                  Passionate full-stack developer creating amazing digital experiences 
                  with modern technologies. Let's build something great together!
                </motion.p>

                {/* Contact Info - Stack on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-3"
                >
                  <motion.a
                    href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'haseebpirhar@gmail.com'}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center sm:justify-start text-gray-400 hover:text-primary transition-all duration-300 group"
                  >
                    <HiMail className="mr-3 text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm break-all">{import.meta.env.VITE_CONTACT_EMAIL || 'haseebpirhar@gmail.com'}</span>
                  </motion.a>
                  <motion.a
                    href={`tel:${import.meta.env.VITE_PHONE || '+923367862574'}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center sm:justify-start text-gray-400 hover:text-secondary transition-all duration-300 group"
                  >
                    <HiPhone className="mr-3 text-secondary group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{import.meta.env.VITE_PHONE || '+923367862574'}</span>
                  </motion.a>
                  <motion.a
                    href="https://maps.google.com/?q=Lahore,Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center sm:justify-start text-gray-400 hover:text-accent transition-all duration-300 group"
                  >
                    <HiLocationMarker className="mr-3 text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{import.meta.env.VITE_LOCATION || 'Lahore, Pakistan'}</span>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center sm:text-left"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 relative">
                  Quick Links
                  <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:transform-none w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.button
                        onClick={() => handleNavClick(link.href)}
                        whileHover={{ x: 5, scale: 1.05 }}
                        className="text-gray-400 hover:text-primary transition-all duration-300 text-xs sm:text-sm font-medium group flex items-center justify-center sm:justify-start w-full"
                      >
                        <span className="w-2 h-2 bg-primary/50 rounded-full mr-3 group-hover:bg-primary transition-colors duration-300 flex-shrink-0"></span>
                        {link.name}
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center sm:text-left"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 relative">
                  Services
                  <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:transform-none w-12 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-gray-400 hover:text-secondary transition-colors duration-300 text-xs sm:text-sm font-medium flex items-center justify-center sm:justify-start group cursor-default"
                    >
                      <span className="w-2 h-2 bg-secondary/50 rounded-full mr-3 group-hover:bg-secondary transition-colors duration-300 flex-shrink-0"></span>
                      <span className="text-center sm:text-left">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Social & Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center sm:text-left"
              >
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 relative">
                  Connect With Me
                  <div className="absolute -bottom-2 left-1/2 sm:left-0 transform -translate-x-1/2 sm:transform-none w-12 h-0.5 bg-gradient-to-r from-accent to-primary"></div>
                </h4>

                {/* Social Links - Responsive grid */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 text-gray-400 hover:text-white p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 group"
                      aria-label={social.label}
                    >
                      <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>

                {/* Newsletter Signup - Responsive form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl"
                >
                  <h5 className="text-base sm:text-lg font-medium text-white mb-2 sm:mb-3">Stay Updated</h5>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Get the latest updates about my projects and tech insights.</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 w-2 sm:px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-all duration-300 text-xs sm:text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"
        ></motion.div>

        {/* Bottom Bar - Responsive layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright - Center on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex flex-col sm:flex-row items-center text-gray-400 text-xs sm:text-sm text-center"
              >
                <span className="mb-1 sm:mb-0">© 2024 Haseeb Pirhar. Made with</span>
                <div className="flex items-center">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mx-1 sm:mx-2"
                  >
                    <FaHeart className="text-red-500" />
                  </motion.span>
                  <span>and lots of ☕ in Pakistan</span>
                </div>
              </motion.div>

              {/* Legal Links - Stack on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, color: '#2563eb' }}
                  className="hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, color: '#2563eb' }}
                  className="hover:text-primary transition-colors duration-300"
                >
                  Terms of Service
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, color: '#2563eb' }}
                  className="hover:text-primary transition-colors duration-300"
                >
                  Sitemap
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button - Responsive positioning */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 z-50 group"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-sm sm:text-lg group-hover:scale-110 transition-transform duration-300" />
        </motion.button>

        {/* Decorative Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1.4 }}
          viewport={{ once: true }}
          className="h-0.5 sm:h-1 bg-gradient-to-r from-primary via-secondary to-accent"
        ></motion.div>
      </div>
    </footer>
  );
};

export default Footer;
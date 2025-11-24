import React from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { smoothScroll } from '../utils/smoothScroll';
import { NAVIGATION_ITEMS } from '../utils/constants';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  ];

  const handleNavClick = (href: string) => {
    smoothScroll(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button - Only show on mobile/tablet */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-[70] bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle menu"
      >
        <motion.div
          key={isOpen ? 'close' : 'open'}
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </motion.div>
      </motion.button>

      {/* Mobile Overlay - Only show on mobile/tablet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <motion.aside
        initial={false} // Don't animate on initial load
        animate={{
          x: window.innerWidth >= 1024 ? 0 : (isOpen ? 0 : -320) // Always show on desktop
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl z-50 backdrop-blur-lg border-r border-gray-700/50"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-8 h-full flex flex-col"
        >
          {/* Close button for mobile - only show when sidebar is open */}
          <motion.button
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiX size={20} />
          </motion.button>

          {/* Profile Section */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-6"
            >
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-transparent bg-clip-padding p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative">
                  <img
                    src="/images/sss.jpg"
                    alt="Haseeb Pirhar"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-avatar')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-avatar w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white text-3xl font-bold rounded-full';
                        fallback.textContent = 'HP';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg opacity-60"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Haseeb Pirhar
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-sm font-medium"
            >
              Backend Developer
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-3"
            ></motion.div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 mb-8">
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left py-4 px-6 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 rounded-xl transition-all duration-300 font-medium group relative overflow-hidden"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Download CV Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 mb-8 shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-3">
              <HiDownload className="text-lg" />
              Download CV
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white text-xl transition-all duration-300 p-3 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-6"
          ></motion.div>
        </motion.div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
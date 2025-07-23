import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { HiDownload } from 'react-icons/hi';
import { smoothScroll } from '../utils/smoothScroll';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Web Developer',
          'Frontend Developer',
          'React Developer',
          'UI/UX Designer',
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  const handleGetInTouch = () => {
    smoothScroll('contact');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 lg:pt-0 pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/Hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-xl md:text-2xl text-white/90 mb-2">Hello, I'm</h1>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
            Haseeb Pirhar
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl mb-8 text-white/90"
        >
          I'm a <span ref={typedRef} className="text-accent font-semibold"></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed"
        >
          Passionate about creating amazing web experiences with modern technologies
          and bringing ideas to life through beautiful, functional code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetInTouch}
            className="bg-primary hover:bg-secondary px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <HiDownload />
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
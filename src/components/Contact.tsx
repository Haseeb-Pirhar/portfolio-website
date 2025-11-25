import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { sendMessage, validateFormData } from '../api/contactApi';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  isSubmitting: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  fieldErrors: string[];
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    successMessage: null,
    errorMessage: null,
    fieldErrors: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
    // Clear field errors when user starts typing
    if (formState.fieldErrors.length > 0) {
      setFormState((prev: FormState) => ({
        ...prev,
        fieldErrors: [],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    const errors = validateFormData(formData);
    if (errors.length > 0) {
      setFormState((prev: FormState) => ({
        ...prev,
        fieldErrors: errors,
        errorMessage: null,
      }));
      return;
    }

    setFormState((prev: FormState) => ({
      ...prev,
      isSubmitting: true,
      errorMessage: null,
      successMessage: null,
    }));

    try {
      const response = await sendMessage(formData);

      if (response.success) {
        setFormState((prev: FormState) => ({
          ...prev,
          successMessage:
            response.message || 'Message sent successfully! I will get back to you soon.',
          isSubmitting: false,
          fieldErrors: [],
        }));
        setFormData({ name: '', email: '', message: '' });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormState((prev: FormState) => ({
            ...prev,
            successMessage: null,
          }));
        }, 5000);
      } else {
        throw new Error(response.message || 'Failed to send message');
      }
    } catch (error) {
      setFormState((prev: FormState) => ({
        ...prev,
        errorMessage:
          error instanceof Error
            ? error.message
            : 'An error occurred while sending your message. Please try again.',
        isSubmitting: false,
      }));
    }
  }

  const contactInfo = [
    {
      icon: <HiMail className="text-3xl text-primary" />,
      title: 'Email',
      value: import.meta.env.VITE_CONTACT_EMAIL || 'haseebpirhar@gmail.com',
      link: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'haseebpirhar@gmail.com'}`
    },
    {
      icon: <FaWhatsapp className="text-3xl text-green-500" />,
      title: 'Phone',
      value: import.meta.env.VITE_PHONE || '+923367862574',
      link: `https://wa.me/${(import.meta.env.VITE_PHONE || '+923367862574')
        .replace('+', '')}?text=Hello%20I%20want%20to%20contact%20you`
    },
    {
      icon: <HiLocationMarker className="text-3xl text-accent" />,
      title: 'Location',
      value: import.meta.env.VITE_LOCATION || 'Amana Mall, Lahore',
      link: 'https://www.google.com/maps/place/Amanah+Mall'
    },
  ];


  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/', label: 'WhatsApp' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/haseebpirhar2006/#', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-2xl"></div>

        {/* Floating Email Icons */}
        <div className="absolute inset-0">
          {['@', '✉', '📧', '💌'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-white/5 text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.05, 0.15, 0.05],
                rotate: [0, 180],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
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
              Let's Connect
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
              Get In Touch
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
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              I'm always excited to take on new challenges and collaborate with amazing people.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Let's work together!
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  I'm always interested in new opportunities and exciting projects.
                  Feel free to reach out if you'd like to discuss your ideas or just say hello!
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : undefined}
                    rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/30 p-6 rounded-2xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-4 rounded-xl group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 text-gray-400 hover:text-white p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10"
                      aria-label={social.label}
                    >
                      <span className="text-2xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-white mb-6"
              >
                Send me a message
              </motion.h3>

              {/* Success Message */}
              {formState.successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300 text-sm flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {formState.successMessage}
                </motion.div>
              )}

              {/* Error Message */}
              {formState.errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-sm flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  {formState.errorMessage}
                </motion.div>
              )}

              {/* Field Errors */}
              {formState.fieldErrors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 space-y-2"
                >
                  {formState.fieldErrors.map((error: string, index: number) => (
                    <div
                      key={index}
                      className="p-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-yellow-300 text-xs flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      {error}
                    </div>
                  ))}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={formState.isSubmitting}
                    required
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:bg-gray-800/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={formState.isSubmitting}
                    required
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:bg-gray-800/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formState.isSubmitting}
                    required
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:bg-gray-800/70 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  ></textarea>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: formState.isSubmitting ? 1 : 1.02, y: -2 }}
                  whileTap={{ scale: formState.isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {formState.isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
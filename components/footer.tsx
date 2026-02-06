'use client';

/**
 * Footer: brand, links, expertise summary.
 * No "Services" as hire menu (moonlighting policy compliance).
 */

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-card/50 border-t border-border/30 backdrop-blur-md">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-border/30">
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer mb-3"
            >
              Mukesh
            </motion.div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              I build high-performance web applications and scalable systems. Passionate about clean code and user experience.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Skills'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 4 }}
                  className="text-sm text-foreground/70 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise summary only; not a bookable services list (policy) */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-foreground mb-4">Expertise</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Full-stack development · System design · Performance · Production systems
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm text-foreground/60 text-center md:text-left"
          >
            © {currentYear} Mukesh. All rights reserved.
            <span className="block md:inline md:ml-4 text-foreground/40">
              Crafted with care and built with performance in mind.
            </span>
          </motion.p>

          {/* Scroll to Top */}
          <motion.button
            variants={itemVariants}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-background hover:shadow-lg transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>

        {/* Legal Links */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-border/30 flex justify-center gap-6 text-xs text-foreground/50"
        >
          <a href="#" className="hover:text-foreground/70 transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-foreground/70 transition-colors">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#" className="hover:text-foreground/70 transition-colors">
            Cookie Policy
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}

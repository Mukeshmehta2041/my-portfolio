'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/60 backdrop-blur-xl border-b border-foreground/5 z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex justify-between items-center"
      >
        {/* Logo - full opacity so cyan/blue stays visible on dark background */}
        <motion.button
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex items-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Mukesh logo"
            width={140}
            height={44}
            className="h-9 w-auto opacity-100"
            priority
          />
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-xs font-mono text-foreground/60 hover:text-accent transition-colors relative group uppercase tracking-wide"
            >
              {item}
              <motion.span
                layoutId="underline"
                className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"
              />
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-accent"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </motion.div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-foreground/5 bg-background/40"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 4 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-xs font-mono text-foreground/60 hover:text-accent uppercase tracking-wide transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}

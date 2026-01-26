'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function CTA() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@mukesh.dev', color: 'hover:text-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-cyan-400' },
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-green-400' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-sky-400' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        animate={{
          opacity: inView ? 0.08 : 0,
        }}
        className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Main CTA Content */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Have a Hard Problem?
            <span className="block text-accent">
              I Build Systems That Handle It.
            </span>
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need architectural guidance, full-stack development, or production expertise—let's build something that doesn't break at scale.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
        >
          <motion.a
            href="mailto:hello@mukesh.dev"
            whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(56, 189, 248, 0.25)' }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-none bg-accent text-background font-semibold shadow-luxury-sm hover:shadow-luxury transition-all text-center"
          >
            Let's Talk
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, borderColor: 'rgba(56, 189, 248, 0.8)', boxShadow: '0 0 25px rgba(56, 189, 248, 0.15)' }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 rounded-none border border-accent text-accent font-semibold hover:bg-accent/5 transition-all text-center"
          >
            See My Work
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-lg bg-card/50 border border-border/50 text-foreground/70 transition-all ${social.color}`}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="p-8 rounded-lg bg-gradient-to-br from-card/50 to-card/30 border border-border/50 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                stat: '24H',
                label: 'Response Time',
                description: 'I respond to inquiries within 24 hours',
              },
              {
                stat: '100%',
                label: 'Satisfaction',
                description: 'Committed to exceeding expectations',
              },
              {
                stat: '∞',
                label: 'Availability',
                description: 'Flexible timezones and arrangements',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                >
                  {item.stat}
                </motion.div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-foreground/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

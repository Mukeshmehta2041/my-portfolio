'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const roles = ['Senior Full-Stack Engineer', 'Systems Architect', 'Production Expert'];

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedRole.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 3000);
      }
    } else {
      if (displayedRole.length > 0) {
        timer = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedRole, roleIndex, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left"
        >
          <div>
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-sm font-mono text-accent tracking-widest uppercase">
              Personal portfolio
            </span>
          </motion.div>

          {/* Main headline - Multi-line with individual animations */}
          <div className="mb-8">
            <motion.div custom={0} variants={lineVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
              I Build
            </motion.div>
            <motion.div custom={1} variants={lineVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
              <span className="text-accent">Scalable,</span>
            </motion.div>
            <motion.div custom={2} variants={lineVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
              <span className="text-accent">Secure,</span>
            </motion.div>
            <motion.div custom={3} variants={lineVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight relative">
              <span className="relative inline-block">
                <motion.div
                  className="absolute inset-0 bg-accent/20 blur-2xl rounded-full"
                  animate={{
                    opacity: [0, 0.4, 0],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <span className="text-accent relative z-10">High-Performance</span>
              </span>
              {" "}Systems
            </motion.div>
          </div>

          {/* Animated role with typewriter effect */}
          <motion.div variants={itemVariants} className="mb-12 h-12 flex items-center">
            <div className="text-xl md:text-2xl text-gray-400 font-mono">
              <span className="text-accent">&gt;</span> {displayedRole}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-accent ml-1"
              >
                |
              </motion.span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-background font-semibold rounded text-center transition-all hover:bg-accent/90"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: 'rgba(56, 189, 248, 0.8)', boxShadow: '0 0 20px rgba(56, 189, 248, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-accent text-accent font-semibold rounded text-center transition-all hover:bg-accent/5"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats with counters */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 md:gap-12 max-w-2xl">
            {[
              { value: '20+', label: 'Projects Shipped' },
              { value: '3+', label: 'Years Experience' },
              { value: '1M+', label: 'Users Impacted' },
            ].map((stat, index) => (
              <motion.div key={index} className="text-left">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                  className="text-2xl md:text-3xl font-bold text-accent mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          </div>

          {/* Photo - right side, hidden on mobile, visible from lg up */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex relative justify-center lg:justify-end items-center"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute inset-0 rounded-full ring-2 ring-accent/30 shadow-2xl shadow-accent/10 overflow-hidden bg-foreground/5"
              >
                <Image
                  src="/my-img.png"
                  alt="Mukesh - Systems Architect & Full-Stack Engineer"
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-accent rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

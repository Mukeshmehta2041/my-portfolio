'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        animate={{
          opacity: inView ? 0.05 : 0,
        }}
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-6 md:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-20">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">
            Who I Am
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-3 text-foreground leading-tight tracking-tight">
            I Design and Ship
            <span className="block text-accent">Systems That Survive Scale</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Mukesh is a Senior Full-Stack Engineer with <span className="text-accent font-semibold">3+ years</span> building production systems that handle real-world traffic, pass security audits, and deliver measurable impact.
            </p>

            <p className="text-base text-foreground/70 leading-relaxed">
              I've architected platforms serving millions of users:
            </p>

            <ul className="space-y-4">
              {[
                'Government portals handling 100K+ citizens with GIGW compliance',
                'E-learning platforms with 10K+ active students',
                'Job portals connecting 50K+ listings across organizations',
                'Hospital systems reducing appointment time by 80%',
                'Performance-optimized platforms processing 2M+ transactions annually',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 text-foreground/70"
                >
                  <span className="text-accent flex-shrink-0 mt-1">&gt;</span>
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-base text-foreground/70 leading-relaxed pt-4 border-t border-foreground/10">
              My focus is building fast, secure systems that behave predictably in production.
            </p>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {[
              { label: 'Years Building', value: '3+', icon: '⚙️' },
              { label: 'Projects Shipped', value: '20+', icon: '🚀' },
              { label: 'Users Impacted', value: '1M+', icon: '👥' },
              { label: 'Tech Stack', value: '25+', icon: '🛠️' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="p-6 rounded-none border border-foreground/10 bg-background/50 hover:bg-card hover:border-accent/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-accent font-mono">
                  {stat.value}
                </div>
                <p className="text-xs text-foreground/50 mt-2 uppercase font-mono tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Cloudprism Solutions',
    period: '2023 - Present',
    description:
      'Leading end-to-end delivery of cloud-native web platforms, from architecture and API design to frontend implementation and production hardening.',
    highlights: [
      'Designed and evolved full-stack architecture for multi-tenant platforms',
      'Led cross-functional work across frontend, backend, and DevOps',
      'Improved reliability and performance of customer-facing systems',
      'Mentored engineers and helped standardize engineering practices',
    ],
  },
  {
    title: 'Independent Full-Stack Engineer (Project Work)',
    company: 'Selected Projects',
    period: 'Prior to 2023',
    description:
      'Worked on a range of web and platform initiatives across learning, government, hiring, and healthcare domains, with a focus on production-ready implementations.',
    highlights: [
      'Delivered full-stack features for LMS, portals, and internal tools',
      'Implemented authentication, data models, and integration layers',
      'Optimized performance, monitoring, and deployment workflows',
      'Collaborated with teams to translate requirements into shipped software',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        animate={{
          opacity: inView ? 0.05 : 0,
        }}
        className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/10 pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <motion.div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Career Timeline
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="relative pl-8 pb-8"
            >
              {/* Timeline Dot */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    '0 0 0 0px rgba(34, 197, 94, 0.7)',
                    '0 0 0 10px rgba(34, 197, 94, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="absolute left-0 top-1 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />

              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute left-1.5 top-6 w-0.5 h-24 bg-gradient-to-b from-cyan-400/50 to-transparent"
                />
              )}

              {/* Content Card */}
              <motion.div
                whileHover={{
                  boxShadow: '0 20px 40px rgba(34, 197, 94, 0.1)',
                }}
                className="p-6 rounded-lg bg-gradient-to-br from-card/50 to-card/30 border border-border/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all"
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-2">
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    <p className="text-sm text-foreground/50">{exp.period}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlightIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: highlightIndex * 0.05,
                      }}
                      className="flex gap-2 text-xs text-foreground/60"
                    >
                      <span className="text-cyan-400 font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

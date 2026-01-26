'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description:
      'Leading development of microservices architecture, mentoring junior developers, and architecting scalable solutions for enterprise clients.',
    highlights: [
      'Architected microservices handling 10M+ requests/month',
      'Led team of 5 developers on critical platforms',
      'Improved application performance by 60%',
      'Established best practices for API design and security',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Innovations Ltd.',
    period: '2020 - 2022',
    description:
      'Built and maintained full-stack applications, implemented CI/CD pipelines, and optimized database queries for production systems.',
    highlights: [
      'Developed e-learning platform serving 10K+ students',
      'Implemented OAuth 2.0 authentication system',
      'Optimized database queries reducing response time by 70%',
      'Set up Docker and Kubernetes for containerization',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Web Dynamics Co.',
    period: '2019 - 2020',
    description:
      'Developed responsive user interfaces, implemented state management solutions, and ensured cross-browser compatibility.',
    highlights: [
      'Built responsive websites for 50+ clients',
      'Implemented Redux for complex state management',
      'Achieved 95+ Lighthouse score across projects',
      'Mentored 3 junior developers',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2018 - 2019',
    description:
      'Contributed to feature development, bug fixes, and participated in code reviews while learning industry best practices.',
    highlights: [
      'Developed core features for SaaS platform',
      'Fixed 200+ bugs and implemented improvements',
      'Collaborated with design team on UI implementation',
      'Completed professional training programs',
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
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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

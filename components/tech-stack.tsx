'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Spring Boot', 'GraphQL'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
  { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'AWS', 'Vercel'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Postman', 'Figma'] },
  { category: 'Testing', items: ['Jest', 'Vitest', 'React Testing', 'Cypress'] },
];

export default function TechStack() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="tech"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        animate={{
          opacity: inView ? 0.05 : 0,
        }}
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Stack
            </span>
            <motion.div className="h-1 w-12 bg-gradient-to-l from-cyan-400 to-blue-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technologies & Tools
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of professional development, optimized for performance, scalability, and maintainability.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              {/* Category Title */}
              <motion.h3
                whileHover={{ x: 4 }}
                className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.5,
                  }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
                {tech.category}
              </motion.h3>

              {/* Tech Items */}
              <div className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={itemVariants}
                    whileHover={{
                      x: 8,
                      boxShadow: '0 10px 25px rgba(34, 197, 94, 0.1)',
                    }}
                    className="p-3 rounded-lg bg-gradient-to-r from-card/50 to-card/30 border border-border/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all group/item"
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                      <span className="text-sm text-foreground/80 group-hover/item:text-cyan-400 transition-colors">
                        {item}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies Used in Production', value: '25+' },
            { label: 'Years of Experience', value: '3+' },
            { label: 'Open Source Contributions', value: '40+' },
            { label: 'Production Issues Resolved', value: '1000+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-4 rounded-lg bg-gradient-to-br from-card/50 to-card/30 border border-border/50 backdrop-blur-sm text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <p className="text-xs md:text-sm text-foreground/60 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

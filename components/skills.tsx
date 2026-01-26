'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript ES6+',
      'TypeScript',
      'Tailwind CSS',
      'State Management',
      'Performance Optimization',
      'Shadcn/UI',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'Nest.js',
      'Java Spring Boot',
      'REST APIs',
      'GraphQL',
      'Authentication',
      'Microservices',
    ],
  },
  {
    title: 'Databases',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Prisma ORM',
      'TypeORM',
      'Database Design',
      'Query Optimization',
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'AWS',
      'Vercel',
      'Nginx',
      'PM2',
      'Monitoring',
    ],
  },
];

export default function Skills() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background gradient */}
      <motion.div
        animate={{
          opacity: inView ? 0.05 : 0,
        }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-20">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">
            Technical Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-3 text-foreground leading-tight">
            25+ Technologies <span className="text-accent">Production Ready</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-7 rounded-sm bg-card/60 border border-foreground/10 hover:border-accent/30 shadow-luxury-sm hover:shadow-luxury-sm hover:bg-card/95 transition-all duration-300 group"
            >
              {/* Category Title */}
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="inline-block w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: categoryIndex * 0.05 + skillIndex * 0.05 }}
                    className="flex items-center gap-2 text-foreground/70 group/skill hover:text-cyan-400 transition-colors"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover/skill:bg-cyan-400 transition-colors"
                    />
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-lg bg-gradient-to-r from-card/30 to-card/10 border border-border/30 backdrop-blur-sm"
        >
          <p className="text-center text-foreground/70">
            I'm constantly learning and adapting to new technologies. Always open to exploring cutting-edge frameworks, tools, and architectural patterns to solve complex problems efficiently.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Government Portal',
    description:
      'GIGW-compliant secure government website. Architected with role-based access control, document management, and accessibility standards. Serves 100,000+ citizens with 99.9% uptime.',
    tech: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Docker'],
    impact: '100K+ citizens | 99.9% uptime',
    featured: true,
  },
  {
    title: 'E-Learning Platform',
    description:
      'Full-featured LMS with instructor/student dashboards, video hosting, progress tracking, Stripe integration, and analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    impact: '10K+ students | 500+ courses',
  },
  {
    title: 'Smart Insights App',
    description:
      'Analytics platform helping business owners track sales trends, receive real-time alerts, and optimize revenue.',
    tech: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
    impact: '500+ business owners',
  },
  {
    title: 'Job Portal',
    description:
      'Enterprise job platform with OAuth auth, advanced filtering, company profiles, and multi-source integration.',
    tech: ['Next.js', 'Express', 'PostgreSQL', 'OAuth 2.0'],
    impact: '50K+ listings | 100K+ users',
  },
  {
    title: 'Hospital Management',
    description:
      'SEO-optimized healthcare website with appointment booking, patient records, and headless CMS integration.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Headless CMS'],
    impact: '80% faster bookings',
  },
  {
    title: 'Library System',
    description:
      'Performance-optimized library platform with catalog, reservations, fine tracking, and admin dashboard.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Redis'],
    impact: '20K+ users | 2M+ loans/year',
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div variants={itemVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mb-20">
          <span className="text-sm font-mono text-accent tracking-widest uppercase">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-2 text-foreground">
            Projects That <span className="text-accent">Matter</span>
          </h2>
        </motion.div>

        {/* Featured Project - Large & Asymmetric */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          whileHover={{ y: -10 }}
          className="mb-20 group"
        >
          <div className="relative p-8 md:p-14 rounded-sm border border-accent/30 bg-gradient-to-br from-accent/8 via-background to-background overflow-hidden shadow-luxury-sm group-hover:shadow-luxury transition-all duration-300">
            {/* Animated border glow on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.2) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <div className="mb-8">
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-xs font-mono text-accent tracking-widest uppercase"
                >
                  Flagship Project
                </motion.span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight tracking-tight">
                {projects[0].title}
              </h3>
              <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl leading-relaxed">
                {projects[0].description}
              </p>

              {/* Tech stack with better spacing */}
              <div className="flex flex-wrap gap-3 mb-10">
                {projects[0].tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, borderColor: 'rgba(56, 189, 248, 0.8)' }}
                    className="px-4 py-2 border border-accent/40 text-accent text-sm font-mono rounded-none hover:bg-accent/10 transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                className="inline-block text-accent font-mono text-sm px-4 py-3 border-t border-accent/20"
              >
                {projects[0].impact}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid - Asymmetric */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-7 rounded-sm border border-foreground/10 bg-card/60 hover:bg-card/95 hover:border-accent/40 shadow-luxury-sm hover:shadow-luxury-sm transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-background/50 text-accent/80 border border-accent/20 font-mono rounded-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="text-xs text-accent/60 font-mono pt-4 border-t border-foreground/5">
                  {project.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(56, 189, 248, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 border border-accent text-accent font-semibold rounded-none hover:bg-accent/5 transition-all duration-300"
          >
            Explore Full Portfolio
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

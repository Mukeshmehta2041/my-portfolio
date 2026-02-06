'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Large-Scale Learning Management Platform',
    description:
      'Led the design and development of an enterprise LMS for thousands of concurrent learners, with role-based access, modular course delivery, and instructor analytics dashboards. Implemented secure auth, assessment workflows, and integrated payments backed by a resilient backend.',
    tech: [
      'React',
      'Next.js',
      'Node.js',
      'Spring Boot',
      'REST',
      'GraphQL',
      'MySQL',
      'Redis',
      'Docker',
      'AWS',
    ],
    impact:
      'Thousands of concurrent learners | Stable production releases | Centralized training platform for multiple teams',
    featured: true,
  },
  {
    title: 'Government-Grade Information Portal',
    description:
      'Contributed to a high-compliance public portal using modern SSR architecture and a CMS-driven content model. Focused on accessibility-first UI, secure content publishing workflows, and performance that holds up under public-traffic spikes.',
    tech: ['Next.js', 'Headless CMS', 'PostgreSQL', 'Docker', 'AWS'],
    impact:
      'Public-facing government portal | Accessibility and security aligned with standards | Reliable content publishing at scale',
  },
  {
    title: 'Enterprise Job & Recruitment Platform',
    description:
      'Designed and implemented core modules for a recruitment SaaS handling job listings, candidate pipelines, and admin workflows. Built advanced filtering and search, OAuth-based authentication, and APIs for integrating with external HR systems.',
    tech: ['Next.js', 'Node.js', 'REST APIs', 'OAuth', 'PostgreSQL', 'Cloud Deployment'],
    impact:
      'High-volume job and candidate flows | Consistent hiring workflows across teams | Solid foundation for future integrations',
  },
  {
    title: 'Hospital & Healthcare Web System',
    description:
      'Built a responsive, performance-optimized healthcare website with a focus on patient usability and discoverability. Implemented SEO best practices, CMS-driven updates, maps and contact flows, and accessibility-friendly UI components.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Headless CMS'],
    impact:
      'Improved patient discovery and appointment access | Fast, accessible experience across devices | Simple content operations for staff',
  },
  {
    title: 'Enterprise Assessment & Evaluation Platform',
    description:
      'Developed a secure assessment platform used for recruitment and internal evaluations, including MCQ-based exams, automated scoring pipelines, and analytics views for reviewers. Paid careful attention to exam integrity, data security, and operational simplicity.',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    impact:
      'Standardized assessment flows | Reduced manual scoring effort | Clear, auditable evaluation outcomes',
  },
  {
    title: 'High-Performance Content-Driven Website',
    description:
      'Implemented a headless CMS–driven content platform that separates editorial workflows from the frontend. Integrated GraphQL and Apollo Client, built reusable UI components, and tuned caching and search to keep large content libraries fast and discoverable.',
    tech: ['Next.js', 'WordPress (Headless)', 'GraphQL', 'Apollo Client'],
    impact:
      'Large structured content library | Fast page loads and search | Smooth editorial publishing experience',
  },
  {
    title: 'Cloud-Native Microservices Architecture',
    description:
      'Worked on a cloud-native microservices setup focused on scalability, resilience, and observability. Containerized services, wired up CI/CD pipelines, added centralized logging and metrics, and optimized data access patterns with caching where it actually mattered.',
    tech: ['Docker', 'Kubernetes', 'Redis', 'Elasticsearch', 'CI/CD', 'AWS'],
    impact:
      'More predictable deployments | Better visibility into production | Backend that scales without dramatic rewrites',
  },
  {
    title: 'Business Insights & Analytics Application',
    description:
      'Built a lightweight analytics application that converts raw operational data into clear insights for non-technical users. Designed guided data input flows, implemented trend and alert logic, and kept backend responses fast enough for interactive exploration.',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    impact:
      'Actionable insights for business users | Shorter feedback loops | Data surfaced in a way people actually use',
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
            href="#experience"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(56, 189, 248, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 border border-accent text-accent font-semibold rounded-none hover:bg-accent/5 transition-all duration-300"
          >
            See More Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

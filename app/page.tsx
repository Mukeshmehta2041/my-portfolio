'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import TechStack from '@/components/tech-stack';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-foreground text-lg"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}

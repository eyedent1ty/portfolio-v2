import { FloatingNav } from '@/components/ui/floating-navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Project from '@/components/Project';
import Experience from '@/components/Experience';
import Features from '@/components/Features';
import Approach from '@/components/Approach';
import Contact from '@/components/Contact';

import { navItems } from '@/data';

export default function App() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Project />
      <Experience />
      <Features />
      <Approach />
      <Contact />
    </>
  );
}

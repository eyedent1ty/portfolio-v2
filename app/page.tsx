import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Project from '@/components/Project';
import Experience from '@/components/Experience';
import Features from '@/components/Features';
import Approach from '@/components/Approach';
import Contact from '@/components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
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

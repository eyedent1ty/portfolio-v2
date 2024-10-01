import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Project from '@/components/Project';
import Experience from '@/components/Experience';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experience />
    </>
  );
}

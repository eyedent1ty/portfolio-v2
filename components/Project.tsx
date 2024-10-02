import { HeroParallax } from './ui/hero-parallax';
import { projects } from '@/data';

export default function Project() {
  return (
    <section id="projects" className="min-h-screen my-10">
      <HeroParallax projects={projects} />
    </section>
  );
}

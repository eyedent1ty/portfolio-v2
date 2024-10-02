import { HeroParallax } from './ui/hero-parallax';
import { projects } from '@/data';

export default function Project() {
  return (
    <section className="min-h-screen my-10">
      <HeroParallax projects={projects} />
    </section>
  );
}

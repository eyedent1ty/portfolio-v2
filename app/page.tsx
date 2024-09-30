import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="h-screen bg-secondary"></div>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora-background';
import { FlipWords } from './ui/flip-words';
import { Cover } from './ui/cover';

export function Hero() {
  const words = ['Innovative', 'Impactful', 'Seamless', 'Powerful'];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut'
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-7xl text-foreground font-bold text-center max-w-[1000px] w-full">
          Turning ideas into <br />
          {/* <FlipWords words={words} />digital solutions */}
          <Cover>Seamless</Cover> digital solutions
        </div>
        <div className="font-extralight text-foreground text-base md:text-2xl py-4">
          Hello, I&apos;m John Daniel, a full stack developer based in the
          Philippines.
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

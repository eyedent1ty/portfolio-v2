import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription
} from './ui/text-reveal-card';
import { Meteors } from './ui/meteors';
import { MagicButton } from './ui/magic-button';
import { FlipWords } from './ui/flip-words';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

export default function About() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const flipWords = ['cute', 'beatiful', 'elegant'];

const items = [
  {
    header: (
      <TextRevealCard
        text="My main focus?"
        revealText="Developing efficient software"
        className="h-full"
      >
        <TextRevealCardTitle>
          Aiming for clean and simple code.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover over the card to learn more about my focus.
        </TextRevealCardDescription>
      </TextRevealCard>
    ),
    className: 'md:col-span-2'
  },
  {
    header: (
      <div className="bg-[#1d1c20] h-full rounded-lg">
        <div className="w-full relative max-w-xs">
          <div className="relative px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <h1 className="font-bold text-xl mb-4 relative z-50">
              Meteors because they&apos;re cool
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              I don&apos;t know what to write so I&apos;ll just paste something
              cool here. One more sentence because lorem ipsum is just
              unacceptable. Won&apos;t ChatGPT the shit out of this.
            </p>

            <Meteors number={20} />
          </div>
        </div>
      </div>
    ),
    className: 'md:col-span-1'
  },
  {
    header: (
      <BackgroundGradientAnimation className="h-full w-full">
        <div className="absolute z-50 inset-0 flex items-center justify-center">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Tech enthusiast with a passion for development
          </p>
        </div>
      </BackgroundGradientAnimation>
    ),
    className: 'md:col-span-1'
  },
  {
    header: (
      <div className="h-full w-full bg-[#1d1c20] rounded-lg flex justify-center items-center">
        <div className="text-left space-y-4">
          <p className="text-4xl">
            Let&apos;s build a<FlipWords words={flipWords} />
            <br /> application together!
          </p>
          <div className="flex justify-center">
            <MagicButton>Copy my email address</MagicButton>
          </div>
        </div>
      </div>
    ),
    className: 'md:col-span-2'
  }
];

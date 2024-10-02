import { WobbleCard } from './ui/wobble-card';
import { Meteors } from './ui/meteors';
import { FlipWords } from './ui/flip-words';
import { TypewriterEffect } from './ui/typewriter-effect';
import { BackgroundLines } from './ui/background-lines';
import { Highlight } from './ui/hero-hightlight';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { BackgroundBeams } from './ui/background-beams';

export default function About() {
  const words = [
    {
      text: 'A'
    },
    {
      text: 'Developer',
      className: 'text-tertiary'
    },
    {
      text: 'passionate'
    },
    {
      text: 'about'
    },
    {
      text: 'crafting'
    },
    {
      text: 'interactive'
    },
    {
      text: 'and'
    },
    {
      text: 'robust'
    },
    {
      text: 'web'
    },
    {
      text: 'applications.'
    }
  ];

  const flipWords = ['cute', 'beautiful', 'elegant'];

  return (
    <section id="about" className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <BackgroundLines className="relative bg-quaternary h-full w-full rounded-lg flex justify-center items-center  sm:px-5">
          <TypewriterEffect words={words} className="text-4xl" />
        </BackgroundLines>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-quaternary min-h-[300px] lg:min-h-[600px] xl:min-h-[300px]">
        <BackgroundGradientAnimation className="text-left space-y-4 h-full flex flex-col justify-center items-center">
          <div className="text-3xl sm:text-4xl">
            Let&apos;s build a<FlipWords words={flipWords} />
            <br /> application together!
          </div>
        </BackgroundGradientAnimation>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-quaternary min-h-[300px] lg:min-h-[600px] xl:min-h-[300px]">
        <BackgroundGradientAnimation className="h-full w-full relative px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <h1 className="text-3xl">
            Fueled by <span className="text-tertiary">curiosity</span>
          </h1>

          <p className="font-normal text-base mb-4 relative z-50 text-center">
            I combine creativity with technology to deliver efficient and
            innovative solutions.
          </p>

          <Meteors number={20} />
        </BackgroundGradientAnimation>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-quaternary min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="text-left space-y-4 h-full w-full flex">
          <div className="relative flex items-center justify-center w-full h-full flex-col px-4">
            <h2 className="text-4xl text-center">
              Delivering{' '}
              <Highlight>powerful, scalable, and tailored solutions</Highlight>{' '}
              to meet the needs of businesses of all sizes.
            </h2>
            <BackgroundBeams />
          </div>
        </div>
      </WobbleCard>
    </section>
  );
}

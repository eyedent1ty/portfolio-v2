import { MagicButton } from './ui/magic-button';

export default function Footer() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-5 p-4 mx-auto relative z-10  w-full pt-20 max-w-[1000px] md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center">
          Ready to take <span className="text-tertiary">your</span> digital
          presence to the next level?
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <MagicButton>Let&apos;s get in touch</MagicButton>
      </div>
    </div>
  );
}

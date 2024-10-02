import { Button } from './ui/button';
import { MagicButton } from './ui/magic-button';

import { IconBrandGithubFilled, IconBrandLinkedin } from '@tabler/icons-react';

import { email, githubUrl, linkedInUrl } from '@/data';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-5 p-4 mx-auto relative z-10  w-full pt-20 max-w-[1000px] md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center">
          Ready to take <span className="text-tertiary">your</span> digital
          presence to the next level?
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <a href={`mailto:${email}`}>
          <MagicButton>Let&apos;s get in touch</MagicButton>
        </a>
      </div>
      <footer className="absolute bottom-4 flex flex-col-reverse gap-2 items-center left-4 right-4 sm:flex-row sm:justify-between">
        <p>
          John Daniel |{' '}
          <span className="text-tertiary">Full Stack Developer</span>
        </p>
        <div className="flex gap-2">
          <Button className="p-2" variant="quaternary">
            <a href={githubUrl} target="_blank">
              <IconBrandGithubFilled color="#FACC15" />
            </a>
          </Button>
          <Button className="p-2" variant="quaternary">
            <a href={linkedInUrl} target="_blank">
              <IconBrandLinkedin color="#FACC15" />
            </a>
          </Button>
        </div>
      </footer>
    </section>
  );
}

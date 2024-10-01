import { workExperience } from '@/data';
import { Button } from './ui/moving-border';
import Image from 'next/image';

export default function Experience() {
  return (
    <section className="h-screen py-16 px-5 lg:px-16">
      <h2 className="text-center text-7xl">
        My <span className="text-tertiary">work experience</span>
      </h2>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((work) => (
          <Button
            key={work.id}
            borderRadius="1.75rem"
            className="flex-1 text-primary border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex flex-col p-3 py-6 gap-2 md:p-5 lg:p-10 lg:flex-row lg:items-center">
              <Image
                src={work.thumbnail}
                alt={work.thumbnail}
                className="w-16 md:w-20 lg:w-32"
                width={64}
                height={64}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl ">{work.title}</h1>
                <p className="text-start text-primary mt-3 font-semibold">{work.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
}

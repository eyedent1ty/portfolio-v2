import { workExperience } from '@/data';
import { Button } from './ui/moving-border';
import Image from 'next/image';

export default function Experience() {
  return (
    <section className="min-h-screen py-16 px-5 lg:px-16">
      <h2 className="text-4xl md:text-7xl text-foreground font-bold text-center">
        My <span className="text-tertiary">work experience</span>
      </h2>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((work) => (
          <Button
            key={work.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: 'rgb(30,28,33)',
              backgroundColor:
                'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
              borderRadius: `calc(1.75rem* 0.96)`
            }}
          >
            <div className="flex flex-col p-3 py-6 gap-2 md:p-5 lg:p-10 items-center">
              <Image
                src={work.thumbnail}
                alt={work.thumbnail}
                className="w-16 md:w-20 lg:w-32"
                width={64}
                height={64}
              />
              <div className="flex flex-col items-center lg:ms-5">
                <h1 className="text-tertiary text-center text-xl font-bold md:text-2xl ">
                  {work.title}
                </h1>
                <h2 className="text-center text-lg md:text-xl ">
                  {work.company}
                </h2>
                <p className="text-primary mt-3 font-semibold">{work.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
}

'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue
} from 'framer-motion';
import Image from 'next/image';

export const HeroParallax = ({
  projects
}: {
  projects: {
    title: string;
    image: string;
    link: { repository: string; live?: string };
  }[];
}) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        A small selection <br /> of{' '}
        <span className="text-tertiary">recent projects</span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful projects with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing projects.
      </p>
    </div>
  );
};

export const ProjectCard = ({
  project,
  translate
}: {
  project: {
    title: string;
    image: string;
    link: { repository: string; live?: string };
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate
      }}
      whileHover={{
        y: -20
      }}
      key={project.title}
      className="group/project h-96 w-[30rem] relative flex-shrink-0"
    >
      <a
        href={project.link.live ? project.link.live : project.link.repository}
        target="_blank"
      >
        <Image
          src={project.image}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={project.title}
        />
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/project:opacity-80 bg-black pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover/project:opacity-100 flex items-center justify-between right-4 gap-5">
          <h2 className="text-white">{project.title}</h2>
        </div>
      </a>
    </motion.div>
  );
};

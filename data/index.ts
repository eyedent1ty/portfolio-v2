import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2
} from '@tabler/icons-react';

export const workExperience = [
  {
    id: 1,
    title: 'Freelance Software Developer',
    desc: 'Engineered user-friendly web applications using modern JavaScript frameworks, primarily React, enhancing client satisfaction through tailored solutions.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg'
  },
  {
    id: 2,
    title: 'Frontend Developer Intern',
    company: 'Pixel8 Web Solutions & Consultancy Inc',
    desc: 'Contributed to the development of engaging user interfaces while collaborating with a cross-functional team. Led daily stand-ups, ensuring alignment and timely project delivery.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg'
  },
  {
    id: 3,
    title: 'Frontend Developer Intern',
    company: 'Gleent Incorporated',
    desc: 'Gained hands-on experience in building responsive web pages using HTML, CSS, and JavaScript, while participating in collaborative team projects.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg'
  },
  {
    id: 4,
    title: 'Computer Programmer',
    company: 'Yazaki Torres Manufacturing Inc.',
    desc: 'Developed efficient payroll software using C++, streamlining payroll processes and enhancing accuracy in financial operations for the company.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg'
  }
];

export const features = [
  {
    title: 'Built for developers',
    description:
      'Built for engineers, developers, dreamers, thinkers and doers.',
    icon: <IconTerminal2 />
  },
  {
    title: 'Ease of use',
    description:
      "It's as easy as using an Apple, and as expensive as buying one.",
    icon: <IconEaseInOut />
  },
  {
    title: 'Pricing like no other',
    description:
      'Our prices are best in the market. No cap, no lock, no credit card required.',
    icon: <IconCurrencyDollar />
  },
  {
    title: '100% Uptime guarantee',
    description: 'We just cannot be taken down by anyone.',
    icon: <IconCloud />
  },
  {
    title: 'Multi-tenant Architecture',
    description: 'You can simply share passwords instead of buying new seats',
    icon: <IconRouteAltLeft />
  },
  {
    title: '24/7 Customer Support',
    description:
      'We are available a 100% of the time. Atleast our AI Agents are.',
    icon: <IconHelp />
  },
  {
    title: 'Money back guarantee',
    description: 'If you donot like EveryAI, we will convince you to like us.',
    icon: <IconAdjustmentsBolt />
  },
  {
    title: 'And everything else',
    description: 'I just ran out of copy ideas. Accept my sincere apologies',
    icon: <IconHeart />
  }
];

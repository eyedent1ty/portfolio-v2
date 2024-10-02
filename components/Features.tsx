import { cn } from '@/lib/utils';
import { features } from '@/data';
import Image from 'next/image';

export default function Features() {
  return (
    <section
      id="expertise"
      className="min-h-screen flex flex-col justify-center py-16 px-5 lg:px-16"
    >
      <div className="sm:hidden text-4xl md:text-7xl text-foreground font-bold text-center flex flex-col">
        <span>Your Project,</span>{' '}
        <span className="text-tertiary">My Expertise</span>
      </div>
      <div className="hidden sm:block text-4xl md:text-7xl text-foreground font-bold text-center">
        <span>Your Project,</span>{' '}
        <span className="text-tertiary">My Expertise</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature dark:bg-quaternary',
        (index === 0 || index === 4) && 'lg:border-l border-neutral-800',
        index < 4 && 'lg:border-b border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-tertiary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

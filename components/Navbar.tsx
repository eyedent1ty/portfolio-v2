import { Home, User, MessageCircle } from 'lucide-react';
import { FloatingNav } from './ui/floating-navbar';

export function Navbar() {
  const navItems = [
    {
      name: 'About',
      link: '#about',
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />
    },
    {
      name: 'Projects',
      link: '#projects',
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />
    },
    {
      name: 'Experience',
      link: '#experience',
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      )
    },
    {
      name: 'Expertise',
      link: '#expertise',
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      )
    },
    {
      name: 'Approach',
      link: '#approach',
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      )
    },
    {
      name: 'Contact',
      link: '#contact',
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      )
    }
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

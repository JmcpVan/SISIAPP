
'use client';

import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#', label: 'Acerca de' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#legal', label: 'Legal' },
  { href: '#contacto', label: 'Contacto' },
  { href: '/privacy', label: 'Privacidad' },
  { href: '#help', label: 'Ayuda' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full h-20 transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-sm border-b border-white/20'
          : 'bg-black'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white transition-colors hover:text-white/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

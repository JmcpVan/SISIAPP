import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { Logo } from '@/components/icons/logo';

const navLinks = [
  { href: '#', label: 'Acerca de' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#', label: 'Póliza de Seguro' },
  { href: '#', label: 'Contacto' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full text-primary h-20 bg-background border-b">
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
              className="text-sm font-medium transition-colors hover:text-primary/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* The "Entrar" button has been removed */}
        </div>
      </div>
    </header>
  );
}

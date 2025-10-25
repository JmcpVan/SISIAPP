import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';
import { Logo } from '@/components/icons/logo';

const navLinks = [
  { href: '#', label: 'Comprar todo' },
  { href: '#', label: 'Computadoras' },
  { href: '#', label: 'Tabletas' },
  { href: '#', label: 'Drones y cámaras' },
  { href: '#', label: 'Audio' },
  { href: '#', label: 'Celulares' },
  { href: '#', label: 'T.V. y cine en casa' },
  { href: '#', label: 'Tecnología portátil' },
  { href: '#', label: 'Oferta' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 justify-center px-8 lg:px-16">
            <div className="relative w-full max-w-md">
              <Input type="search" placeholder="Buscar productos..." className="pr-10" />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                  <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Entrar</span>
            </Button>
            <Button variant="ghost" className="hidden md:flex items-center gap-2">
              <Heart className="h-5 w-5" />
              <span>Favoritos</span>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline">Carrito</span>
              <span className="bg-primary text-primary-foreground rounded-full px-2 text-xs">0</span>
            </Button>
             <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="hidden md:flex h-12 items-center justify-center border-t bg-gray-50">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

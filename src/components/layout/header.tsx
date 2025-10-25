import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search } from 'lucide-react';
import { Logo } from '@/components/icons/logo';

const navLinks = [
  { href: "#", label: "Todos los servicios" },
  { href: "#", label: "Consultoría" },
  { href: "#", label: "Desarrollo" },
  { href: "#", label: "Marketing" },
  { href: "#", label: "Diseño" },
  { href: "#", label: "Soporte" },
  { href: "#", label: "Ofertas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          <div className="flex items-center gap-4">
             <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-8">
                    <Logo />
                  </Link>
                  <nav className="grid gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex w-full items-center py-2 text-lg font-semibold"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="hidden md:flex h-12 items-center justify-center border-t">
            <nav className="flex items-center space-x-6 text-sm font-medium">
                {navLinks.slice(0, 3).map((link) => (
                     <Link
                        key={link.label}
                        href={link.href}
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
}
